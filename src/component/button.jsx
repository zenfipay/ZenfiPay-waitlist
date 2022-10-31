import React from 'react'
import {Button,LightMode} from '@chakra-ui/react'
import { PrimaryText } from './typography'
const AppButton = ({children, width='100%', fontSize = ['12px','16px','18px','24px'], ...otherProps}) => {
    return (
        <LightMode>
            <Button width={width} 
             px={['19px']}
             py={['12px','27px','27px','32px']}
             fontWeight={500}
            textTransform='capitalize'
            fontSize={fontSize}
            bg={'primary.400'}
            letterSpacing={'-2%'}
            fontFamily={'Poppins'}
            color={'#1E1E1E'}
            borderRadius={5}
            {...otherProps} >
                {children}
            </Button>
            </LightMode>
            
    )
}

export default AppButton;