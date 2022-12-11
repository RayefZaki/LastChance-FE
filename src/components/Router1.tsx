import React from 'react'
import {Routes,Route}from 'react-router-dom';
import { LoginPage } from '../Pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import { RegisterPage } from '../Pages/RegisterPage';
import { Box } from '@chakra-ui/react';
import HomePage from '../Pages/WelcomePage';
import Footer from './Footer';


function Router1() {
  return (
    
<Box
// bg={"#2b2b2b"}
>
<Routes>

<Route path="/" element={<HomePage/>}/>
<Route path="/Login" element={<LoginPage/>}/>
<Route path="/Register" element={<RegisterPage/>}/>

<Route element={<ProtectedRoute />}>
{/* <Route path='/' element={<BlogsPage/>} /> */}
</Route>

</Routes>
<Footer/>



</Box>


  )
}

export default Router1