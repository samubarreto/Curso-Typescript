import { Input, Box, Center, Text } from "@chakra-ui/react";
import { Login } from "../../services/Login";
import LoginButton from "../Button/LoginButton";
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { changeLocalStorage } from "../../services/LStorage";

export default function FormLogin() {
  
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');
  const { setIsLoggedIn } = useContext(AppContext);
  const navigateTo = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await Login(email, password);
    if (!loggedIn) {
      return alert("Email ou senha inválido")
    }
    setIsLoggedIn(true)
    changeLocalStorage({ login: true })
    navigateTo(`/home/1`)
  }

  return (<>
    <Box minHeight='100vh' backgroundColor="#222222" display='flex' alignItems={'center'} justifyContent={'center'} >
      <Box backgroundColor="#fff" borderRadius='20px' padding="20px" ml='2' width='350px' display={'flex'} flexDirection={'column'} gap={'8px'}>

        <Center>
          <Text fontSize='xl' as='b' color='#009895'>LOGIN</Text>
        </Center>
        
        <Input placeholder="Email" value={getEmail} onChange={(e) => setEmail(e.target.value)}/>
        <Input placeholder="Password" type="password" value={getPassword} onChange={(e) => setPassword(e.target.value)} />

        <LoginButton fazerLogin={() => {validateUser(getEmail, getPassword)}} />
      </Box>
    </Box>
  </>)
}