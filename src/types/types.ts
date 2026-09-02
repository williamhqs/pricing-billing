export const Step = {
  Init: "init",
  FeeConfirmation: "feeConfirmation",
  FeeCollection: "feeCollection",
  FeeAdjustment: "feeAdjustment",
  FeeCollectionResult: "feeCollectionResult",
  FeeCollectionProcessComplete: "feeCollectionProcessComplete",
} as const;

export type Step = (typeof Step)[keyof typeof Step];
