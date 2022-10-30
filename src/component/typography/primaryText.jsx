import React from 'react'
import {Text, useColorModeValue} from '@chakra-ui/react'

const PrimaryText = ({children, align='left',  fontSize = ['14px','15px','16px'], color,  ...otherProps}) => {

    const textColor = useColorModeValue('#484848','blackAlpha.800')

    return (
        <Text textAlign={align} 
        lineHeight='140%'
        fontWeight={'500'}
        letterSpacing={.2}
        color={color ? color : textColor}
        fontFamily={'DM Sans'}
        py={3}
        fontSize={fontSize} {...otherProps} >

            {children}  
        </Text>

    )
}


export default PrimaryText