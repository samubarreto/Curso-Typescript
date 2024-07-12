import { Button } from "@chakra-ui/react";

interface ILoginButton {
  fazerLogin: () => void
}

export default function LoginButton( {fazerLogin}: ILoginButton ) {
  return (
    <Button onClick={fazerLogin} colorScheme="teal" size='sm' width='100%'>Entrar</Button>
  )
}