import { Box, Container,RadioGroup,HStack,Radio, VStack, Text, Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Progress, Button} from '@chakra-ui/react'
import React from 'react'
import { useState,useEffect } from 'react';
import Loader from './Loader';
import { server } from '../index';
import ErrorComponent from './ErrorComponent';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Chart from './Chart';

const CoinDetails = () => {
    const params = useParams();
    const [coin,setCoin]=useState({});
    const [loading,setLoading] = useState(true);
    const [ error,setError] = useState(false);
    const [days,setDays] = useState("24h");
    const [chartArray,setChartArray] = useState([]);
    const [currency,setCurrency] = useState('inr');
    const currencySymbol = currency==='inr'?"₹":currency==='eur'?"€":"$";
    const btns = ["24h","7d","14d","30d","60d","200d","365d","max"];
    const switchChartStats = (key)=>{
      switch (key) {
        case "24h":
          setDays("24h");
          setLoading(true);
          break;
        case "7d":
          setDays("7d");
          setLoading(true);
          break;
        case "14d":
          setLoading(true);
          setDays("14d");
          break;
        case "30d":
            setLoading(true);
            setDays("30d");
            break;
        case "60d":
          setLoading(true);
          setDays("60d");
          break;
      case "200d":
          setLoading(true);
          setDays("200d");
          break;
    case "365d":
          setLoading(true);
          setDays("365d");
          break;
    case "max":
          setLoading(true);
          setDays("max");
          break;
      
    default:
      setDays("24h");
      setLoading(true);
          break;
      }
    }
    useEffect(() => {
      const fetchCoin = async () => {
        try {
          const { data } = await axios.get(`${server}/coins/${params.id}`);
          const {data:chartData} = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)
          console.log(chartData.prices);
          console.log(data);  
         setChartArray(chartData.prices);       
         setCoin(data);
         setLoading(false);
        } catch (error) {
          console.log(error);
          setError(true);
          setLoading(false);
        }
      };
      fetchCoin();
    },[params.id, currency, days]);
    if(error)return<ErrorComponent message={"Error while fetching coins"} />
  return (
    <Container maxW={"container.xl"}>
      {
        loading?<Loader/>:(
          <>


            <Box width={"full"} borderWidth={1}>
              <Chart arr={chartArray} currency={currencySymbol} days={days}/>
              </Box>

            <HStack p="4" overflowX={"auto"}>
              {
                btns.map((i)=>(
                  <Button key={i} onClick={()=>switchChartStats(i)}>{i}</Button>
                ))
              }
            </HStack>



        

        <RadioGroup value={currency}  onChange={setCurrency} p ={"8"}>
        <HStack spacing={"4"}>
          <Radio value={"inr"}>INR</Radio>
          <Radio value={"usd"}>USD</Radio>
          <Radio value={"eur"}>EUR</Radio>
          
        </HStack>
      </RadioGroup>

      <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
        <Text fontSize={"small"} alignSelf={"center"} opacity={"0.7"}>
        Last Updated on {Date(coin.market_data.last_updated).split("G")[0]}
        </Text>
        <Image  src={coin.image.large} w={"16"} h={"16"} objectFit={"contain"} />

        <Stat>
          <StatLabel>
            {coin.name}
            <StatNumber>
            {currencySymbol}{coin.market_data.current_price[currency]}
            </StatNumber>
            <StatHelpText>
              <StatArrow type={coin.market_data.price_change_percentage_24h>0?"increase":"decrease"}/>
              {
                coin.market_data.price_change_percentage_24h
              }%
            </StatHelpText>
            
          </StatLabel>
        </Stat>
              <Badge fontSize={"2xl"} bgColor={"blackAlpha.800"} color={"white"}>
                {`#${coin.market_cap_rank}`}
              </Badge>
              <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
               low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
               />


               <Box w={"full"} p="4">
                <Item title={"Max Supply"} value={coin.market_data.max_supply}/>
                <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply}/>
                <Item title={"Market Cap"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}/>
                <Item title={"All Time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`}/>
                <Item title={"All Time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`}/>


               </Box>
      </VStack>
          </>
        )
      }
    </Container>
  )
};

const Item = ({title,value})=>(
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>{title}</Text>
    <Text>{value}</Text>
  </HStack>
);

const CustomBar = ({high,low})=>(
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"}  />
    <HStack justifyContent={"space-between"} w={"full"}  >
      <Badge children={low} colorScheme={"red"}/>
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"}/>
    </HStack>
  </VStack>
);

export default CoinDetails