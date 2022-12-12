import React from 'react'
import {Routes,Route}from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { RegisterPage } from '../Pages/RegisterPage';
import ArticleList from '../Pages/TicketD';
import {LoginPage} from '../Pages/LoginPage';
import { Box } from '@chakra-ui/react';
import Footer from '../components/Footer';
import WelcomePage from '../Pages/WelcomePage';




function Router1() {
  return (
    

    <><ArticleList></ArticleList>
    
    
    
      <Routes>

        {/* <Route path="/" element={<WelcomePage />} /> */}
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
          {/* <Route path='/' element={<BlogsPage/>} /> */}
        </Route>

      </Routes>
      <Footer />



    </>


  )
}

export default Router1