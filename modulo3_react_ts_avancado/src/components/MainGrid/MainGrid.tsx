import { SimpleGrid, Text, Spinner } from "@chakra-ui/react"
import { useState, useEffect, useContext } from "react"
import MGCard from "./MGCard"
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { AppContext } from "../AppContext";

interface IUserData {
  email: string,
  password: string,
  name: string,
  balance: number,
  id: string
}

export default function MainGrid() {

  const [getUser, setUser] = useState<null | IUserData>(null);
  const now = new Date();
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);

  if (getUser && id !== getUser.id || !isLoggedIn) {
    navigate('/')
  }

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUser(data);
    }
    getData()
  }, [])
  
  return (<>
  
    {
      !getUser &&
      <>
        <Spinner
          color="white"
          size={'lg'}
          marginRight={'10px'}
          emptyColor='#636363'
          thickness='4px'
          speed='0.8s' />
        <Text color={'white'} fontSize={'2xl'} as={'b'}>
          Carregando
        </Text>
      </>
    }
    
    <SimpleGrid columns={2} spacing={'24px'}>
      {
        getUser && (
          <>
            <MGCard 
              mainText={`Olá, ${getUser?.name}`} 
              content={`${
                String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${
                String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`} 
              />
            <MGCard mainText="Seu Saldo" content={`R$ ${getUser.balance}`} />
          </>
        )
      }
    </SimpleGrid>
  
  </>)
}