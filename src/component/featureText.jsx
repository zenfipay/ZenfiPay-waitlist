
import React from 'react'
import {Flex, Image, Box} from '@chakra-ui/react'
import { Heading2, PrimaryText } from './typography'
const FeatureText = ({children, mb=['30px','50px','70px','90px','90px'] , bgColor = 'white', image, fontSize, title, subtitle,  ...otherProps}) => {


    return (
     <Flex flexDir={'column'}  textAlign='left'  mb={mb} >
  
            <Heading2 mb={2} textAlign={['center', 'left']} >{title}</Heading2>
            <PrimaryText px={0} fontSize={['15px','16px','17px','18px']} align={['center','left']}>
            {subtitle}    
            </PrimaryText>
     </Flex>


    )
}


export default FeatureText