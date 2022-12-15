import { Stack,Box, Image,Text, VStack, HStack, Img } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AddTickets from './AddTickets'
import { Link, useParams } from 'react-router-dom'
import { Interface } from 'readline';
export default function PageTicket() {
  const [user, setUser] =useState([]as any) ;
  let {ticketid }=useParams();

 

  // getByNameEventByAdminHandler
  const fetchData = async() => {
    try{

    
     await fetch(`/api/v1/ticketAdmin/${ticketid}`,{
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
 

  useEffect(() => {
    fetchData();
  },[])
  

// let a;
//   const ff =()=>{
//     user.map((e:any) =>(
//       a=e.image
//     ))
//   }
//   ff();
     // eslint-disable-next-line @typescript-eslint/no-unused-expressions


  return (
    <div>

      <Stack>
        <Box >
          <Box >
          {/* <Image src='https://cdn.discordapp.com/attachments/1032613167446102037/1051708389924802600/image.png' */}
          <Img src={user.image}
           h={'40vh'} w={'100%'} objectFit={'cover'} marginTop={"90"} filter={'auto'} brightness='60%'></Img>
          </Box>
           <Box shadow={'dark-lg'} margin={'0 auto 10px auto'} width={'80%'} padding={'2'} display={'flex'} justifyContent={'space-between'}
            border={'2px solid gray'} borderRadius={'7'} color={'gray'} marginTop={'1.5'}>
              <Box>
            <Text>CATOGARY</Text>
            </Box>
            <Box w={'30%'} display={'flex'} justifyContent={'space-between'}>
            <Text>PRICE</Text>
            <Text>Seats Location</Text>
            <Text>Number Of Tickets</Text>
            </Box>
           </Box>
           
           {/* ffk */}
           <AddTickets ticketid={ticketid} />
           
        </Box>
        
      </Stack>
    
    </div>
    
  )
}
