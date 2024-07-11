export abstract class SamuAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  status: boolean = false

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  public getName = (): string => {
    return this.name;
  }

  public setName = (name: string): void => {
    console.log(`${this.name} changed name to ${name}`);
    this.name = name;
  }

  deposit = (): void => { // (void é a assinatura desse método, é o tipo do dado retornado pelo método)
    console.log("deposit"); // esse console.log é o fluxo do método
  }

  withdraw = (): void => {
    console.log("withdraw");
  }

  getBalance = (): void => {
    console.log(this.balance);
  }
}