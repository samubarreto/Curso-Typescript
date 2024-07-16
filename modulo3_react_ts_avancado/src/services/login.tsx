import { api } from "../api"

export async function Login(email: string, password: string): Promise<boolean> {
  const data: any = await api;
  if (email !== data.email || password !== data.password) {
    return false
  } else {
    return true
  }
}