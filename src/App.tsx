import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Router1 from "./components/Router1"
import {Routes,Route,BrowserRouter}from 'react-router-dom';
import LoginForm from "./components/Forms/LoginForm";
import './App.css'



export const App = () => (
  <BrowserRouter>
  <ChakraProvider theme={theme}>

<Router1/>
  </ChakraProvider>
  </BrowserRouter>
)