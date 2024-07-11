export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getBalance = (): number => {
    return this.balance;
  }

  setBalance = (value: number): void => {
    this.balance += value;
  }

  getStatus = (): boolean => {
    return this.status
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus() && value > 0) {
      this.balance += value;
      console.log(`${this.name} depositou R$${value} | Novo Saldo: R$${this.balance}`)
    }
  }

  withdraw = (value: number): void => {
    if (this.balance - value >= 0 && this.validateStatus() && value > 0) {
      this.balance -= value;
      console.log(`${this.name} sacou R$${value} | Novo Saldo: R$${this.balance}`)
    } else {
      console.log(`Saque de R$${value} negado`)
    }
  }

  getLoan = (value: number): void => {
    if (this.validateStatus() && value > 0) {
      this.balance += value;
      console.log(`${this.name} fez um empréstimo de R$${value} | Novo Saldo: R$${this.balance}`)
    } else {
      console.log(`Empréstimo de R$${value} negado`)
    }
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
