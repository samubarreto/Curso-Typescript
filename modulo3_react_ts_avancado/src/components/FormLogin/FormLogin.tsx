import { Input, Box, Center, Text } from "@chakra-ui/react";
import { login } from "../../services/login";
import LoginButton from "../Button/LoginButton";
import { useState } from 'react';

export default function FormLogin() {
  const [getEmail, setEmail] = useState('');
  console.log('email digitado: ', getEmail);

  return (<>
    <Box minHeight='100vh' backgroundColor="#222222" display='flex' alignItems={'center'} justifyContent={'center'} >
      <Box backgroundColor="#fff" borderRadius='20px' padding="20px" ml='2' width='350px' display={'flex'} flexDirection={'column'} gap={'8px'}>

        <Center>
          <Text fontSize='xl' as='b' color='#009895'>LOGIN</Text>
        </Center>
        
        <Input placeholder="Email" value={getEmail} onChange={(e) => setEmail(e.target.value)}/>
        <Input placeholder="Password" type="password" />

        <LoginButton fazerLogin={() => {login(getEmail)}} />
      </Box>
    </Box>
  </>)
}