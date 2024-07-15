const conta = {
  email: 'teste@teste.com',
  password: '123123a',
  name: 'Teste Jr',
  balance: 2000.00,
  id: '1'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})