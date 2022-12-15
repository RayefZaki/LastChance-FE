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
import {Routes,Route,BrowserRouter}from 'react-router-dom';
import FIRST from "./Pages/FIRST";
import ArticleList from "./Pages/TicketD";
import PageTicket from "./Pages/PageTicket";
import Router1 from "./components/Router1";
import { TicketPage } from "./Pages/TicketPage";



export const App = () => (
  <BrowserRouter>


  <ChakraProvider theme={theme}>
 <Box margin={'0'} bg={'#2b2b2b'}>
<Router1/>
{/* <TicketPage></TicketPage> */}
</Box>
  </ChakraProvider>
  </BrowserRouter>
)