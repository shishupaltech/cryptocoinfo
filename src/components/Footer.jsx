import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import avtar_img from '../assets/avtar_img.jpeg'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} PX={"16"} PY={["16","8"]}>
        <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
            <VStack ml={["4","3"]} w={"full"} alignItems={["center","flex-start"]}>
                <Text fontWeight={"bold"}>About Us</Text>
                <Text  fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are the best crypto trading app in India, we provide our guidance at a very cheap price.</Text>
            </VStack>
            <VStack>
                <Avatar boxSize={"28"} mt={["4","2"]} mr={["4","4"]} src={avtar_img}/>
                <Text>Our Footer</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer