import { Box, Heading, Image, Stack, Tag, TagLabel, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = ({n,p}) => {
  // TODO: Remove below const and instead import them from chakra
  const [prData, setPrData] = useState([]);

  useEffect(()=>{
    getData();
  },[])

  const getData = async()=>{
     
    let res = await axios.get(`http://localhost:8080/products?_page=${p}&_limit=${n}`);
    // console.log(res);
    let d = await res.data;
    setPrData(d);
  }
  
  return (
    <>
    {prData.map((el)=>{
      return(
     <Stack data-cy="product" key={el.id}>
     <Image data-cy="product-image" src={el.imageSrc}/>
     <Text data-cy="product-category">{el.category}</Text>
     <Tag>
       <TagLabel data-cy="product-gender">{el.gender}</TagLabel>
     </Tag>
     <Heading data-cy="product-title">{el.title}</Heading>
     <Box data-cy="product-price">{el.price}</Box>
   </Stack>
   )
    })}
    </>
  );
};

export default Product;
