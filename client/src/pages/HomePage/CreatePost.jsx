import React from "react";
import {
  Box,
  useColorModeValue,
  Flex,
  CardBody,
  Card,
  Textarea,
  Avatar,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
const CreatePost = () => {
  const user = useSelector((state) => state.auth?.user);
  return (
    <>
      <Card shadow={"lg"} bg={useColorModeValue("white", "gray.700")}>
        <CardBody>
          <HStack>
            <Avatar name={user.fullname} size={"md"} />
            <Box>
              <Text fontWeight={"bold"}>{user.fullname}</Text>
              <Text fontSize={"12px"}>@{user.username}</Text>
            </Box>
          </HStack>
          <hr style={{ marginTop: "10px", marginBottom: "5px" }} />
          <Textarea placeholder="What's Your Thought!" />
          <Flex justifyContent={"space-between"} alignItems="center" mt="10px">
            <HStack>
              <Box fontSize={"20px"} cursor="pointer">
                🏞️
              </Box>
              <Box fontSize={"20px"} cursor="pointer">
                😊
              </Box>
              <Box fontSize={"20px"} cursor="pointer">
                🎥
              </Box>
            </HStack>
            <Button size="md">Post</Button>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default CreatePost;
