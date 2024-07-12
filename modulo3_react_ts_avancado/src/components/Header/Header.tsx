import { Heading, Box } from '@chakra-ui/react'

export default function Header() {
  return (<>
  
    <Box textAlign={'center'} width='100%' position={'fixed'} top={0} padding={'15px 0'} color={'#fff'} backgroundColor={'#009895'}>
      <Heading size={'2xl'}>Samu Bank</Heading>
    </Box>
  
  </>)
}