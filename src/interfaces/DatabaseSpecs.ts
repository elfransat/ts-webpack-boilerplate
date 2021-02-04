import { Key } from "../classes/Key";
import { BankAccount } from "../classes/BankAccount";

export interface DatabaseSpecs {
  insert: (account: BankAccount) => boolean;
  find: (key: Key) => number;
  delete: (key: Key) => boolean;
}
