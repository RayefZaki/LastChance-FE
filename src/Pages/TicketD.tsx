import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Button,
  Input,
} from '@chakra-ui/react';
import { useCounter } from "@chakra-ui/counter"
import Navbar from '../components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import{ useEffect, useState } from 'react'







export default function ArticleList()  {
  const [user, setUser] =useState([]as any) ;
  const [user1, setUser1]=useState([]) as any;
  const [n, setn]=useState(0) ;

  let {ticketid }=useParams();
  

  
 
  // setn()

  const fetchData = async() => {
    try{
    
     await fetch(`/api/v1/ticket/gg/${ticketid}/`,{
     
      method:"GET" ,
      headers: {
                 Authorization: 'Bearer ' + localStorage.getItem('token'),
              },
     })
          .then((response) => response.json())
          .then((data) => setUser(data));

    }catch(e){
      console.log(e)
    }
  }


  const fetchData1 = async() => {
    try{
   
     const request = await fetch(`/api/v1/ticketAdmin/${user[0].eventByAdmin_id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
     const data = await request.json();
     console.log('====================================');
     console.log(data+"hello world");
     setUser1(data);
        
     console.log(user1)

    }catch(e){
      console.log(e)
      console.log("This file error occurred");
      
    }
  }



    const counter = useCounter({
        max: 10,
        min: 0,
      })
      const event =user1.eventName
      const location =user1.locationCity
      const imgg =user1.image
      const short =user1.shortDisc

      useEffect(() => {
        
      
      fetchData();
      // fetchData1();
      // user.map=(e)=>{
      //   e.eventByAdmin_id =eventByAdmin_id
      // }
    },[]);


  return (
    <div>
    {user.map((e: any) => (
    <Container 
    key={e.id}
    color="white" maxW={'7xl'} p="12">
      {/* <Heading as="h1"> </Heading> */}
      <Box
                        bgGradient={'linear(to-r, blackAlpha.700, transparent)'}

        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box

          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
                                  bgGradient={'linear(to-r, blackAlpha.900, transparent)'}

            width={{ base: '100%', sm: '100%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '0%' }}
            marginTop="0%">

            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image

                borderRadius="lg"

   

                src={"https://cdn.discordapp.com/attachments/1032613167446102037/1051708389924802600/image.png"}
                
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>

          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>

Ticket details            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color="white"
            fontSize="lg"
            marginBottom="3">

          {/* Event : {event} */}
          <br />
          {/* City : {location} */}
        Price : {e.price}$
        <br />
        Category : {e.type}
        <br />
        Seat : {e.seatsLocation}
{/*          
         <Input
          // onChange={()=>()} 
          type="number"></Input>
          catogry<Input  type="number"></Input> */}


          </Text>
      
                  <Text
            as="p"
            marginTop="2"
            color="white"
            fontSize="lg"
            marginBottom="3">
        {short}
          </Text>  
          <Box>
            <Text marginTop="10%">Number of ticket {counter.value}</Text>
            <Text >  Total Price  {counter.value as number*e.price}</Text>

             <Button background="blackAlpha.400" boxShadow="dark-lg" onClick={() => counter.increment()}>+</Button>
             <Button background="whiteAlpha.200" boxShadow="dark-lg" onClick={() => counter.decrement()} margin="4">-</Button>
      <Text margin={1}> </Text>

    
</Box>
          <Box>
          
     
     <a href='https://www.paypal.com/sa/signin' target="_blank"><Button color="wihte" background="#A259FF"  width="20%" shadow="dark-lg" marginRight="4" > Pay </Button> </a>
             
                  <Button color="wihte" background="blackAlpha.400" boxShadow="dark-lg" width="20%">BACK </Button>
                  </Box>
        </Box>
        
      </Box>


    </Container >
   
    ))}
     </div>
   
  );
};

// export default ArticleList;