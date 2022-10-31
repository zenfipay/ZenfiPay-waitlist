
import React from 'react'
import {Heading} from '@chakra-ui/react'

const Heading2 = ({children, fontSize= ['20px','22px','24px','28px','28px'],  ...otherProps}) => {


    return (
        <Heading fontSize={fontSize}
        color="brand.400" fontWeight={700} fontFamily='Nexa Normal' letterSpacing={-4}
        lineHeight={1.2}
        py={4} {...otherProps}>{children}</Heading>


    )
}


export default Heading2