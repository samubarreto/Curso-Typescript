import { login } from "./login"

describe('fazer login', () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  it('Alert ou bem vindo', () => {
    login('teste@teste.com');
    expect(mockAlert).toHaveBeenCalledWith('Bem-vindo teste@teste.com');
  })
})