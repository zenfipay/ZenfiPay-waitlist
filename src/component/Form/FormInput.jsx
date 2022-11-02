import React from 'react'
import {Flex, Input,LightMode, Text} from '@chakra-ui/react'

const FormInput = ({children,  color='rgba(255, 255, 255, 0.5)', my, error, placeholder, width='100%', fontSize = ['12px','16px','18px','24px'], ...otherProps}) => {
    return (
        <LightMode>
            <Flex flex="1"
            flexDir={"column"}
            align={"flex-start"}
            justify={"flex-start"}
            my={my}
            >

            <Input width={width} 
            px={['19px']}
            py={['12px','27px','27px','32px']}
            color={color}
            opacity={0.5}
            fontWeight={500}
            textTransform='capitalize'
            fontSize={fontSize}
            _focus={{
                color: "white",
                border: error ? "1px solid red" : "1px solid white",
                opacity: 1
            }}
            _active={{
                color: "white",
            }}

            _placeholderShown={{
                color: "white",
            }}

            shadow={"0px"}
            outline={"0px"}
            letterSpacing={'-2%'}
            fontFamily={'Poppins'}
            placeholder={placeholder}
            border='1px solid rgba(255, 255, 255, 0.5)'
            borderRadius={5}
            {...otherProps} />
            {error}
            </Flex>
         

             
            </LightMode>
            
    )
}

export default FormInput;