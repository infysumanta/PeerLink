import {
  useColorModeValue,
  Box,
  HStack,
  Avatar,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TimeAgo from "react-timeago";
const CommentItem = ({ user, comment }) => {
  return (
    <HStack
      border={"1px solid"}
      rounded="md"
      borderColor={"gray.200"}
      py="3"
      px="2"
      w="100%"
    >
      <Avatar
        name={`${comment.commentBy.firstName}${comment.commentBy.lastName}`}
        size={"sm"}
      />
      <Box w="200px">
        <Text fontWeight={"bold"} fontSize="12px">
          {comment.commentBy.firstName} {comment.commentBy.lastName}
        </Text>
        <Text fontSize={"11px"}>@{comment.commentBy.username}</Text>
        <Text fontSize={"11px"}>
          <TimeAgo date={comment.createdAt} />
        </Text>
      </Box>
      <Box w="100%">
        <Text
          fontSize={"14px"}
          w="100%"
          readonly
          bg={"gray.100"}
          h="60px"
          p={3}
          rounded="lg"
        >
          {comment.comment}
        </Text>
      </Box>
    </HStack>
  );
};

export default CommentItem;
