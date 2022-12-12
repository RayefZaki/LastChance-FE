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
    Checkbox,
    FormControl,
    FormLabel,
    Stack,
    Image
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
  
    const submitRegister = async () => {
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
      <>
      <Stack bg='#2b2b2b' minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
  <Flex p={8} flex={1} align={'center'} justify={'center'}>
    <Stack spacing={4} w={'full'} maxW={'md'}>
      <Heading fontSize={'2xl'}>Create Account</Heading>
      <FormControl id="username">
        <FormLabel>Username</FormLabel>
        <Input onChange={(e) => setUsername(e.target.value)}  value={username} type="username" />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input  onChange={(e) => setEmail(e.target.value)}  value={email} type="email" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input onChange={(e) => setPassword(e.target.value)}  value={password} type="password" />
      </FormControl>
      <FormControl id="Confirm password">
        <FormLabel>Confirm Password</FormLabel>
        <Input onChange={(e) => setPassword2(e.target.value)}  value={password2} type="password" />
      </FormControl>
      <FormControl id="IBAN">
        <FormLabel>IBAN</FormLabel>
        <Input onChange={(e) => setIBAN(e.target.value)} type="IBAN" />
      </FormControl>
      <Stack spacing={6}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          align={'start'}
          justify={'space-between'}>
          <Checkbox>Remember me</Checkbox>
          <Link color={'blue.500'} to={''}>Forgot password?</Link>
        </Stack>
        <Button onClick={submitRegister} colorScheme={'purple'} variant={'solid'}>
          Sign up
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