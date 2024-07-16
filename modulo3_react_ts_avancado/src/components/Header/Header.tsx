import { Heading, Box, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../services/LStorage';

export default function Header() {

  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigateTo = useNavigate();

  function logout() {
    setIsLoggedIn(false);
    changeLocalStorage({ login: false })
    navigateTo('/');
  }

  return (<>
    
    <Box textAlign={'center'} width='100%' position={'fixed'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap='20px' top={0} padding={'15px 0'} color={'#fff'} backgroundColor={'#009895'}>
      <Heading size={'2xl'}>Samu Bank</Heading>
      {
        isLoggedIn && <Button onClick={logout}>Sair</Button>
      }
    </Box>
  
  </>)
}