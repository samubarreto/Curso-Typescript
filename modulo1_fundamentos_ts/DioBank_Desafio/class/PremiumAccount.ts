import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  premiumDeposit = (value: number): void => {
    if (this.validateStatus() && value > 0) {
      this.setBalance(value + 10);
      console.log(`${this.getName()} depositou R$${value} com R$10 de Bônus | Novo Saldo: R$${this.getBalance()}`)
    }
  }

  validateStatus = (): boolean => {
    if (this.getStatus()) {
      return this.getStatus()
    }
    throw new Error('Conta inválida')
  }
}