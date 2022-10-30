
import React from 'react'
import {Flex, Image, Box} from '@chakra-ui/react'
import { Heading2, PrimaryText } from './typography'
const FeatureCard = ({children, bgColor = 'white', image, fontSize, title, subtitle,  ...otherProps}) => {


    return (
     <Flex flexDir={'column'} px={10} py={19} bg={bgColor} textAlign='center' m={6} w={['100%','28%','28%','28%']} minW="300px" borderRadius={12} >
        <Flex w='full' align={'center'} py={7} justify='center'>
  <Image src={image} alt='feature-' width={'50%'} m={0} />
</Flex>
            <Heading2 mb={2} >{title}</Heading2>
            <PrimaryText fontSize={['15px','16px','17px','18px']} align='center'>
            {subtitle}    
            </PrimaryText>
     </Flex>


    )
}


export default FeatureCard