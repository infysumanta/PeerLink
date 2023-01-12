import React from "react";
import { Box, Heading, useColorModeValue, Flex, Link } from "@chakra-ui/react";
const RightSide = () => {
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
              #️⃣ Trending Tags
            </Heading>
            <Link>View All</Link>
          </Flex>
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          rounded={"md"}
          shadow="md"
          mt={5}
        >
          <Heading fontSize={"xl"} p={2} fontWeight={"semibold"}>
            👤 Suggestions
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default RightSide;
