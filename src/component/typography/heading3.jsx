
import React from 'react'
import {Heading} from '@chakra-ui/react'
import { color } from '../../utils/color'
const Heading3 = ({children, fontSize='18px',  ...otherProps}) => {


    return (
        <Heading fontSize={ ['24px','32px','34px','38px','40px']}
        color={color.dark} fontWeight={700} fontFamily='Nexa Normal' 
        lineHeight={1.2}
        letterSpacing={-1}
           textTransform='capitalize' {...otherProps}>{children}</Heading>


    )
}


export default Heading3