import { Img } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import './Mainpage.css'

function Minpage() {
  const [user , setUser] = useState([])

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
    {user.map((e:any)=>{
    <div className='CardM'>
    
    <div className='Front'>

        <img src='https://cdn.discordapp.com/attachments/1036228185756541008/1051529473754939435/pexels-hygor-sakai-2311713.jpg'></img>
    </div>


    <div className='Back'>
    <Img src='https://cdn.discordapp.com/attachments/1036228185756541008/1051529473754939435/pexels-hygor-sakai-2311713.jpg'>
    </Img>
    <div  className='text-on-image'>
            
          <h1>{e.eventName}</h1>
          <p>{e.id}</p>
      </div>


    </div>


    
    
    <h1>{e.eventName}</h1>
          <p>{e.id}</p>
    
    
    
    
    
    </div>


  })}
</>

  )
}

export default Minpage
