import React from "react";
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Radio,
  RadioGroup,
  Select,
  useDisclosure,
  Text,
  Stack,
} from '@chakra-ui/react'
import axios from "axios";


const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState('male');
  const [cat, setCat] = React.useState('');
  const [t, setT] = React.useState('');
  const [p, setP] = React.useState('');

  const addData = async() =>{
       let data = {
         title:t,
         category:cat,
         gender:value,
         imageSrc: "https://picsum.photos/seed/picsum2/421/261",
         price:p
       }
     let oo = await axios.post("http://localhost:8080/products",data);
      setCat('');
      setP('');
      setT('');
      onClose();
      console.log(oo);
  }

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add New Product</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Add New Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
        <Text fontWeight='bold' mb='1rem'>
              Title
        </Text>
          <Input data-cy="add-product-title" placeholder="title" value={t} onChange={e=>setT(e.target.value)}/>
          <Text fontWeight='bold' mb='1rem'>
              Category
         </Text>
          <Select data-cy="add-product-category" onChange={e=>setCat(e.target.value)} value={cat}>
            <option data-cy="add-product-category-shirt" value='shirt'>Shirt</option>
            <option data-cy="add-product-category-pant" value='pant'>Pant</option>
            <option data-cy="add-product-category-jeans" value='jeans'>Jeans</option>
          </Select>
          <Text fontWeight='bold' mb='1rem'>
              Gender
        </Text>
          <RadioGroup data-cy="add-product-gender" onChange={e=>setValue(e)} value={value} >
            <Stack direction='row'>
            <Radio data-cy="add-product-gender-male" value='male'>male</Radio>
            <Radio data-cy="add-product-gender-female" value='female'>female</Radio>
            <Radio data-cy="add-product-gender-unisex" value='unisex'>unisex</Radio>
            </Stack>
          </RadioGroup>
          <Text fontWeight='bold' mb='1rem'>
              Price
          </Text>
          <Input data-cy="add-product-price" onChange={e=>setP(e.target.value)} value={p}/>
          </ModalBody>
          <ModalFooter>
          <Button data-cy="add-product-submit-button" onClick={addData}>Create</Button>
          </ModalFooter>
          </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
