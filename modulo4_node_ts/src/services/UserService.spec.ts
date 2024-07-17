import { IUser, UserService } from "./UserService"

describe('UserService', () => {
  const mockDb: IUser[] = [];
  const userService = new UserService(mockDb);

  it('Deve adicionar um novo usuário', () => {
    expect(userService.createUser('samuteste', 'samuteste@email.com', '123123a')).toBeTruthy();
  })
})