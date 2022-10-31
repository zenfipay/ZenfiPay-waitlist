import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ChakraProvider , CSSReset, extendTheme} from "@chakra-ui/react"
import { Global } from '@emotion/react';


const Font = () => (
  <Global
    styles={
      `
  
@font-face {
  font-family: 'Nexa';
  font-style: normal;
  font-weight: normal;
  src: local('Nexa'), url('./utils/font/Nexa-XBold.woff') format('woff');
  }
`
    }
  />
)

export default Font


const colors = {
  brand: {
    900: "#10BD87",
    400: "#10BD87",
    100: "#BFECDE"
  
  },
  primary: {
    900: "#F7CE46",
    800: "#F7CE46",
    400: "#F7CE46",
  }
}

const theme = extendTheme({ colors 
 , fonts:{
   heading: 'Nexa Normal',
   body: 'Poppins'
 },
 styles: {
  global: {
    
    "html, body": {
      fontSize: "sm",
      backgroundColor: "#0FDBA8",
      margin: 0,
      padding: 0,
      height: '100%',
      position: 'relative'

    },
   
  },
},
  })


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <ChakraProvider theme={theme}>
    <CSSReset/>
  <Font/>
  <App />
</ChakraProvider>
</React.StrictMode>
,
)
