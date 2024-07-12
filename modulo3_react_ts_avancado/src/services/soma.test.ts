import { soma, multiplica } from "./soma"

describe('soma', () => {
  it('deve retornar o número informado +1', () => {
    // arrange act, assert
    const value = soma(1)
    expect(value).toBe(2)
  })

  it('deve multiplicar x por y', () => {
    const value = multiplica(2, 2);
    expect(value).toBe(4);
  })

  it('deve multiplicar x por y', () => {
    const value = multiplica(2, 3);
    expect(value).toBe(6);
  })
})