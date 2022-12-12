import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Button,
  Input,
} from '@chakra-ui/react';
import { useCounter } from "@chakra-ui/counter"
import Navbar from '../components/navbar/Navbar';


interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
    
    
  return (
    <HStack  spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    
  return (
    <HStack bg="#2b2b2b" marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://cdn.discordapp.com/attachments/1032613167446102037/1051708389924802600/image.png"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {

    const counter = useCounter({
        max: 10,
        min: 0,
      })
  return (
    <Container  maxW={'7xl'} p="12">
      <Heading as="h1">Ticket informaiton</Heading>
      <Box
                        bgGradient={'linear(to-r, blackAlpha.700, transparent)'}

        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box

          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
                  bgGradient={'linear(to-r, blackAlpha.900, transparent)'}

            width={{ base: '100%', sm: '100%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '0%' }}
            marginTop="0%">

            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image

                borderRadius="lg"
                src={"https://cdn.discordapp.com/attachments/1032613167446102037/1051708389924802600/image.png"
                }
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>

          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>

Ticket details            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            marginBottom="3">


          price <Input type="number"></Input>
          catogry<Input type="number"></Input>


          </Text>
      
                  <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            marginBottom="3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>  
          <Box>
            <Text marginTop="10%">Number of ticket</Text>
             <Button background="blackAlpha.400" boxShadow="dark-lg" onClick={() => counter.increment()}>+</Button>
      <Button background="whiteAlpha.200" boxShadow="dark-lg" onClick={() => counter.decrement()} margin="4">-</Button>
      <Text margin={1}> {counter.value}</Text>

    
</Box>
          <Box>
          
     
          <Button color="wihte" background="#A259FF"  width="20%" shadow="dark-lg" marginRight="4">bay </Button>    
                  <Button color="wihte" background="blackAlpha.400" boxShadow="dark-lg" width="20%">BACK </Button>
                  </Box>
        </Box>
        
      </Box>

    </Container>
  );
};

export default ArticleList;