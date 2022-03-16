import React from "react";
import { Tabs, TabList, TabPanel, TabPanels, Tab } from "@chakra-ui/react";
import Results from "components/Results";
const Taber = () => {
  return (
    <Tabs
      isFitted
      variant="soft-rounded"
      colorScheme="pink"
      pt="5rem"
      // mt="3rem"
    >
      <TabList mb="0.1rem" maxWidth="700px" m="0 auto">
        <Tab fontSize="0.7rem">Searched Profile</Tab>
        <Tab fontSize="0.7rem">Favourite Profile</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Results />
        </TabPanel>
        <TabPanel>hello world</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Taber;
