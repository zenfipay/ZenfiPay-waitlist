
import React from 'react'
import {Heading} from '@chakra-ui/react'
import { color } from '../../utils/color'
const Heading2 = ({children, fontSize=  ['24px','26px','30px','35px','40px'],  ...otherProps}) => {


    return (
        <Heading fontSize={fontSize}
        color={color.dark} fontWeight={700} fontFamily='Nexa Normal' 
        lineHeight={1.2}
        letterSpacing={-1}
           textTransform='capitalize' {...otherProps}>{children}</Heading>


    )
}


export default Heading2