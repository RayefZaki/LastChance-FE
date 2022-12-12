import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    AspectRatio
  } from '@chakra-ui/react';
import Navbar from '../components/navbar/Navbar';
  
  export default function WelcomePage() {
    return (
        <>
        {/* <Navbar links={[  { link: "/register", alias: "REGISTER" }, { link: "/login", alias: "LOG IN" },]} logo={'https://media.discordapp.net/attachments/1036228185756541008/1051215907659190422/logo_transparent.png?width=936&height=936'} /> */}

      <Flex
        w={'full'}
        h={'100vh'}
        // <source src="https://scth.scene7.com/is/content/scth/STA%20-%20Feel%20More%20-%20Web%20Cutdown%20Desktop%20View%20(16x9)%20221006" type="video/mp4"></source>
        backgroundImage={
          'url(https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800)'
        } 
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack

          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.700, transparent)'}
          
          >
            
          <Stack
                        bgGradient={'linear(to-r, blackAlpha.700, blackAlpha.700)'}
                        p="10"
                        borderRadius={"10%"}

          maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
             Discover All events & Collect Your tickect
            </Text>
            <Text
              w={'full'}
             
              px={useBreakpointValue({ base: 4, md: 8 })}
              color={'white'}
              fontWeight={700}
             
              fontSize={useBreakpointValue({ base: 'sl', md: 's' })}>
                Last chacne is PlatForm allow to any one to sell or buy a thickets Until the last chance at the start of the event 
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'#A259FF'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'black' }}>
                Show me more
              </Button>
             
            </Stack>
          </Stack>
        </VStack>
      </Flex>

      </>
    );
  }