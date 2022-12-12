import React, { useState ,useEffect} from 'react'
import { Stack,Box, Image,Text, HStack ,Heading,VStack} from '@chakra-ui/react'
import axios from 'axios'
export default function AddTickets() {
  // const [blogs, setBlogs] = useState<string[]>([]);
  const [type,setType] = useState('');
  // const [price,setPrice] = useState('');
  // const [seatLocations,setSeatLocations] = useState('')
  const [numberOfTickets,setNumberOfTickets] = useState('');
      const [allData, setAllData] = useState<string[]>([]);

    // useEffect(() => {
      const fetchBlogs = async () => {
        const request = await fetch('/api/v1/ticket', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });
        const data = await request.json();
        setAllData(data);
  
      };
    // },[]);
    

 fetchBlogs();
  



  return (
    // <div>

    // {allData.map((e)=>{e})
    /* {allData} */
    // <Text>ssd</Text>
       /* <VStack>
          
          <Box bg={'#393737'} margin={'0 auto'} width={'98%'} padding={'2'} display={'flex'} justifyContent={'space-between'}
               borderRadius={'7'} color={'white'} marginTop={'1.5'}>
                <Box>
                  <HStack bg={'#393737'}>
              <Text bg={'#393737'} fontSize={'2xl'}></Text>
              </HStack>
              </Box>
              <Box bg={'#393737'} marginTop={'2'} w={'30%'} display={'flex'} justifyContent={'space-between'}>
              <Text bg={'#393737'}>{}</Text>
              <Text bg={'#393737'}>2</Text>
              <Text bg={'#393737'}>10</Text>
              </Box>
              </Box>
          </VStack> */
    // </div>
   
    <VStack border='1px' padding='10' width='20rem' borderRadius='0.2rem'>
    {allData.map((blog: any) => (
      <HStack
        overflow='auto'
        width='100%'
        key={blog.id}
        border='1px'
        padding='3'
        justifyContent='space-between'
        borderRadius='0.5rem'
      >
        <HStack  overflow='auto'

        justifyContent='space-between'
        width='100%'
        flexDirection='column'

        
        >
            
        <Heading fontSize='1rem'>{blog.type}</Heading>
        
        <Text bg={'white'} fontSize='1rem'>{blog.id}</Text>
        </HStack>

      
      </HStack>
   
    
    )
  
    )}
      </VStack>

 




  )
    }
