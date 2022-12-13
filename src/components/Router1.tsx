import React from 'react'
import {Routes,Route, useNavigate}from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { RegisterPage } from '../Pages/RegisterPage';
import ArticleList from '../Pages/TicketD';
import {LoginPage} from '../Pages/LoginPage';
import { Box } from '@chakra-ui/react';
import Footer from '../components/Footer';
import WelcomePage from '../Pages/WelcomePage';

import PageTicket from '../Pages/PageTicket';

import Navbar from './navbar/Navbar';
import Navbar1 from './navbar/Navbar';

import Logout from './Logout';
import TicketD from '../Pages/TicketD';
import FIRST from '../Pages/FIRST';
import Thankyou from '../Pages/ThankyouPage';
import Thankyou2 from '../Pages/ThankyouPage2';


import GetTickets from '../Pages/GetTickets';



function Router1() {
  const navigate = useNavigate();

  const logout1 = () => {
    if(!localStorage.getItem("token")){

    return  <Navbar links={[  { link:"/login" , alias:"LOG IN" }, { link: "/register", alias: "REGISTER" },]} logo={'https://media.discordapp.net/attachments/1036228185756541008/1051215907659190422/logo_transparent.png?width=936&height=936'} />
    }else{
      return <Navbar1 links={[ { link: "/login", alias: "LOG OUT" },]} logo={'https://media.discordapp.net/attachments/1036228185756541008/1051215907659190422/logo_transparent.png?width=936&height=936'} />

    }

    // localStorage.removeItem('token');
    

  };


  return (
   

<Box>   
{logout1()}



<Routes>
<Route path="/D" element={<TicketD/>}/>

<Route path="/home" element={<FIRST/>}/>

<Route path="/" element={<WelcomePage/>}/>
<Route path="/Login" element={<LoginPage/>}/>
<Route path="/Register" element={<RegisterPage/>}/>
<Route path='/GetTicket' element={<GetTickets/>}/>
<Route path='/PageTicket' element={<PageTicket/>}/>
<Route path='/thankyou' element={<Thankyou/>}/>
<Route path='/thanks' element={<Thankyou2/>}/>



        <Route element={<ProtectedRoute />}>
          {/* <Route path='/' element={<BlogsPage/>} /> */}
        </Route>

      </Routes>
      <Footer />


</Box>


  )
}

export default Router1