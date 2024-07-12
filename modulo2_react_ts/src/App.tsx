import Layout from "./components/Layout";
import { ChakraProvider, Input, Box, Center, Button, Text } from "@chakra-ui/react";
import { login } from "./services/login";

export default function App() {
  return (
    <ChakraProvider>

      <Box minHeight='100vh' backgroundColor="#222222" display='flex' alignItems={'center'} justifyContent={'center'}>
        <Box backgroundColor="#fff" borderRadius='20px' padding="20px" ml='2' width='350px' display={'flex'} flexDirection={'column'} gap={'8px'}>

          <Center>
            <Text fontSize='xl' as='b' color='#009895'>LOGIN</Text>
          </Center>
          
          <Input placeholder="Email"/>
          <Input placeholder="Password" type="password" />
          <Center>
            <Button onClick={login} colorScheme="teal" size='sm' width='100%'>Entrar</Button>
          </Center>
        </Box>
      </Box>

    </ChakraProvider>
  );
}