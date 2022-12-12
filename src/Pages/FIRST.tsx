import { Stack, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Minpage from '../MAIN-PAGE/Minpage'

function FIRST() {
  return (<div>
<Navbar links={[{ link: "/", alias: "About" }, { link: "/", alias: "Experience" }, { link: "/", alias: "CREATE ACCOUNT" }, { link: "/", alias: "SIGN IN" },]} logo={'https://media.discordapp.net/attachments/1036228185756541008/1051215907659190422/logo_transparent.png?width=936&height=936'} />

<div className="Tesxt"><h1>TOP EVENTS</h1> </div>
<Stack direction={'row'}>
<Flex h="10vh" justifyContent="center" alignItems="center">
      <Button
        /* flex={1} */
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'#A259FF'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}>
sell your ticket      </Button>
    </Flex>
            </Stack>
      <div className="cadrss">
     
      <Minpage ></Minpage>
      <Minpage></Minpage>
      <Minpage></Minpage>
      <Minpage></Minpage>


 </div>
 <div className="Tesxt2"><h1>ALL EVENTS</h1> </div>

 <div className="cadrss2">

 
      <Minpage></Minpage>
      <Minpage></Minpage>
      <Minpage></Minpage>
      <Minpage></Minpage>

 </div>
 <div className="cadrss3">

 
<Minpage></Minpage>
<Minpage></Minpage>
<Minpage></Minpage>
<Minpage></Minpage>

</div>
</div>
 )
}

export default FIRST