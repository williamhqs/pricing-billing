import type {
  GthrAfterFeeRequest,
  GthrAfterFeeResponse,
  FeeCollectionResult,
} from "../types/api";
import { ApiError } from "./calcFeeRegDtl";

const API_BASE = "/api";
const ENDPOINT = `${API_BASE}/gthrAfterFee/execute`;
const REQUEST_TIMEOUT_MS = 30_000;
const SUCCESS_CODE = "0000";

function formatTxDt(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}${m}${d}`;
}

function formatSysTm(): string {
  const now = new Date();
  const p2 = (n: number) => String(n).padStart(2, "0");
  const p3 = (n: number) => String(n).padStart(3, "0");
  return (
    `${now.getFullYear()}-${p2(now.getMonth() + 1)}-${p2(now.getDate())} ` +
    `${p2(now.getHours())}:${p2(now.getMinutes())}:${p2(now.getSeconds())}.${p3(now.getMilliseconds())}`
  );
}

export interface GthrAfterFeeParams {
  bizSnglNo: string;
  custNo: string;
  custAcctNo: string;
  coltfeAcctNo: string;
  curCd: string;
  feeNo: string;
  feeNm: string;
  actlRecvAmt: number;
  txIntdNo: string;
}

function buildRequest(p: GthrAfterFeeParams): GthrAfterFeeRequest {
  const ts = Date.now();
  return {
    intdNo: `intd${ts}`,
    bizSnglNo: p.bizSnglNo,
    servSnglNo: `serv${ts}`,
    tenantNo: "001",
    txOrgNo: "001",
    txDt: formatTxDt(),
    sysTm: formatSysTm(),
    operTelrNo: "001",
    lunchAppSysCd: "004",
    custNo: p.custNo,
    traceId: `TRC${formatTxDt()}${String(ts).slice(-10)}`,
    spanId: `SPN${String(ts).slice(-8)}`,
    servCd: "SC6000D",
    reqePtyAppSysCd: "TELLER",
    tranCd: "0101",
    terminalTypCd: "01",
    baseProdtNo: "DPST001",
    lprOrgNo: "103651000036",
    authTelrNo: "T05219",
    bizAccessChnlCd: "01",
    txSceneCd: "1001",
    bizSn: `BSN${formatTxDt()}${String(ts).slice(-6)}`,
    cashAnlyzCd: "1001",
    txIntdNo: p.txIntdNo,
    custAcctNo: p.custAcctNo,
    relaSeqNo: "000001",
    reqFeeHead: {
      feeItemScnt: "1",
      cfmFlag: "1",
      cashrmtFlgCd: "1",
      cashTranFlgCd: "1",
      coltfeAcctNo: p.coltfeAcctNo,
      curCd: p.curCd,
      reqFeeList: [
        {
          feeNm: p.feeNm,
          feeNo: p.feeNo,
          actlRecvAmt: p.actlRecvAmt,
        },
      ],
    },
  };
}

/**
 * 调用 B000TL 接口执行收费
 */
export async function gthrAfterFee(
  params: GthrAfterFeeParams,
): Promise<FeeCollectionResult> {
  const requestBody = buildRequest(params);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
      signal: controller.signal,
    });
  } catch (err: unknown) {
    if (err instanceof DOMException && err.name === "AbortError") {
      throw new ApiError("Request timeout, please try again later");
    }
    throw new ApiError(
      `Network error: ${err instanceof Error ? err.message : "unknown"}`,
    );
  } finally {
    clearTimeout(timeoutId);
  }

  if (!response.ok) {
    let body: unknown;
    try { body = await response.json(); } catch { /* ignore */ }
    throw new ApiError(`Server error (HTTP ${response.status})`, response.status, body);
  }

  let data: GthrAfterFeeResponse;
  try {
    data = await response.json();
  } catch {
    throw new ApiError("Invalid JSON response from server");
  }

  if (!data.success || data.rspndCd !== SUCCESS_CODE) {
    throw new ApiError(data.rspndInfo || `Business error (code: ${data.rspndCd})`);
  }

  return {
    bizSnglNo: data.bizSnglNo,
    feeCollected: data.rspFeeHead?.rspFeeList?.[0]
      ? `${data.rspFeeHead.rspFeeList[0].actlRecvAmt}`
      : String(params.actlRecvAmt),
    collectionMethod: "Transfer",
    collectionTime: data.servPtyRetnTs,
    status: "Collected",
  };
}
