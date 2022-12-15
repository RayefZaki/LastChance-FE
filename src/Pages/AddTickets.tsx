import React, { useState ,useEffect} from 'react'
import { Stack,Box, Image,Text, HStack ,Heading,VStack, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
// import {  setTimeout } from 'timers';
export default function AddTickets(ticketid:any) {

    
const [user, setUser] = useState([]);
const [price,setPrice] = useState(0)

  

  // const fetchData = async() => {
  //   try{
  //    await fetch("/api/v1/ticket",{
  //     headers: {
  //                Authorization: 'Bearer ' + localStorage.getItem('token'),
  //             },
  //    })
  //         .then((response) => response.json())
  //         .then((data) => setUser(data));
  //   }catch(e){
  //     console.log(e)
  //   }
  // }
  ticketid =ticketid.ticketid
  console.log('====================================');
  console.log(ticketid);
  console.log('====================================');
  const fetchData = async() => {
    try{
   
    
     await fetch(`/api/v1/ticket/g/${ticketid}/`,{
      // ${ticketid}
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

  // const timeOut = () =>{
  //   setInterval(()=>{
  //     let a = user.map((e:any)=>e.price -= 1)
  //    let z= a.map((e:any)=>e)
  //     setPrice()
  //     },2000)   
  // } 
  

  useEffect(() => {
    
    // timeOut()
    fetchData();
  },[])
  
  // e.preventDefault()

  return (
     <div>

      

{user.map((e: any) => (
        <VStack >
          
          <Box bg={'#393737'} shadow={'dark-lg'} margin={'0 auto 10px auto'} width={'80%'} padding={'2'} display={'flex'} justifyContent={'space-between'}
               borderRadius={'7'} color={'white'} marginTop={'1.5'}>
                <Box>
                  <HStack 
                 
                  
                  key={e.id} bg={'#393737'}>
                    
              <Text bg={'#393737'} fontSize={'2xl'}>{e.type}</Text>
              </HStack>
              </Box>
              <Box bg={'#393737'} marginTop={'2'} w={'30%'} display={'flex'} justifyContent={'space-between'}>
              <Text bg={'#393737'}>{
              e.price
              
              }SR</Text>
              <Text bg={'#393737'}>{e.seatsLocation}</Text>
              <Text bg={'#393737'}>{e.numberOfTicket}</Text>
              {/* <Link to =""> */}
              <Button shadow={'dark-lg'} bg={'#a259ff'}>Buy</Button>
              {/* </Link> */}
              </Box>
              </Box>
          </VStack> 
))}
     </div>

   

  )
    }


    // const fetchData = async() => {
  //   try{
  //    await fetch("/api/v1/ticket",{
  //     headers: {
  //                Authorization: 'Bearer ' + localStorage.getItem('token'),
  //             },
  //    })
  //         .then((response) => response.json())
  //         .then((data) => setUser(data));
  //   }catch(e){
  //     console.log(e)
  //   }
  // }