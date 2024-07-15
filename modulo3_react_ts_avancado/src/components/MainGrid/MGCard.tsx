import { Box, Text } from "@chakra-ui/react"

interface IMGCard {
  mainText: string,
  content: string
}

export default function MGCard({ mainText, content }: IMGCard) {

  return (<>
  
    <Box backgroundColor={'white'} padding={'20px'} borderRadius={25}>
      <Text as='b' fontSize={'2xl'}>
        {mainText}
      </Text>
      <Text>
        {content}
      </Text>
    </Box>
  
  </>)
}