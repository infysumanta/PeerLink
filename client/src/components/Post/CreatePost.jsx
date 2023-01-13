import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
import postApi from "../../api/postApi";
const CreatePost = ({ refreshData }) => {
  const user = useSelector((state) => state.auth?.user);
  const [title, setTitle] = useState("");
  const toast = useToast();

  const createPost = async () => {
    const data = {
      title: title,
    };
    const res = await postApi.createPost(data);
    if (res.success) {
      setTitle("");
      toast({
        title: "Post created successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      refreshData();
    } else {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

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
          <Textarea
            placeholder="What's Your Thought!"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
            <Button size="md" onClick={createPost}>
              Post
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default CreatePost;
