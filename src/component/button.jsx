import React from 'react'
import {Button,LightMode} from '@chakra-ui/react'
import { PrimaryText } from './typography'
const AppButton = ({children, width='100%', fontSize = ['16px','18px','24px'], ...otherProps}) => {
    return (
        <LightMode>
            <Button width={width} 
            px='19px'
            py='32px'
            fontWeight={500}
            textTransform='capitalize'
            fontSize={fontSize}
            bg={'primary.400'}
            letterSpacing={'-2%'}
            color={'#1E1E1E'}
            borderRadius={5}
            {...otherProps} >
                {children}
            </Button>
            </LightMode>
            
    )
}

export default AppButton;