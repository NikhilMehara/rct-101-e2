import { Flex, Grid } from "@chakra-ui/react";
import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [num, setNum] = React.useState(3);
  const [page, setPage] = React.useState(1);

  const handleNum = (d)=>{
    //  d.preventDefault();
    console.log(d);
     setNum(num=> num-num+(d));
     console.log(num);
  }

  const handlePage = (l)=>{
    console.log(l);
     setPage(page=>page-page+(l));
     console.log(page);
  }


  return (
    <Flex>
      {/*  AddProduct */}
      
      <Grid>
      <AddProduct />
        {/* List of Products */}
        <Product n={num} p={page}/>

        <Pagination  n={num} p={page} handlePage={handlePage}  handleNum={handleNum}/>
      </Grid>
      {/* Pagination */}
      
    </Flex>
  );
};

export default Products;
