import { Avatar, Box, Stack, Text, VStack,Heading,Button } from '@chakra-ui/react'
import React from 'react'
import avtar_img from '../assets/avtar_img.jpeg'
import {AiOutlineSend} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} PX={"16"} PY={["16","8"]}>
       <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
  <VStack ml={["4","3"]} w={"full"} alignItems={["center","flex-start"]} borderRight="4px solid white">
    <Text fontWeight={"bold"}>About Us</Text>
    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>
      "Cryptocurrency represents a new and innovative technology that has the potential to disrupt traditional financial systems and create new opportunities for decentralized transactions and value exchange."
    </Text>
  </VStack>
  <VStack ml={["4","1"]} w={"full"} h={"full"} alignItems={["center","flex-start"]} borderRight={["none","4px solid white"]}>
  <Heading size={"md"} textTransform={"uppercase"} colorScheme={"whiteAlpha"}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme={"white"}>
                    <a href="https://youtube.com/codefriendy" target={'blank'}>Youtube</a>
                </Button>
                <Button variant={'link'} colorScheme={"white"}>
                    <a href="https://instagram.com/shishupal7169" target={'blank'}>Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme={"white"} target={"blank"}>
                    <a href="https://github.com/shishupaltech">github</a>
                </Button>
  </VStack>
  <VStack>
    <Avatar boxSize={"28"} mt={["4","2"]} mr={["4","4"]} src={avtar_img}/>
    
  </VStack>
</Stack>

    </Box>
  )
}

export default Footer