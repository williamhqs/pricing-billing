import type {
  BizAssetSyncRequest,
  BizAssetSyncResponse,
} from "../types/api";
import { ApiError } from "./calcFeeRegDtl";

const API_BASE = "/biz-api";
const BIZ_ASSET_SYNC_ENDPOINT = `${API_BASE}/biz-asset/sync`;
const REQUEST_TIMEOUT_MS = 30_000;

export interface ApprovalFormData {
  bizSnglNo: string;
  custNo: string;
  custName: string;
  feeNo: string;
  feeNm: string;
  actlRecvAmt: number;
  custAcctNo: string;
  approvalOpinion: string;
  intdNo?: string;
}

function buildRequest(data: ApprovalFormData): BizAssetSyncRequest {
  return {
    groupCode: "001",
    code: data.custNo,
    name: data.custName,
    typeConfigCode: "BANK_PRICING",
    jsonData: {
      bizSnglNo: data.bizSnglNo,
      custNo: data.custNo,
      custName: data.custName,
      custLevel: "Platinum client",
      feeNo: data.feeNo,
      feeNm: data.feeNm,
      actlRecvAmt: data.actlRecvAmt,
      custAcctNo: data.custAcctNo,
      approvalOpinion: data.approvalOpinion,
      intdNo: data.intdNo,
    },
  };
}

/**
 * Call biz-asset/sync rest API to synchronize fee approval data.
 *
 * @throws {ApiError}
 */
export async function bizAssetSync(
  data: ApprovalFormData,
): Promise<BizAssetSyncResponse> {
  const requestBody = buildRequest(data);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(BIZ_ASSET_SYNC_ENDPOINT, {
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

  let result: BizAssetSyncResponse;
  try {
    result = await response.json();
  } catch {
    throw new ApiError("Invalid JSON response from server");
  }

  return result;
}
