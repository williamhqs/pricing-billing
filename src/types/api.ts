// B00047 - calcFeeRegDtl/execute interface definitions

export interface ReqFeeItem {
  feeNm: string;
  telrAdjAmt: number;
  feeNo: string;
}

export interface CalcFeeRegDtlRequest {
  intdNo: string;
  bizSnglNo: string;
  tenantNo: string;
  txOrgNo: string;
  txDt: string;
  sysTm: string;
  operTelrNo: string;
  lunchAppSysCd: string;
  terminalTypCd: string;
  custNo: string;
  tranCd: string;
  sglProdtAfsProdtCd: string;
  custAcctNo: string;
  mainAcctNo: string;
  artiQty: number;
  vouchTypCd: string;
  txOppnntAcctNo: string;
  bizKindCd: string;
  liqdChnlKindCd: string;
  cashTranFlgCd: string;
  cntptyOpenAcctOrgNo: string;
  cntptyAcctRelaSeqNo: string;
  tsfinTsfoutFlgCd: string;
  openAcctOrgNo: string;
  relaSeqNo: string;
  txOppnntCustNo: string;
  dlwthATsfinOrgBetnSpanCd: string;
  dlwthOpenactOrgBetnSpanCd: string;
  elecCashFlg: string;
  gnrlPrvcyFlgCd: string;
  crtbdnFlgCd: string;
  cardAttrCd: string;
  rcuEmplyFlg: string;
  stsfyYearsClosAcctTypCd: string;
  haveAcctNoFlg: string;
  billTypCd: string;
  cardTypCd: string;
  txAmt: number;
  rwInsdoutsdFlgCd: string;
  ugntFlg: string;
  txCurCd: string;
  custTypCd: string;
  reqFeeList: ReqFeeItem[];
  remark?: string;
}

export interface RspFeeItem {
  telrAdjAmt: number | null;
  recvblAmt: number;
  feeNo: string;
  prefrAmt: number;
  actlRecvAmt: number;
}

export interface RspFeeHead {
  feeItemScnt: string;
  recvblTotalAmt: number;
  shouldDstrnTotalAmt: number;
  cfmFlag: string | null;
  afltFlg: string;
  cashrmtFlgCd: string | null;
  cashTranFlgCd: string;
  txAmt: number | null;
  txCurCd: string;
  custAcctNo: string | null;
  rspFeeList: RspFeeItem[];
}

export interface CalcFeeRegDtlResponse {
  traceId: string | null;
  spanId: string | null;
  tenantNo: string;
  uid: string;
  txDt: string;
  sysTm: string;
  intdNo: string;
  bizSnglNo: string;
  servSnglNo: string;
  servCd: string | null;
  success: boolean;
  rspndCd: string;
  rspndInfo: string;
  operTelrNo: string;
  txOrgNo: string;
  hintRspscdAssmblg: string | null;
  servPtyIpAddr: string;
  dataCount: number;
  thatPgKeprcdQty: number;
  currPgnum: number;
  bizSn: string | null;
  custNo: string | null;
  lprOrgNo: string | null;
  authTelrNo: string | null;
  telrSn: string | null;
  insdbnkRspndCd: string | null;
  insdbnkRspndInfo: string | null;
  canRetry: boolean;
  rspFeeHead: RspFeeHead;
  servPtyRetnTs: string;
}

export interface TransferFormData {
  payerAccountNo: string;
  payeeAccountNo: string;
  transactionAmount: string;
  currency: string;
  remark: string;
}

export interface FeeCalculationResult {
  bizSnglNo: string;
  intdNo: string;
  feeType: string;
  feeCode: string;
  baseFee: string;
  discount: string;
  proposedFee: string;
  currency: string;
}

// ── biz-asset/sync 接口 ─────────────────────────────────────────────

/** biz-asset/sync 请求中的 jsonData */
export interface BizAssetJsonData {
  bizSnglNo: string;
  custNo: string;
  custName: string;
  custLevel: string;
  feeNo: string;
  feeNm: string;
  actlRecvAmt: number;
  custAcctNo: string;
  approvalOpinion: string;
  intdNo?: string;
}

/** biz-asset/sync 完整请求体 */
export interface BizAssetSyncRequest {
  groupCode: string;
  code: string;
  name: string;
  typeConfigCode: string;
  jsonData: BizAssetJsonData;
}

/** biz-asset/sync 响应 */
export interface BizAssetSyncResponse {
  success?: boolean;
  code?: string;
  message?: string;
  [key: string]: unknown;
}

// ── queryApprovalResult ─────────────────────────────────────────────

export const ProcessStatus = { APPROVING: "1", APPROVED: "2", REJECTED: "3", REVOKED: "4", TERMINATED: "5" } as const;
export const ProcessStatusLabel: Record<string, string> = { "1": "Approving", "2": "Approved", "3": "Rejected", "4": "Revoked", "5": "Terminated" };
export const ExecuteStatus = { NOT_EXECUTED: "1", SUCCESS: "2", FAILED: "3" } as const;

export interface ApprovalJsonData {
  bizSnglNo: string;
  custNo: string;
  custAcctNo?: string;
  feeNm: string;
  actlRecvAmt: number;
  feeNo: string;
  custName: string;
  custLevel: string;
  approvalOpinion: string;
  intdNo?: string;
}
export interface ApprovalResultItem { id: string; code: string; name: string; typeConfigCode: string; typeConfigName: string; processStatus: string; executeStatus: string; jsonData: ApprovalJsonData; [key: string]: unknown; }
export interface QueryApprovalResultRequest { typeConfigCode: string; bizSnglNo?: string; custNo?: string; custAcctNo?: string; }
export interface QueryApprovalResultResponse { code: string; msg: string; data: ApprovalResultItem[]; permitPropertys: unknown; }

// ── B000TL gthrAfterFee ─────────────────────────────────────────────

export interface GthrReqFeeItem { feeNm: string; feeNo: string; actlRecvAmt: number; }
export interface GthrReqFeeHead { feeItemScnt: string; cfmFlag: string; cashrmtFlgCd: string; cashTranFlgCd: string; coltfeAcctNo: string; curCd: string; reqFeeList: GthrReqFeeItem[]; }
export interface GthrAfterFeeRequest { intdNo: string; bizSnglNo: string; servSnglNo: string; tenantNo: string; txOrgNo: string; txDt: string; sysTm: string; operTelrNo: string; lunchAppSysCd: string; custNo: string; traceId: string; spanId: string; servCd: string; reqePtyAppSysCd: string; tranCd: string; terminalTypCd: string; baseProdtNo: string; lprOrgNo: string; authTelrNo: string; bizAccessChnlCd: string; txSceneCd: string; bizSn: string; cashAnlyzCd: string; txIntdNo: string; custAcctNo: string; relaSeqNo: string; reqFeeHead: GthrReqFeeHead; }
export interface GthrAfterFeeResponse { intdNo: string; bizSnglNo: string; servSnglNo: string; success: boolean; rspndCd: string; rspndInfo: string; rspFeeHead: { txCurCd: string; rspFeeList: RspFeeItem[] | null; [key: string]: unknown; }; servPtyRetnTs: string; [key: string]: unknown; }
export interface FeeCollectionResult { bizSnglNo: string; feeCollected: string; collectionMethod: string; collectionTime: string; status: string; }
