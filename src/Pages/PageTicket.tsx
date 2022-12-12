import { Stack,Box, Image,Text, VStack, HStack } from '@chakra-ui/react'
import React from 'react'
import AddTickets from './AddTickets'
export default function PageTicket() {
  return (
    <div>
      <Stack>
        <Box>
          <Image src='https://cdn.discordapp.com/attachments/1032613167446102037/1051708389924802600/image.png'
           h={'40vh'} w={'100%'} objectFit={'cover'} ></Image>

           <Box margin={'0 auto'} width={'98%'} padding={'2'} display={'flex'} justifyContent={'space-between'}
            border={'1px solid gray'} borderRadius={'7'} color={'gray'} marginTop={'1.5'}>
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
