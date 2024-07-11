import { PersonAccount } from "./class/PersonAccount";
import { CompanyAccount } from "./class/CompanyAccount";

const personAccount1: PersonAccount = new PersonAccount("Samu", "919.244.600-09", 10);
// console.log(personAccount1);
personAccount1.setName("SAMU");
personAccount1.deposit();