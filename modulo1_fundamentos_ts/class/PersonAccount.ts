import { SamuAccount } from "./SamuAccount";

export class PersonAccount extends SamuAccount {
  private cpf: string

  constructor(name: string, cpf: string, accountNumber: number) {
    super(name, accountNumber)
    this.cpf = cpf;
  }

  getLoan = (): void => {
    if (this.status) {
      console.log(`Person ${this.getName()} got a loan`)
    } else {
      console.log("Invalid account")
    }
  }

  deposit = (): void => {
    if (this.status) {
      console.log(`Person ${this.getName()} deposited`)
    } else {
      console.log("Invalid account")
    }
  };
}