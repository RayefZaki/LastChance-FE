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
    Image,
    Select,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import LoginForm from '../components/Forms/LoginForm';
import Navbar from '../components/navbar/Navbar';
import Testimag from './Testimag';


function ConvertFile(files: FileList|null) {
    const [FileList64, setFileBase64] = useState('');
    if (files) {
        const fileRef = files[0] || ""
        const fileType: string= fileRef.type || ""
        console.log("This file upload is of type:",fileType)
        const reader = new FileReader()
        reader.readAsBinaryString(fileRef)
        reader.onload=(ev: any) => {
            // convert it to base64
            setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
        }
    }
}
export const TicketPage = () => {
    const [type,setType]= useState('');
    const [numberOfTicket,setNumberOfTicket]= useState('');
    const [ticketPrice,setTicketPrice]= useState('');
    const [image,setImage]= useState('');
    const navigate = useNavigate();
    const toast = useToast();
    const submitLogin = async () => {
      try {
        const request = await fetch('/api/v1/auth/ticket', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ type,numberOfTicket,ticketPrice,image }),
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
            <Stack 
            bg='#2b2b2b'
            margin={'0'} h={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            h={'99%'}
            marginTop={'1.5'}
            src={
              'https://cdn.discordapp.com/attachments/1032613167446102037/1051708389924802600/image.png'
            }
          />
        </Flex>
        <Flex  p={8} flex={1} align={'center'} justify={'center'}>
          <Stack border={'1px solid white'} borderRadius={'2xl'} padding={'14'} color={"white"} spacing={4} w={'200'} maxW={'md'}>
            <Image src='https://cdn.discordapp.com/attachments/1032613167446102037/1051773162842509363/image.png'
            ></Image>
            <Heading fontSize={'2xl'}>Insert Your Ticket</Heading>
            <FormControl id="Catogry">
            <Select bg='white' color={'black'} placeholder='Select Option'>
             <option value='option1'>Platinum</option>
             <option value='option2'>Gold</option>
             <option value='option3'>Silver</option>
             <option value='option3'>Regular</option>
            </Select>
            </FormControl>

            <FormControl id="Number Of Ticket">
            <NumberInput borderRadius={'2xl'} bg='white' color={'black'} defaultValue={1} min={1} max={5}>
             <NumberInputField />
             <NumberInputStepper>
             <NumberIncrementStepper />
             <NumberDecrementStepper />
             </NumberInputStepper>
            </NumberInput>
            </FormControl>

            <FormControl id="price">
             <Input borderRadius={'base'} bg='white' color={'black'} placeholder={'Enter The Real Ticket Price'} type="price" />
            </FormControl>
    
            {/* <FormControl> */}
            {/* <Testimag></Testimag> */}
            <FormControl id="password">
        <Input borderRadius={'2xl'} bg='white' color={'black'} placeholder={'Password'} onChange={(e) => (e.target.value)}   type=" " />
      </FormControl>
            {/* </FormControl> */}

            <Stack spacing={6}>
              <Button   _hover={{background: "white",color: "#A259FF", }} borderRadius={'2xl'}
boxShadow={"-10px 0px 30px 10px black" }
 onClick={submitLogin} colorScheme={'purple'} variant={'solid'}>
                Send Ticket
              </Button>

            </Stack>
          </Stack>
        </Flex>
      </Stack>
    
      </>
    );
  };
