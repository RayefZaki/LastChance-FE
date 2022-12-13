import { Box, Heading, Text,Image, Button, } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {Routes,Route, useNavigate, Link}from 'react-router-dom';


// this last page for any one buy tickets

export default function Success() {
    const navigate = useNavigate();


  return (
      <Box
    //   bgGradient={'linear(to-r, #a259ff, transparent)'}
  
      >
        <Box
w='100%' h='200px' bgGradient='linear(to-l, #7928CA, #FF0080)' 

height={"40vh"}
width={"100%"}



                  
                //   zIndex={1}
                //   bgGradient={'linear(to-r, #a259ff, transparent)'}

    //   height={'20px'}
    //   width={'100%'}
      
      >
          <Image


        //    zIndex="auto"
          boxSizing='border-box'
              // sizes="100px"
              objectFit='cover'
            //   width={"100%"}
              height={"40vh"}
             width={"100%"}
            //  bgGradient={'linear(to-r, #a259ff, transparent)'}
           
              src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
            //    src="            https://images.pexels.com/photos/1860618/pexels-photo-1860618.jpeg?auto=compress&cs=tinysrgb&w=800
               

              alt="Segun Adebayo" />

      </Box>
      
      
      
      
      <Box
      
        //   margin={130}
          marginBottom={130}
          textAlign="center" py={10} px={6}>




              <CheckCircleIcon


                  boxSize={'50px'} color={'#A259FF'} />
              <Heading
                  shadow={" 0px 0px 15px 2px #A259FF"}
                  color={'white'} as="h4" size="xl" mt={6} mb={2}>
                  thank you, will
                  recievd your ticket on your email...
              </Heading>

<Link to ="/home" >
              <Button 
              marginTop={"30px"}
            //   width={"150px"}
            //    bg={'#A259FF'}
            //    shadow="dark-lg"
            //    color={"white"}

               width={'150px'} 
               borderRadius={'50px'}
               margin={'20px auto 15px 10px'}
               bg={'#A259FF'}
               color={'white'}
               _hover={{
                  background: "white",
                  color: "#A259FF",
                  

                }}
                 
              
               >
                Back

                  {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. */}
              </Button>
              </Link>
          </Box></Box>
  );
}