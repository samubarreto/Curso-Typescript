export interface IUser {
  name: string,
  email: string,
  password: string
}

const db = [
  {
    "name": "Samu",
    "email": "teste@teste.com",
    "password": "123123a",
  }
];

export class UserService {

  db: IUser[]

  constructor
    (
      database = db
    ) {
    this.db = database
  };

  getUsers = () => {
    return this.db;
  }

  createUser = (name: string, email: string, password: string): boolean => {
    try {
      const user = {
        name,
        email,
        password
      }
      this.db.push(user);
    } catch (error) {
      return false;
    }
    return true;
  }
}