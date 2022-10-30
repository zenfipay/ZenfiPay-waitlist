
import React from 'react'
import {Heading} from '@chakra-ui/react'

const Heading2 = ({children, fontSize='18px',  ...otherProps}) => {


    return (
        <Heading fontSize={ ['20px','22px','24px','28px','28px']}
         fontWeight={700} fontFamily={'Dm sans'}
          color='black'
          lineHeight={'100%'}
           textTransform='capitalize' {...otherProps}>{children}</Heading>


    )
}


export default Heading2