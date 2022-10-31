
import React from 'react'
import {Flex,LightMode, Image} from '@chakra-ui/react'
import { PrimaryText, Heading3 } from './typography'
import { color } from '../utils/color'

const FeatureCard = ({children, imageSrc, title, subTitle ,width='100%', fontSize = ['12px','16px','18px','24px'], ...otherProps}) => {
    return (
        <LightMode>
     <Flex flexDir={['column']} align={'center'}  w={['100%','50%','30%','28%']} 
     px={["10px"]}
     minW={["192px"]}
     pb={["30px","30px","0px","0px"]}
>
<Flex bg={color.dark}
 w={['100px','119.98px','129.98px','139.98px']} h={['100px','119.98px','129.98px','139.98px']} 
 justify='center' align={'center'}
borderRadius={'50%'} >
  <Image src={imageSrc} h={['55px','62px','62px','77px']} />
</Flex>
<Heading3 mt={['51px']} textAlign='center' >{title}</Heading3>
<PrimaryText mt={['20px','25px','25px','30px']}  textAlign='center' px={['33px','12px','22px','33px']} >{subTitle}</PrimaryText>
</Flex>

            </LightMode>
            
    )
}

export default FeatureCard;