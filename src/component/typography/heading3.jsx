
import React from 'react'
import {Heading} from '@chakra-ui/react'
import { color } from '../../utils/color'
const Heading3 = ({children, fontSize='18px',  ...otherProps}) => {


    return (
        <Heading fontSize={ ['20px','22px','24px','28px','32px']}
        color={color.dark} fontWeight={700} fontFamily='Nexa Normal' 
        lineHeight={1.2}
        letterSpacing={-1}
           textTransform='capitalize' {...otherProps}>{children}</Heading>


    )
}


export default Heading3