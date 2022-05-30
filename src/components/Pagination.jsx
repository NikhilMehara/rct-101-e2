import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";

const Pagination = ({n,p,handleNum,handlePage}) => {
  // TODO: Remove below const and instead import them from chakra
  const [num, setNum] = React.useState(n);
  const [page, setPage] = React.useState(p);

  const handleP1 =()=>{
    setPage(1);
    return handlePage(page);
  }
  const handleP2 =()=>{
    setPage(10);
    return handlePage(page);
  }
  const handleN =(e)=>{
     setNum(e.target.value);
     return handleNum(num);
  }

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button"onClick={handleP1}>First</Button>
      <Button data-cy="pagination-previous-button" >Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={handleN} value={num}>
        <option data-cy="pagination-limit-3" value='3'>3</option>
        <option data-cy="pagination-limit-6" value='6'>6</option>
        <option data-cy="pagination-limit-9" value='9'>9</option>
      </Select>
      <Button data-cy="pagination-next-button" >Next</Button>
      <Button data-cy="pagination-last-button"onClick={handleP2} >Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
