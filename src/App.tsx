import * as React from "react"
import './App.css'
import {
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
import ArticleList from "./Pages/TicketD";



export const App = () => (
  <BrowserRouter>
{/* <FIRST></FIRST> */}
  <ChakraProvider theme={theme}>

<Router1/>
  </ChakraProvider>
  </BrowserRouter>
)