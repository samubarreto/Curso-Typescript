import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainGrid from "../MainGrid/MainGrid";
import { Box } from "@chakra-ui/react";

export default function Homepage() {
  return (<>
  
  <Box minHeight='100vh' backgroundColor="#222222" display='flex' alignItems={'center'} justifyContent={'center'} >
    <MainGrid></MainGrid>
    <Footer></Footer>
  </Box>
    
  </>)
}