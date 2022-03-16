import React, { useState, useEffect } from "react";
import {
  Flex,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  const [searchItem, setSearchItem] = useState();

  return (
    <Flex justifyContent="center" align="center">
      <InputGroup>
        <Input
          type="text"
          placeholder="Search"
          size="md"
          borderRadius="0.5rem"
          bg="rgba(243,244,244,100)"
          color="#757886"
          border="none"
          fontSize="0.8rem"
          _focus={{
            outline: 0,
          }}
          _placeholder={{
            color: "#757886",
          }}
        />
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray.800" />}
        />
      </InputGroup>
      <Button type="submit">Submit</Button>
    </Flex>
  );
};

export default Search;
