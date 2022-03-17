import React, { useEffect, useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileAcct } from "redux/actions/actions";
import AppSpinner from "./AppSpinner";
import { Tabler } from "./Tabler";

const Results = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { users } = useSelector((state) => state.fetchProfile);
  console.log(users);
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchProfileAcct());
    setIsLoading(false);
  }, [dispatch]);

  const data = users.items;
  const columns = React.useMemo(
    () => [
      {
        Header: "Profile Image",
        Cell: (props) => {
          let sourceImg = props.row.original.profile_picture;
          return (
            <Box>
              <Image src={sourceImg} borderRadius="6rem" width="25%" />
            </Box>
          );
        },
      },
      {
        Header: "Pronoun",
        accessor: "pronoun",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Profession",
        accessor: "preferred_job_title",
      },
      {
        Header: "Years of Experience",
         Cell: (props) => {
        let yearsExp = props.row.original?.edges?.skills;
        return (
          <Box>
            <Text>{yearsExp?.years_of_experience}</Text>
          </Box>
        );
      },
      },
    ],
    []
  );
  return (
    <Box>
      Display Profile Result
      {isLoading ? (
        <AppSpinner />
      ) : (
        <Tabler columns={columns} data={data} text="Profiles" />
      )}
    </Box>
  );
};

export default Results;
