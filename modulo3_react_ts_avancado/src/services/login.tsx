import { api } from "../api"

export async function login(email: string): Promise<void> {
  const data: any = await api;
  if (email !== data.email) {
    return alert('email inválido')
  } else {
    alert(`Bem-vindo ${email}`)
  }
}