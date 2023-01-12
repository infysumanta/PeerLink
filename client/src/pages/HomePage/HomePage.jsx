import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import LeftSide from "./LeftSide";
import MainContainer from "./MainContainer";
import RightSide from "./RightSide";

const HomePage = () => {
  return (
    <>
      <Container maxW={{ base: "100%", lg: "80%" }} mt={"10px"}>
        <Flex justifyContent={"space-between"} gap={5}>
          <LeftSide />
          <MainContainer />
          <RightSide />
        </Flex>
      </Container>
    </>
  );
};

export default HomePage;
