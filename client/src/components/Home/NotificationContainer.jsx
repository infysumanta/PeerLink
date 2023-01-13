import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const NotificationContainer = () => {
  return (
    <Box bg={useColorModeValue("white", "gray.700")} rounded={"md"} shadow="md">
      <Flex justifyContent={"space-between"} alignItems={"center"} p={2}>
        <Heading fontSize={"xl"} fontWeight={"semibold"}>
          🔔 Notification
        </Heading>
        <Link to="/notifications">View All</Link>
      </Flex>
      <hr style={{ marginTop: "10px" }} />
      <Box p={3}>
        <NotificationContainerItem />
        <NotificationContainerItem />
        <NotificationContainerItem />
        <NotificationContainerItem />
        <NotificationContainerItem />
      </Box>
    </Box>
  );
};

const NotificationContainerItem = ({ notification }) => {
  return (
    <>
      <Box
        p={2}
        m={2}
        border="1px solid"
        borderColor={"gray.600"}
        rounded="lg"
        cursor={"pointer"}
      >
        <HStack>
          <Text>🔔</Text>
          <Text> Notifications</Text>
        </HStack>
      </Box>
    </>
  );
};

export default NotificationContainer;
