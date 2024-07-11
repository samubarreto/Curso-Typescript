class User {

  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  showName = () => {
    console.log(this.name)
  }
}

const user1: User = new User('Samu', 20);
const user2: User = new User('João', 22);

user1.showName();
user2.showName();