import {
    ChakraProvider,
    Box,
    theme,
    Flex,
    Heading,
    Text,
    VStack,
    Input,
    Button,
    useToast,
    HStack,
    Checkbox,
    FormControl,
    FormLabel,
    Stack,
    Image
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import LoginForm from '../components/Forms/LoginForm';
import Navbar from '../components/navbar/Navbar';
  
  export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const toast = useToast();
    const submitLogin = async () => {
      try {
        const request = await fetch('/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        const data = await request.json();
        if (request.status !== 200) {
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
        localStorage.setItem('token', data.token);
        navigate('/');
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

      <>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Log in to your account</Heading>
            <FormControl id="Userame">
              <FormLabel>UserName</FormLabel>
              <Input onChange={(e) => setUsername (e.target.value)} type="Username" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={(e) => setPassword (e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'} to={''}>Forgot password?</Link>
              </Stack>
              <Button onClick={submitLogin} colorScheme={'purple'} variant={'solid'}>
                Log in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://cdn.discordapp.com/attachments/1032613167446102037/1051708389924802600/image.png'
            }
          />
        </Flex>
      </Stack>
    
      </>
    );
  };

  