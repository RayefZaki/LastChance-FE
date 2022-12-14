import { Stack, Button, Flex, Box, Heading } from '@chakra-ui/react'
import React, { useState ,useEffect} from 'react'
import Minpage from '../MAIN-PAGE/Minpage'

function FIRST() {
  

  return (<div>

<Heading margin={'10px 0px 0px 40px'} w={"60"} textAlign={"center"}
 color={"white"} shadow={"0px 10px 47px 5px black"} position={"relative"} 
 top={"8"}>ALL EVENTS</Heading> 



<Stack direction={'row'}>
<Flex h="10vh" justifyContent="center" alignItems="center">
      {/* <Button
      width="200px"
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'#A259FF'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(0 0 0 / 100%), 0 10px 10px -5px rgb(0 0 0 / 100%)'
        }
        _hover={{
          bg: 'black',
        }}
        _focus={{
          bg: 'black',
        }}>
sell your ticket      </Button> */}
    </Flex>
            </Stack>
      <div className="cadrss"  >
     
      <Minpage></Minpage>
      



 </div>


 <div className="cadrss2">

 
{/* <Minpage></Minpage>
<Minpage></Minpage>
<Minpage></Minpage>
<Minpage></Minpage> */}

</div>
</div>
 )
}

export default FIRST