import { Img , Text } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
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
    <div className='Front'>

        <img src={e.image}></img>
    </div>


    <div className='Back'>
    <Img src={e.image}>
    </Img>
    <div  className='text-on-image'>
            
    <h1>{e.eventName}</h1>
    <Text>{e.dataEvent}</Text>
    <Text>{e.locationCity}</Text>
    <Text>{e.locationEvent}</Text>
    <Text>{e.shortDisc}</Text>
      </div>


    </div>


    
    
   
          
    
    
    
    
    
    </div>


  ))}
</>

  )
}

export default Minpage
