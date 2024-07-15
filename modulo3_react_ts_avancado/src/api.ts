const conta = {
  email: 'teste@teste.com',
  password: '123123a',
  name: 'Teste Jr'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})