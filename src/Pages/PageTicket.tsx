import { Stack,Box, Image,Text, VStack, HStack } from '@chakra-ui/react'
import React from 'react'
import AddTickets from './AddTickets'
import { Link } from 'react-router-dom'
export default function PageTicket() {
  return (
    <div>
      <Stack>
        <Box >
          <Box >
          <Image src='https://cdn.discordapp.com/attachments/1032613167446102037/1051708389924802600/image.png'
           h={'40vh'} w={'100%'} objectFit={'cover'} marginTop={"90"} filter={'auto'} brightness='60%'></Image>
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
           <AddTickets />
        </Box>
        
      </Stack>
      
    </div>
    
  )
}
