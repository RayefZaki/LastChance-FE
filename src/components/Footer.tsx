import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image,
    
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
     
        // <Box

        // height='100px'
        // margin={'0'}
        // >
        
    
        <Image 
       width='300px'
       height='120px'
       objectFit='cover'

      
        src='https://media.discordapp.net/attachments/1036228185756541008/1051215907659190422/logo_transparent.png?width=936&height=936' alt='Dan Abramov' />
    //  </Box>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('#A259FF', 'whiteAlpha.100')}
        textShadow={'1px 1px 1px #A259FF'}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallCentered() {
    return (
      <Box
     
      // padding={20}
      // position="static"
  
      boxShadow='xs' 
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('#A259FF', '#A259FF')}
        bg={useColorModeValue('#000000', '#000000')}
        color={useColorModeValue('#ffffff', '#ffffff')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo
          
          
          />
       
        </Container>
  
        <Box
        
        // boxShadow={'10px 10px 10px #ffffff'}
        boxShadow='xs' 
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('#A259FF', '#A259FF')}>
          <Container
          
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2022 M.A.R.N . All rights reserved</Text>
            <Stack 
            direction={'row'} spacing={6}>
              <SocialButton 
               
              label={'Twitter'} href={''}>
                <FaTwitter className='sh'/>
              </SocialButton>
              <SocialButton label={'YouTube'} href={''}>
                <FaYoutube className='sh'/>
              </SocialButton>
              <SocialButton label={'Instagram'} href={''}>
                <FaInstagram className='sh'/>
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }