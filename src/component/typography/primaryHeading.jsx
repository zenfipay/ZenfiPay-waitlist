import React from 'react'
import {Text, useColorModeValue} from '@chakra-ui/react'

const PrimaryHeading = ({children, align='left',  fontSize = ['12px','16px','18px','20px'], color,  ...otherProps}) => {

    const textColor = useColorModeValue('#484848','blackAlpha.800')

    return (
        <Text textAlign={align} 
        lineHeight='140%'
        fontFamily={'Poppins'}
        css={{fontWeight: 400}}
        letterSpacing={.2}
        color={color ? color : textColor}
        mt={['30px','37px','42px','50px']}
        fontSize={fontSize} {...otherProps} >

            {children}  
        </Text>

    )
}


export default PrimaryHeading