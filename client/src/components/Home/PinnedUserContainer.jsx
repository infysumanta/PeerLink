import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const PinnedUserContainer = () => {
  return (
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
        <PinedUserItem />
        <PinedUserItem />
        <PinedUserItem />
        <PinedUserItem />
        <PinedUserItem />
      </Box>
    </Box>
  );
};

const PinedUserItem = () => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        border="1px solid"
        borderColor={"gray.600"}
        rounded="lg"
        p={2}
        m={2}
      >
        <HStack as={Link} to={`/@sumanta`}>
          <Avatar name={`Sumanta Kabiraj`} size={"sm"} />
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize={"15px"}
            >{`Sumanta Kabiraj`}</Text>
            <Text fontSize={"11px"}>@sumanta</Text>
          </Box>
        </HStack>
        <Button size={"sm"}>Remove</Button>
      </Flex>
    </>
  );
};
export default PinnedUserContainer;
