
import React from 'react'
import {Heading} from '@chakra-ui/react'

const Heading1 = ({children, fontSize,  ...otherProps}) => {


    return (
        <Heading fontSize={fontSize ? fontSize : ['64px']}
        color="brand.400" fontWeight={700} fontFamily='Nexa Normal' letterSpacing={-4}
         lineHeight={1.2}
         py={4}
          {...otherProps}>{children}</Heading>


    )
}


export default Heading1