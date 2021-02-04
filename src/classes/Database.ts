import { BankAccountSpecs } from "../interfaces/BankAccountSpecs";
import { KeySpec } from "../interfaces/KeySpec";

export class Database {
  accounts: BankAccountSpecs[] = [];

  constructor() {}

  insert(account: BankAccountSpecs): boolean {
    const foundDuplicate = this.find(account.getKey());
    if (Boolean(foundDuplicate)) return false;

    this.accounts.push(account);
    return true;
  }

  find(key: KeySpec): BankAccountSpecs | undefined {
    return this.accounts.find((account) => account.getKey().equals(key));
  }

  delete(key: KeySpec): boolean {
    const found = this.find(key);
    this.accounts = this.accounts.filter(
      (account) => !account.getKey().equals(key)
    );
    return Boolean(found);
  }
}
