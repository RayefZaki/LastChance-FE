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
// import '../App.css'
  
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
            <Stack 
            height={"80%"}
            
            bg='#2b2b2b'
            margin={'0'} h={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
         
          <Image 
          marginLeft={"30%"}
          boxShadow={"-0px 0px 40px 10px black" }
          border={'1px solid black'}
          borderRadius="2xl"
            alt={'Login Image'}
            objectFit={'cover'}
            h={'73%'}
            width={"75%"}
            marginTop={'17%'}
            src={
              'https://cdn.discordapp.com/attachments/1032613167446102037/1051708389924802600/image.png'
            }
          />
        </Flex>
        <Flex 
         marginRight={"50%"}
  p={8} flex={1} align={'center'} justify={'center'}>
          <Stack          marginRight={"30%"}
 border={'1px solid black'}borderRadius={'2xl'} boxShadow="-50px 0px 40px 10px black" padding={'14'} color={"white"} spacing={4} w={'200'} maxW={'md'}>
            <Image src='https://cdn.discordapp.com/attachments/1032613167446102037/1051773162842509363/image.png'
            ></Image>
            <Heading fontSize={'2xl'}>Log in to your account</Heading>
            <Text>Enter Your Username And Password</Text>
            <FormControl id="Userame">
              <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'Username'}  onChange={(e) => setUsername (e.target.value)} type="Username" />
            </FormControl>
            <FormControl id="password">
              <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'Password'} onChange={(e) => setPassword (e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'} to={''}>Forgot password?</Link>
              </Stack>
              <Button borderRadius={"2xl"} boxShadow={"-10px 0px 30px 10px black" }onClick={submitLogin} bg={'#A259FF'} variant={'solid'}>
                Log in
              </Button>
              <HStack>
          <Text>You don't have account ? </Text>
          <Link to='/register'>Register</Link>
        </HStack>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    
      </>
    );
  };

  