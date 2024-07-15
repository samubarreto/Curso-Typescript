import { useContext } from "react";
import { api } from "../api"
import { AppContext } from "../components/AppContext";

export async function Login(email: string): Promise<void> {
  const context = useContext(AppContext)
  const data: any = await api;
  if (email !== data.email) {
    return alert('email inválido')
  } else {
    alert(`Bem-vindo ${email}`)
  }
}