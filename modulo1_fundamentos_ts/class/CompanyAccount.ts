import { SamuAccount } from "./SamuAccount";

export class CompanyAccount extends SamuAccount {
  private cnpj: string

  constructor(name: string, cnpj: string, accountNumber: number) {
    super(name, accountNumber);
    this.cnpj = cnpj;
  }

  getLoan = (): void => {
    console.log(`Company ${this.getName()} got a loan`)
  }

  deposit = (): void => {
    console.log(`Company ${this.getName()} deposited`)
  };
}