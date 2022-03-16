import React, { useEffect, useState } from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileAcct } from "redux/actions/actions";
import AppSpinner from "./AppSpinner";
import Search from "./Search";

const Results = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { users, loading } = useSelector((state) => state.fetchProfile);
  console.log(users.items);
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchProfileAcct());
    setIsLoading(false);
  }, [dispatch]);
  return (
    <Box>
      Display Profile Result
      <Search />
      {isLoading ? (
        <AppSpinner />
      ) : (
        <Flex flexFlow="wrap" mt="3rem">
          {users.items.map((user) => {
            return (
              <Flex mb="2rem" mr="2rem" alignItems="center">
                <Image src={user.profile_picture} borderRadius="6rem" width="20%" />
                <Box ml="1rem">
                  <Text>Profession:{user.preferred_job_title}</Text>
                  <Text>Country:{user.country}</Text>
                  <Text>City:{user.city}</Text>
                </Box>
              </Flex>
            );
          })}
        </Flex>
      )}
    </Box>
  );
};

export default Results;
