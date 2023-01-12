import React from "react";
import {
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Link,
  CardBody,
  Card,
  Textarea,
  Avatar,
  Stack,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";

const MainContainer = () => {
  return (
    <>
      <Box flexGrow={3}>
        <CreatePost />
      </Box>
    </>
  );
};

const CreatePost = () => {
  return (
    <>
      <Card shadow={"lg"} bg={useColorModeValue("white", "gray.700")}>
        <CardBody>
          <HStack>
            <Avatar name="Peer Link" size={"md"} />
            <Box>
              <Text fontWeight={"bold"}>Peer Link</Text>
              <Text fontSize={"12px"}>@peerlink</Text>
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

export default MainContainer;
