import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import { FiUserPlus, FiUserX } from "react-icons/fi";
const SuggestionsContainer = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      rounded={"md"}
      shadow="md"
      mt={5}
    >
      <Heading fontSize={"xl"} p={2} fontWeight={"semibold"}>
        👤 Suggestions
      </Heading>
      <hr style={{ marginTop: "10px" }} />
      <Box p={3}>
        <UserSuggestionItem />
        <UserSuggestionItem />
        <UserSuggestionItem />
        <UserSuggestionItem />
        <UserSuggestionItem />
      </Box>
    </Box>
  );
};

const UserSuggestionItem = () => {
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
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<FiUserPlus />}
        />
      </Flex>
    </>
  );
};
export default SuggestionsContainer;
