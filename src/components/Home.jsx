import { Box, Image ,Text, Heading, Container,Stack} from '@chakra-ui/react'
import React from 'react';
import img from '../assets/img.png';
import { motion } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.webp';
const headingOptions = {
  pos:'absolute',
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  textTransform:"uppercase",
  padding:"4",
  size:"4xl"
}

const Home = () => {
  return (
    <>
    <Box >
        <MyCarousel/>
        <Box bgColor={"black.900"} w={"full"} h={"85vh"} alignItems={"center"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"400"}
          objectFit={"contain"}
          src={img}
          filter={"grayscale(1)"}
          
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Xcrypto
      </Text>
    </Box>
        <Container maxW={'container.xl'} minH={"100vh"} p="16">
          <Heading textTransform={'uppercase'} py="2" w={"fit-content"} borderBottom={"2px solid"} m="auto" >
            Crypto Currency ?
          </Heading>
        <Stack
          h="full"
          p={"4"}
          alignItems={"center"}
          direction={["column","row"]}
        >
          <Image src={img5} h={['40','250']} filter={"hue-rotate(-130deg)"}  borderRadius="20px"/>
          <Text letterSpacing={'widest'} lineHeight={"190%"} p={['4','16']}>
          Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates independently of a central bank. Cryptocurrencies use decentralized systems, such as blockchain technology, to manage and record transactions. Some of the most popular cryptocurrencies include Bitcoin, Ethereum, Litecoin, and Ripple. 

While cryptocurrency has the potential to provide greater financial freedom and security, it also carries risks, such as volatility and security concerns. It's important to do your own research and understand the risks before investing in or using cryptocurrencies.
          </Text>
        </Stack>
        </Container>
    </Box>
    
    </>
  );
};

const MyCarousel = ()=>(
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
      <Box w="full" h={'100vh'}>
    <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
    Do your research:
    </Heading>
  </Box>
  <Box w="full" h={'100vh'}>
    <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
    <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
    Diversify your portfolio
    </Heading>
  </Box>

  <Box w="full" h={'100vh'}>
    <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
    <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
    Have a long-term strategy
    </Heading>
  </Box>

  <Box w="full" h={'100vh'}>
    <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
    <Heading bgColor={'whiteAlpha.600'} color={'white'} {...headingOptions}>
    Use a secure wallet
    </Heading>
  </Box>
      
      
  </Carousel>
);

export default Home;