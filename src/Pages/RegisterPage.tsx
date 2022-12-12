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
  <Flex flex={1}>
    <Image
      alt={'Login Image'}
      objectFit={'cover'}
      src={
        'https://cdn.discordapp.com/attachments/1032613167446102037/1051708389924802600/image.png'
      }
    />
  </Flex>
  <Flex p={8} flex={1} align={'center'} justify={'center'}>
    <Stack border={'1px solid white'} borderRadius={'2xl'} padding={'14'}  color={"white"} spacing={4} w={'200'} maxW={'md'}>
    <Image src='https://cdn.discordapp.com/attachments/1032613167446102037/1051773162842509363/image.png'
            ></Image>
      <Heading fontSize={'2xl'}>Create Account</Heading>
      <Text>Enter Your Information </Text>
      <FormControl id="username">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'Username'} onChange={(e) => setUsername(e.target.value)}  value={username} type="username" />
      </FormControl>
      <FormControl id="email">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'Email'} onChange={(e) => setEmail(e.target.value)}  value={email} type="email" />
      </FormControl>
      <FormControl id="password">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'Password'} onChange={(e) => setPassword(e.target.value)}  value={password} type="password" />
      </FormControl>
      <FormControl id="Confirm password">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'Confairm Password'} onChange={(e) => setPassword2(e.target.value)}  value={password2} type="password" />
      </FormControl>
      <Stack spacing={6}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          align={'start'}
          justify={'space-between'}>
          <Checkbox>Remember me</Checkbox>
        </Stack>
        <Button onClick={submitRegister} colorScheme={'purple'} variant={'solid'}>
          Sign up
        </Button>
        <HStack>
          <Text>Already have account ?</Text>
          <Link to='/login'>Login</Link>
        </HStack>
      </Stack>
    </Stack>
  </Flex>
</Stack>

</>
    );
  };