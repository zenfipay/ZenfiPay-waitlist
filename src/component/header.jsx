import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  Image,
  useDisclosure,
  Link
} from "@chakra-ui/react";
import Container from "./container";
import zenfipaylogo from '../assets/zenfipay-logo.svg'

// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀
 
// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      w="full"
      // css={{ backdropFilter: "blur(60px); saturate('500%')" }}
      {...props}
      zIndex={5}
      pos="sticky"
      top={0}
    >
      <Container  >
        <Flex
          as="nav"
          justify="space-between"
          wrap="wrap"
          color="gray.900"
          py={['33px','67px','67px','67px']}
          w="full"
          align={'center'}
          {...props}
        >

          <Flex align="center" >
          <Image src={zenfipaylogo} height={['25px','31px','33px','35px']} alt='safeeza logo'/>
          </Flex>


         
          {/*
       <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

     

     */}
       
     
            <Button color="#1E1E1E" py={'26px'} px={'22px'} fontSize={['16px']}  
            display={['none','flex','flex','flex']}
            fontFamily='Nexa Normal'
                 bg={'brand.100'}
                 as={Link}
                 href={"#sendIt"}
  >Get early access</Button>
 
        </Flex>

      </Container>
    </Flex>
  );
};

export default Header;
