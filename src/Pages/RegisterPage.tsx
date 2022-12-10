import {
    Box,
    Flex,
    Heading,
    VStack,
    Text,
    Input,
    Button,
    useToast,
    HStack,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  
  export const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [IBAN,setIBAN] = useState('')
  
    const navigate = useNavigate();
  
    const toast = useToast();
  
    const Register = async () => {
      try {
        if (password !== password2) {
          toast({
            title: `You passwords doesn't match`,
            status: 'error',
            duration: 3000,
            position: 'top',
          });
          return;
        }
  
        const request = await fetch('/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password, email,IBAN}),
        });
  
        const data = await request.json();
  
        if (request.status !== 201) {
          toast({
            title: data.message,
            status: 'error',
            duration: 3000,
            position: 'top',
          });
          return;
        }
  
        toast({
          title: data.message,
          status: 'success',
          duration: 3000,
          position: 'top',
        });
        navigate('/login');
      } catch (error) {
        toast({
          title: 'Server Error !',
          status: 'error',
          duration: 3000,
          position: 'top',
        });
      }
    };
  
    return (
      <Flex textColor={"white"} justifyContent={'center'}
      alignItems={'center'} height={'100vh'}
       bg={"blue.100"} fontSize={'1xl'}>
     <Box bg={"blue.900"} borderRadius={"md"} height={'600px'} width={'400px'}>
         <VStack padding={'5'}>
         <VStack textAlign={'left'} padding={'2'}>
             <Text >Username</Text>
             <Input type={"text"} width={'200'}
             value={username} placeholder={'Username'}
              onChange={(e)=>setUsername(e.target.value)}></Input>
         </VStack>
         <VStack textAlign={'left'} padding={'2'}>
             <Text >Password</Text>
             <Input type={"password"} placeholder={'Password'} width={'200'} 
               onChange={(e)=>setPassword(e.target.value)} 
               ></Input>
         </VStack>
         <VStack textAlign={'left'} padding={'2'}>
             <Text >Confirm Password</Text>
             <Input type={"password"} width={'200'} 
               onChange={(e)=>setPassword2(e.target.value)}
               placeholder={'Confirm Password'}></Input>
         </VStack>
         <VStack textAlign={'left'} padding={'2'}>
             <Text >Email</Text>
             <Input type={"email"} width={'200'} 
             onChange={(e)=>setEmail(e.target.value)}
             placeholder={'Email'}></Input>
         </VStack>
         <VStack textAlign={'left'} padding={'2'}>
             <Text >IBAN</Text>
             <Input type={"text"} width={'200'} 
             onChange={(e)=>setIBAN(e.target.value)} placeholder={'IBAN'}></Input>
         </VStack>
         <Button onClick={Register} width={'200px'} color={'black'}>Register</Button>
         <HStack>
             <Text marginRight={'1'}>Go to</Text>
             <Link to={'/login'}>Login?</Link>
         </HStack>
         </VStack>
     </Box>

     </Flex>
    );
  };