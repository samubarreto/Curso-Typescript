interface IPessoa {
  nome: string,
  idade: number,
  altura: number,
  profissao?: string
}

const pessoa: IPessoa = {
  nome: "Samu",
  idade: 20,
  altura: 1.75
}

const outraPessoa: IPessoa = {
  nome: 'bubi',
  idade: 25,
  altura: 1,
  profissao: 'dev'
}

const arrayPessoa: Array<IPessoa>/*IPessoa[]*/ = [
  pessoa,
  outraPessoa
]

const arrayNum: number[] = [
  1, 2, 3
]

const arrayString: Array<string> = [
  '1', '2', '3'
]
