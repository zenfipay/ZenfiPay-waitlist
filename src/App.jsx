import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {  Flex, Heading, Button, Text} from '@chakra-ui/react'
import {Image} from '@chakra-ui/react'
import {color} from './utils/color'
import landingPhone from './assets/landing-phone.svg'
import zenfipaylogo from './assets/zenfipay-logo.svg'




function App() {
  const [count, setCount] = useState(0)

  return (

        <Flex bg={color.dark} w="100%" justify={'space-between'} px='5%'>
                  {/* <Image src={zenfipaylogo} /> */}
    <Flex flexDir={'column'} w='40%' >

      <Heading color="brand.400" fontWeight={700} fontFamily='Nexa Normal'  letterSpacing={-4} fontSize={['64px']}  >A better way to 
make transactions globally</Heading>
<Text color='white' fontSize={['20px']}>A simple and highly secure money transfer 
around the world.</Text>
<Button bg="primary.400">waitlist</Button>
    </Flex>

        <Image src={landingPhone} />

        </Flex>
  )
}

export default App
