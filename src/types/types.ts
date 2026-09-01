export const Step = {
  Init: "init",
  FeeConfirmation: "feeConfirmation",
  FeeCollection: "feeCollection",
} as const;

export type Step = (typeof Step)[keyof typeof Step];
