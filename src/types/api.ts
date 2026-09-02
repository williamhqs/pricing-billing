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
  approvalOpinion: string;
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
