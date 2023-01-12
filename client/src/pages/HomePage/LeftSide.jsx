import React from "react";
import { Box, Heading, useColorModeValue, Flex, Link } from "@chakra-ui/react";
const LeftSide = () => {
  return (
    <>
      <Box flexGrow={1} display={{ base: "none", lg: "inline" }}>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          rounded={"md"}
          shadow="md"
        >
          <Flex justifyContent={"space-between"} alignItems={"center"} p={2}>
            <Heading fontSize={"xl"} fontWeight={"semibold"}>
              🔔 Notification
            </Heading>
            <Link>View All</Link>
          </Flex>
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          rounded={"md"}
          mt={5}
          shadow="md"
        >
          <Heading fontSize={"xl"} p={2} fontWeight={"semibold"}>
            📌 Shortcut
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default LeftSide;
