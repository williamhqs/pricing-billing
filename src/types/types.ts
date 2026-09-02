export const Step = {
  Init: "init",
  FeeConfirmation: "feeConfirmation",
  FeeCollection: "feeCollection",
  FeeAdjustment: "feeAdjustment",
} as const;

export type Step = (typeof Step)[keyof typeof Step];
