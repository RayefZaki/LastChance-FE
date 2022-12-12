import { Stack,Box, Image,Text, VStack, HStack } from '@chakra-ui/react'
import React from 'react'

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
            <Text>Claints</Text>
            </Box>
            <Box w={'30%'} display={'flex'} justifyContent={'space-between'}>
            <Text>PRICE</Text>
            <Text>CATOGARY</Text>
            <Text>HISTORY</Text>
            </Box>
           </Box>
        </Box>
        
        <VStack>
          
        <Box bg={'#393737'} margin={'0 auto'} width={'98%'} padding={'2'} display={'flex'} justifyContent={'space-between'}
             borderRadius={'7'} color={'white'} marginTop={'1.5'}>
              <Box>
                <HStack bg={'#393737'}>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C5PH28b9xIaMZmDTVb_J0ap2ffRQQKx45w&usqp=CAU'
                 borderRadius={'50%'} width={'50px'} h={'50px'}></Image>
            <Text bg={'#393737'} fontSize={'2xl'}>Nawaf Alahmadi</Text>
            </HStack>
            </Box>
            <Box bg={'#393737'} marginTop={'2'} w={'30%'} display={'flex'} justifyContent={'space-between'}>
            <Text bg={'#393737'}>150</Text>
            <Text bg={'#393737'}>Platinum</Text>
            <Text bg={'#393737'}>10/10/2022</Text>
            </Box>
            </Box>
        </VStack>
        <VStack>
          
          <Box bg={'#393737'} margin={'0 auto'} width={'98%'} padding={'2'} display={'flex'} justifyContent={'space-between'}
               borderRadius={'7'} color={'white'} marginTop={'1.5'}>
                <Box>
                  <HStack bg={'#393737'}>
                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C5PH28b9xIaMZmDTVb_J0ap2ffRQQKx45w&usqp=CAU'
                   borderRadius={'50%'} width={'50px'} h={'50px'}></Image>
              <Text bg={'#393737'} fontSize={'2xl'}>Nawaf Alahmadi</Text>
              </HStack>
              </Box>
              <Box bg={'#393737'} marginTop={'2'} w={'30%'} display={'flex'} justifyContent={'space-between'}>
              <Text bg={'#393737'}>150</Text>
              <Text bg={'#393737'}>Platinum</Text>
              <Text bg={'#393737'}>10/10/2022</Text>
              </Box>
              </Box>
          </VStack>
          <VStack>
          
          <Box bg={'#393737'} margin={'0 auto'} width={'98%'} padding={'2'} display={'flex'} justifyContent={'space-between'}
               borderRadius={'7'} color={'white'} marginTop={'1.5'}>
                <Box>
                  <HStack bg={'#393737'}>
                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C5PH28b9xIaMZmDTVb_J0ap2ffRQQKx45w&usqp=CAU'
                   borderRadius={'50%'} width={'50px'} h={'50px'}></Image>
              <Text bg={'#393737'} fontSize={'2xl'}>Nawaf Alahmadi</Text>
              </HStack>
              </Box>
              <Box bg={'#393737'} marginTop={'2'} w={'30%'} display={'flex'} justifyContent={'space-between'}>
              <Text bg={'#393737'}>150</Text>
              <Text bg={'#393737'}>Platinum</Text>
              <Text bg={'#393737'}>10/10/2022</Text>
              </Box>
              </Box>
          </VStack>
          <VStack>
          
          <Box bg={'#393737'} margin={'0 auto'} width={'98%'} padding={'2'} display={'flex'} justifyContent={'space-between'}
               borderRadius={'7'} color={'white'} marginTop={'1.5'}>
                <Box>
                  <HStack bg={'#393737'}>
                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C5PH28b9xIaMZmDTVb_J0ap2ffRQQKx45w&usqp=CAU'
                   borderRadius={'50%'} width={'50px'} h={'50px'}></Image>
              <Text bg={'#393737'} fontSize={'2xl'}>Nawaf Alahmadi</Text>
              </HStack>
              </Box>
              <Box bg={'#393737'} marginTop={'2'} w={'30%'} display={'flex'} justifyContent={'space-between'}>
              <Text bg={'#393737'}>150</Text>
              <Text bg={'#393737'}>Platinum</Text>
              <Text bg={'#393737'}>10/10/2022</Text>
              </Box>
              </Box>
          </VStack>
      </Stack>
    </div>
  )
}
