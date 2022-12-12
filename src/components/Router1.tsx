import React from 'react'
import {Routes,Route}from 'react-router-dom';
import { LoginPage } from '../Pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import { RegisterPage } from '../Pages/RegisterPage';
import ArticleList from '../Pages/TicketD';


function Router1() {
  return (
<>

<ArticleList></ArticleList>
<Routes>
<Route path="/Login" element={<LoginPage/>}/>
<Route path="/Register" element={<RegisterPage/>}/>

<Route element={<ProtectedRoute />}>
{/* <Route path='/' element={<BlogsPage/>} /> */}
</Route>

</Routes>



</>
  )
}

export default Router1