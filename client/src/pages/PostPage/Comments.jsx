import {
  Card,
  CardHeader,
  useColorModeValue,
  Box,
  CardBody,
  HStack,
  Avatar,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import commentApi from "../../api/commentApi";
import CommentItem from "./CommentItem";
import CreateComment from "./CreateComment";
const Comments = ({ post }) => {
  const user = useSelector((state) => state.auth.user);
  const [comments, setComments] = useState();
  const fetchComments = async () => {
    const res = await commentApi.getCommentByPost(post._id);
    setComments(res.comments);
  };
  useEffect(() => {
    fetchComments();
  }, [post]);
  return (
    <Box mt={3}>
      <CreateComment user={user} post={post} refreshData={fetchComments} />
      <Card bg={useColorModeValue("white", "gray.700")} mt={3}>
        <CardHeader fontSize={"lg"} fontWeight="bold">
          Comments
        </CardHeader>
        <hr />
        <CardBody>
          <VStack spacing="10px">
            {comments &&
              comments.map((comment) => (
                <CommentItem user={user} comment={comment} key={comment._id} />
              ))}
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Comments;
