import type {
  QueryApprovalResultRequest,
  QueryApprovalResultResponse,
} from "../types/api";
import { ApiError } from "./calcFeeRegDtl";

const API_BASE = "/biz-api";
const ENDPOINT = `${API_BASE}/biz-asset/queryApprovalResult`;
const REQUEST_TIMEOUT_MS = 30_000;

/**
 * 查询审批结果
 * custNo / bizSnglNo / custAcctNo 三个至少传一个
 */
export async function queryApprovalResult(
  params: { bizSnglNo?: string; custNo?: string; custAcctNo?: string },
): Promise<QueryApprovalResultResponse> {
  if (!params.bizSnglNo && !params.custNo && !params.custAcctNo) {
    throw new ApiError("At least one query parameter is required");
  }

  const body: QueryApprovalResultRequest = {
    typeConfigCode: "BANK_PRICING",
    ...(params.bizSnglNo && { bizSnglNo: params.bizSnglNo }),
    ...(params.custNo && { custNo: params.custNo }),
    ...(params.custAcctNo && { custAcctNo: params.custAcctNo }),
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
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
    let errBody: unknown;
    try { errBody = await response.json(); } catch { /* ignore */ }
    throw new ApiError(`Server error (HTTP ${response.status})`, response.status, errBody);
  }

  let data: QueryApprovalResultResponse;
  try {
    data = await response.json();
  } catch {
    throw new ApiError("Invalid JSON response from server");
  }

  if (data.code !== "200") {
    throw new ApiError(data.msg || `Business error (code: ${data.code})`);
  }

  return data;
}
