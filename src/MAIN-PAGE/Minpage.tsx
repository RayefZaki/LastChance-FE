import { Box, Button, Center, Heading, HStack, Img , Text } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Mainpage.css'

function Minpage() {
  const [user, setUser] = useState([]);
  let [seconds,setSeconds] = useState(0);
  let [min,setMin] = useState(0);
  let [hour,setHour] = useState(0)
  let [day,setDay] = useState(0)


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
  },[]);

  setTimeout(() => {
    let a:any = seconds +=1
    setSeconds(a)
  }, 1000);

  setTimeout(() => {
    let a:any = min +=1
    setMin(a)
  }, 60000);

  setTimeout(() => {
    let a:any = hour +=1
    setHour(a)
  }, 3600000);

  setTimeout(() => {
    let a:any = day +=1
    setDay(a)
  }, 86400000);

  return (
    <>
    <Box>
      <Text>{seconds}</Text>
      <Text>{min}</Text>
      <Text>{hour}</Text>
      <Text>{day}</Text>
    </Box>
    {user.map((e:any)=>(
    <div className='CardM'>
       
    <Box className='Front' backgroundImage={e.image} backgroundSize={"cover"} backgroundRepeat={"no-repeat"}>

        <div className='na'>
          <Center
          
           bgGradient={"linear(to-r,blackAlpha.200,blackAlpha.200)"}><Text fontSize={"2xl"} >{e.eventName}</Text></Center>
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
    <Box marginBottom={'-20%'}>
    <Text  color={"white"} shadow={"dark-lg"} bg={"blackAlpha.700"}>Event:{e.dateEvent}</Text>
    <Text color={"white"} shadow={"dark-lg"} bg={"blackAlpha.700"}>City:{e.locationCity}</Text>
    <Text color={"white"} shadow={"dark-lg"}   bg={"blackAlpha.700"}>Location{e.locationEvent}</Text>
    <Text noOfLines={[2]} color={"white"} shadow={"dark-lg"}  bg={"blackAlpha.700"}> Dis:{e.shortDisc}</Text>

    </Box>
    <HStack>
      <Link to={`/pageticket/${e.id}`}>
   <Button  position={'relative'} top={"58px"} 
<<<<<<< HEAD
    color={"BLACK"} width={"98px"} bg={"#A259ff"}>Sell</Button></Link> 

=======
    color={"BLACK"} width={"98px"} bg={"#A259ff"}>Buy</Button></Link> 
>>>>>>> da1c76b295015550a49db2b53a2d56fd9be87e01
    <Link to = {`/getticket/${e.id}`}>
     <Button position={'relative'} top={"58px"} 
    color={"BLACK"} width={"98px"} bg={"#A259ff"}>Sell  </Button></Link>
    </HStack>
      </div>
    
    </div>


  
    
    
    
    </div>


  ))}
</>

  )
}

export default Minpage
