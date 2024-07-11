import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'

const samu1: PremiumAccount = new PremiumAccount('samu1', 1)
samu1.deposit(1000)
samu1.deposit(1000)
samu1.withdraw(2000)
samu1.getLoan(100)
samu1.premiumDeposit(200)

const samu2: PeopleAccount = new PeopleAccount(2, 'samu2', 1)
samu2.deposit(1000)
samu2.deposit(1000)
samu2.withdraw(2000)
samu2.getLoan(100)

const samu4: CompanyAccount = new CompanyAccount('samu4', 2)
samu4.deposit(1000)
samu4.deposit(1000)
samu4.withdraw(2000)