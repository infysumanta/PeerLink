import React from "react";
import { Box } from "@chakra-ui/react";
import TrendingTagsContainer from "../../components/Home/TrendingTagsContainer";
import SuggestionsContainer from "../../components/Home/SuggestionsContainer";
const RightSide = () => {
  return (
    <>
      <Box flexGrow={1} display={{ base: "none", lg: "inline" }}>
        <TrendingTagsContainer />
        <SuggestionsContainer />
      </Box>
    </>
  );
};

export default RightSide;
