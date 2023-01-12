import React from "react";
import {
  Box,
  Heading,
  useColorModeValue,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
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
          <hr style={{ marginTop: "10px" }} />
          <Box p={3}>
            <Text>🔔 Notifications</Text>
            <Text>🔔 Notifications</Text>
            <Text>🔔 Notifications</Text>
            <Text>🔔 Notifications</Text>
            <Text>🔔 Notifications</Text>
            <Text>🔔 Notifications</Text>
          </Box>
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          rounded={"md"}
          mt={5}
          shadow="md"
        >
          <Heading fontSize={"xl"} p={2} fontWeight={"semibold"}>
            📌 Pined User
          </Heading>
          <hr style={{ marginTop: "10px" }} />
          <Box p={3}>
            <Text>📌 Pined User</Text>
            <Text>📌 Pined User</Text>
            <Text>📌 Pined User</Text>
            <Text>📌 Pined User</Text>
            <Text>📌 Pined User</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LeftSide;
