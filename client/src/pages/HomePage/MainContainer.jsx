import React from "react";
import { Box } from "@chakra-ui/react";
import CreatePost from "./CreatePost";

const MainContainer = () => {
  return (
    <>
      <Box flexGrow={3}>
        <CreatePost />
      </Box>
    </>
  );
};

export default MainContainer;
