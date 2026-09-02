import type {
  CalcFeeRegDtlRequest,
  CalcFeeRegDtlResponse,
  FeeCalculationResult,
  TransferFormData,
} from "../types/api";
import { currencyAlphaToNumeric } from "../utils/currency";

const API_BASE = "/api";
const CALC_FEE_ENDPOINT = `${API_BASE}/calcFeeRegDtl/execute`;
const REQUEST_TIMEOUT_MS = 30_000;
const SUCCESS_CODE = "0000";

export class ApiError extends Error {
  readonly statusCode?: number;
  readonly responseBody?: unknown;

  constructor(message: string, statusCode?: number, responseBody?: unknown) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.responseBody = responseBody;
  }
}

/** yyyyMMdd */
function formatTxDt(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}${m}${d}`;
}

/** yyyy-MM-dd HH:mm:ss.SSS */
function formatSysTm(): string {
  const now = new Date();
  const p2 = (n: number) => String(n).padStart(2, "0");
  const p3 = (n: number) => String(n).padStart(3, "0");
  return (
    `${now.getFullYear()}-${p2(now.getMonth() + 1)}-${p2(now.getDate())} ` +
    `${p2(now.getHours())}:${p2(now.getMinutes())}:${p2(now.getSeconds())}.${p3(now.getMilliseconds())}`
  );
}

function buildRequest(formData: TransferFormData): CalcFeeRegDtlRequest {
  const ts = Date.now();
  const acctNo = formData.payerAccountNo.trim();
  const txCurCd = currencyAlphaToNumeric(formData.currency) ?? "156";

  return {
    intdNo: `intd${ts}`,
    bizSnglNo: `biz${ts}`,
    tenantNo: "001",
    txOrgNo: "001",
    txDt: formatTxDt(),
    sysTm: formatSysTm(),
    operTelrNo: "001",
    lunchAppSysCd: "001",
    terminalTypCd: "01",
    custNo: "20260330000002",
    tranCd: "0101",
    sglProdtAfsProdtCd: "AFS202608250317",
    custAcctNo: acctNo,
    mainAcctNo: acctNo,
    artiQty: 1,
    vouchTypCd: "850",
    txOppnntAcctNo: formData.payeeAccountNo.trim(),
    bizKindCd: "1002",
    liqdChnlKindCd: "",
    cashTranFlgCd: "1",
    cntptyOpenAcctOrgNo: "9901",
    cntptyAcctRelaSeqNo: "000001",
    tsfinTsfoutFlgCd: "1",
    openAcctOrgNo: "103651000036",
    relaSeqNo: "000003",
    txOppnntCustNo: "C20260825841726",
    dlwthATsfinOrgBetnSpanCd: "4",
    dlwthOpenactOrgBetnSpanCd: "01",
    elecCashFlg: "0",
    gnrlPrvcyFlgCd: "1",
    crtbdnFlgCd: "2",
    cardAttrCd: "1",
    rcuEmplyFlg: "0",
    stsfyYearsClosAcctTypCd: "00",
    haveAcctNoFlg: "1",
    billTypCd: "01",
    cardTypCd: "02",
    txAmt: Number(formData.transactionAmount.trim()),
    rwInsdoutsdFlgCd: "1",
    ugntFlg: "0",
    txCurCd,
    custTypCd: "1",
    reqFeeList: [
      {
        feeNm: "汇兑转账手续费-对公",
        telrAdjAmt: 1,
        feeNo: "1605",
      },
    ],
    remark: formData.remark.trim() || undefined,
  };
}

function validateFormData(formData: TransferFormData): string | null {
  if (!formData.payerAccountNo.trim()) {
    return "Payer Account No. is required";
  }
  if (!formData.payeeAccountNo.trim()) {
    return "Payee Account No. is required";
  }
  if (!formData.transactionAmount.trim()) {
    return "Transaction Amount is required";
  }
  const amount = Number(formData.transactionAmount.trim());
  if (Number.isNaN(amount) || amount <= 0) {
    return "Transaction Amount must be a positive number";
  }
  if (!currencyAlphaToNumeric(formData.currency)) {
    return "Unsupported currency";
  }
  return null;
}

// ── response parser ──────────────────────────────────────────────────

function parseResponse(
  data: CalcFeeRegDtlResponse,
  currency: string,
): FeeCalculationResult {
  if (!data.success || data.rspndCd !== SUCCESS_CODE) {
    throw new ApiError(
      data.rspndInfo || `Business error (code: ${data.rspndCd})`,
    );
  }

  const { bizSnglNo, rspFeeHead } = data;

  if (!bizSnglNo) {
    throw new ApiError("Response missing bizSnglNo");
  }
  if (!rspFeeHead?.rspFeeList?.length) {
    throw new ApiError("Response missing fee list");
  }

  const feeItem = rspFeeHead.rspFeeList[0];
  const currencyLabel = currency.toUpperCase();

  return {
    bizSnglNo,
    feeType: "Domestic Transfer Fee - Corporate", // feeItem.feeNm
    feeCode: feeItem.feeNo ?? "",
    baseFee: String(feeItem.recvblAmt ?? ""),
    discount: String(feeItem.prefrAmt ?? ""),
    proposedFee: `${feeItem.actlRecvAmt ?? ""} ${currencyLabel}`,
    currency: currencyLabel,
  };
}

// ── main export ──────────────────────────────────────────────────────

/**
 * call B00047 interface to calculate fee for a transfer
 *
 * @throws {ApiError} validation failed, network error, timeout, HTTP error or business error returned
 */
export async function calcFeeRegDtl(
  formData: TransferFormData,
): Promise<FeeCalculationResult> {
  const validationError = validateFormData(formData);
  if (validationError) {
    throw new ApiError(validationError);
  }

  const requestBody = buildRequest(formData);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(CALC_FEE_ENDPOINT, {
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
    try {
      body = await response.json();
    } catch {
      // ignore
    }
    throw new ApiError(
      `Server error (HTTP ${response.status})`,
      response.status,
      body,
    );
  }

  let data: CalcFeeRegDtlResponse;
  try {
    data = await response.json();
  } catch {
    throw new ApiError("Invalid JSON response from server");
  }

  return parseResponse(data, formData.currency);
}