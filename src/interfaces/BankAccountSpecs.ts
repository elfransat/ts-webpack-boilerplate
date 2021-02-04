import { KeySpec } from "./KeySpec";

export interface BankAccountSpecs {
  deposit: (amount: number) => void;
  getBalance: () => number;
  getKey: () => KeySpec;
}
