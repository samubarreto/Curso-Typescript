import { api } from "../api"

export async function Login(email: string): Promise<boolean> {
  const data: any = await api;
  if (email !== data.email) {
    return false
  } else {
    return true
  }
}