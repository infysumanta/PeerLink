import React from "react";
import { Box } from "@chakra-ui/react";
import NotificationContainer from "../../components/Home/NotificationContainer";
import PinnedUserContainer from "../../components/Home/PinnedUserContainer";
const LeftSide = () => {
  return (
    <>
      <Box flexGrow={1} display={{ base: "none", lg: "inline" }}>
        <NotificationContainer />
        <PinnedUserContainer />
      </Box>
    </>
  );
};

export default LeftSide;
