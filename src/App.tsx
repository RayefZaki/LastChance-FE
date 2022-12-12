import * as React from "react"
// import './App.css'
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Stack,
  theme,
  VStack,
} from "@chakra-ui/react"
import Router1 from "./components/Router1"
import {Routes,Route,BrowserRouter}from 'react-router-dom';
import FIRST from "./Pages/FIRST";
import PageTicket from "./Pages/PageTicket";



export const App = () => (
  <BrowserRouter>


  <ChakraProvider theme={theme}>
 <Box margin={'0'} bg={'#2b2b2b'}>
<Router1/>
</Box>
  </ChakraProvider>
  </BrowserRouter>
)