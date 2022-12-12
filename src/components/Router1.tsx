import React from 'react'
import {Routes,Route}from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { RegisterPage } from '../Pages/RegisterPage';
import {LoginPage} from '../Pages/LoginPage';


function Router1() {
  return (
<>
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