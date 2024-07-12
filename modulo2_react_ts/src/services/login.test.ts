import { login } from "./login"

describe('login', () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  it('Alert ou bem vindo', () => {
    login();
    expect(mockAlert).toHaveBeenCalledWith('Bem-vindo');
  })
})