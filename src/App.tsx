import * as React from "react"
// import './App.css'
import {
  Button,
  ChakraProvider,
  Flex,
  Stack,
  theme,
  VStack,
} from "@chakra-ui/react"
import {Routes,Route,BrowserRouter}from 'react-router-dom';
import FIRST from "./Pages/FIRST";
import ArticleList from "./Pages/TicketD";
import Router1 from "./components/Router1";



export const App = () => (
  <BrowserRouter>

  <ChakraProvider theme={theme}>
<Router1></Router1>
  </ChakraProvider>
  </BrowserRouter>
)