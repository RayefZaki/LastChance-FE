import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout:any = () => {
  const navigate = useNavigate();

  const logout1 = () => {

    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <Button onClick={logout1} backgroundColor='red.400'>
      Logout
    </Button>
   
    
  
  
    
    
  );
};

export default Logout;