import React from 'react'
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

export default function GetTickets() {
    const [type, setType] = useState('');
    const [numberOfTicket, setNumberOfTicket] = useState(0);
    const [price, setPrice] = useState(0);
    const [seatsLocation, setSeatsLocation] = useState('');
    const [image,setImage] = useState('')
  
    const navigate = useNavigate();
  
    const toast = useToast();
  
    const submitTicket = async () => {
      try {  
        const request = await fetch('/api/v1/ticket', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ type, price, numberOfTicket,seatsLocation,image}),
        });
  
        const data = await request.json();
  
        if (request.status !== 201) {
          toast({
            title: data.message,
            status: 'error',
            duration: 2000,
            position: 'top',
          });
          return;
        }
  
        toast({
          title: data.message,
          status: 'success',
          duration: 2000,
          position: 'top',
        });
        navigate('/login');
      } catch (error) {
        toast({
          title: 'Server Error !',
          status: 'error',
          duration: 2000,
          position: 'top',
        });
      }
    };
  
    return (
      <>

              {/* <Navbar links={[  { link: "/register", alias: "REGISTER" }, { link: "/login", alias: "LOG IN" },]} logo={'https://media.discordapp.net/attachments/1036228185756541008/1051215907659190422/logo_transparent.png?width=936&height=936'} /> */}

    

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
      <Text>Enter Your Ticket </Text>
      <FormControl id="type">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'Type'}
               onChange={(e) => setType(e.target.value)}  value={type} type="type" />
      </FormControl>
      <FormControl id="numberOfTicket">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'numberOfTicket'}
               onChange={(e) => setNumberOfTicket(+e.target.value)}   type="numberOfTickets" />
      </FormControl>
      <FormControl id="text">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'image'} 
              onChange={(e) => setImage(e.target.value)}  value={image} type="text" />
      </FormControl>
      <FormControl id="price">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'price'}
               onChange={(e) => setPrice(+e.target.value)}   type="price" />
      </FormControl>
      <FormControl id="seatsLocation">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'Seats Location'}
               onChange={(e) => setSeatsLocation(e.target.value)}  value={seatsLocation} type="seatsLocation" />
      </FormControl>
      <Stack spacing={6}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          align={'start'}
          justify={'space-between'}>
          <Checkbox>Remember me</Checkbox>
        </Stack>
        <Button onClick={submitTicket} colorScheme={'purple'} variant={'solid'}>
        submit
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
