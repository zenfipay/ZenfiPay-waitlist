import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { color } from './utils/color'
import landingPhone from './assets/landing-phone.svg'
import Header from './component/header'
import { Heading1, PrimaryHeading } from './component/typography'
import Container from './component/container'
import Button from './component/button' 
import FormInput from './component/Form/FormInput'
import arrowRight from './assets/arrow-right.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Flex flex={'column'} w='100%'>
    <Flex bg={color.dark}  w="100%" flexDir={'column'} justify={'space-between'}  >
      <Flex px={[8,6,4]}>
        
      <Header/>

      </Flex>
      <Container>
        <Flex flex='1'mt='62px' justify={['center','center', 'center','space-between','space-between']} flexWrap={'wrap'} px={[8,6,4]}>
          <Flex flexDir={'column'} w={['100%','100%','100%','45%','45%']}  >
            <Heading1>A better way to
              make transactions globally</Heading1>
            <PrimaryHeading color='white' pr='20%'>A simple and highly secure money transfer
              around the world.</PrimaryHeading>
              <Flex flex='1' mt='40px' flexDir={'column'}>
            <FormInput placeholder={'Enter your email address'} my={['35px']}  />
            <Button bg="primary.400">Join waitlist <Image pl={'6px'} src={arrowRight} /></Button>
              </Flex>
          </Flex>
          <Image src={landingPhone} mt='20px'  />
        </Flex>
      </Container>
    </Flex>
    </Flex>

  )
}

export default App
