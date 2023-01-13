import React, { useState } from "react";
import {
  Card,
  useColorModeValue,
  Box,
  Button,
  CardBody,
  HStack,
  Avatar,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import commentApi from "../../api/commentApi";
const CreateComment = ({ user, post, refreshData }) => {
  const [comment, setComment] = useState("");
  const toast = useToast();

  const submitComment = async () => {
    let body = {
      comment: comment,
      post_id: post._id,
    };
    const res = await commentApi.createComment(body);
    console.log(res);
    if (res.success) {
      setComment("");
      toast({
        title: "Comment Saved Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      refreshData();
    } else {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Card shadow={"lg"} bg={useColorModeValue("white", "gray.700")}>
      <CardBody>
        <HStack spacing="10px">
          <HStack
            border={"1px solid"}
            rounded="md"
            borderColor={"gray.200"}
            py="3"
            px="2"
          >
            <Avatar name={user.fullname} size={"sm"} />
            <Box w="100px">
              <Text fontWeight={"bold"} fontSize="12px">
                {user.fullname}
              </Text>
              <Text fontSize={"11px"}>@{user.username}</Text>
            </Box>
          </HStack>
          <Textarea
            placeholder="What's Your Thought!"
            mt={2}
            rows={2}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button size="md" onClick={submitComment}>
            Post
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CreateComment;
