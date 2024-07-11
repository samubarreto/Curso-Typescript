// const num: number = 10;

// if (num > 15) {
//   console.log("a")
// } else if (num === 15) {
//   console.log("b")
// } else {
//   console.log("c")
// }

const typeUser = {
  admin: "olá adm",
  student: "olá estudante",
  viewer: "olá consultor"
}

function validateUser(user: string) {
  console.log(typeUser[user as keyof typeof typeUser]) // chave do tipo typeUser
}

const usuario = 'admin'

validateUser(usuario);