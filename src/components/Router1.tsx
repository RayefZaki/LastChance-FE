import React from 'react'
import {Routes,Route}from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { RegisterPage } from '../Pages/RegisterPage';
import {LoginPage} from '../Pages/LoginPage';
import { Box } from '@chakra-ui/react';
import Footer from '../components/Footer';
import WelcomePage from '../Pages/WelcomePage';
import PageTicket from '../Pages/PageTicket';




function Router1() {
  return (
    
<Box
// bg={"#2b2b2b"}
>
<Routes>

<Route path="/" element={<WelcomePage/>}/>
<Route path="/Login" element={<LoginPage/>}/>
<Route path="/Register" element={<RegisterPage/>}/>
<Route path='/PageTicket' element={<PageTicket/>}/>
<Route element={<ProtectedRoute />}>
{/* <Route path='/' element={<BlogsPage/>} /> */}
</Route>

</Routes>
<Footer/>



</Box>


  )
}

export default Router1