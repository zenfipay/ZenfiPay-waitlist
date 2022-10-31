import React from 'react'
import {Input,LightMode} from '@chakra-ui/react'

const FormInput = ({children, color='rgba(255, 255, 255, 0.5)', placeholder, width='100%', fontSize = ['12px','16px','18px','24px'], ...otherProps}) => {
    return (
        <LightMode>
            <Input width={width} 
            px={['19px']}
            py={['12px','27px','27px','32px']}
            color={color}
            opacity={0.5}
            fontWeight={500}
            textTransform='capitalize'
            fontSize={fontSize}
            letterSpacing={'-2%'}
            fontFamily={'Poppins'}
            placeholder={placeholder}
            border='1px solid rgba(255, 255, 255, 0.5)'
            borderRadius={5}
            {...otherProps} />
            
            </LightMode>
            
    )
}

export default FormInput;