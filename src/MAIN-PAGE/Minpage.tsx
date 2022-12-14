import { Box, Button, Center, Heading, HStack, Img , Text } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Mainpage.css'

function Minpage() {
  const [user, setUser] = useState([]);
  

  const fetchData = async() => {
    try{
     await fetch("/api/v1/ticketAdmin",{
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



  return (
    <>
    {user.map((e:any)=>(
    <div className='CardM'>
       
    <Box className='Front' backgroundImage={e.image} backgroundSize={"cover"} backgroundRepeat={"no-repeat"}>

        <div className='na'>
          <Center
          
           bgGradient={"linear(to-r,blackAlpha.200,blackAlpha.200)"}><Heading>{e.eventName}</Heading></Center>
        </div>
    </Box>


    <div className='Back' >

    <Img src={e.image}>
    </Img>
    <div  className='text-on-image'>
    {/* <div className='na'>
          <Center
          
           bgGradient={"linear(to-r,blackAlpha.200,blackAlpha.200)"} w={"100"} h={'100vh'}></Center>
        </div> */}
    <Box marginLeft={'10'}>
    <Text>{e.dateEvent}</Text>
    <Text>{e.locationCity}</Text>
    <Text>{e.locationEvent}</Text>
    <Text noOfLines={[2]}>{e.shortDisc}</Text>
    </Box>
    <HStack>
      <Link to={`/pageticket/${e.id}`}>
   <Button  position={'relative'} top={"58px"} 
    color={"BLACK"} width={"98px"} bg={"#A259ff"}>Sell</Button></Link> 
    <Link to = {`/getticket/${e.id}`}>
     <Button position={'relative'} top={"58px"} 
    color={"BLACK"} width={"98px"} bg={"#A259ff"}>Buy  </Button></Link>
    </HStack>
      </div>
    
    </div>


  
    
    
    
    </div>


  ))}
</>

  )
}

export default Minpage
