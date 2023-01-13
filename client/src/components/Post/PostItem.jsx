import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  useColorModeValue,
  HStack,
  Avatar,
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  CardFooter,
  CardHeader,
  useToast,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import TimeAgo from "react-timeago";
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdShare } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { useNavigate, Link } from "react-router-dom";
import postApi from "../../api/postApi";

const PostItem = ({ post, refreshData }) => {
  const [like, setLike] = useState(false);
  const user = useSelector((state) => state.auth?.user);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    heartIcon(post, user);
  }, []);

  const deletePost = async () => {
    const body = {
      postId: post._id,
    };
    const result = await postApi.deletePost(body);
    if (result.success) {
      refreshData();
      toast({
        title: "Post Deleted",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleLike = async () => {
    let body = {
      postId: post._id,
      likeBy: user._id,
    };

    const result = await postApi.likePost(body);
    if (result.success) {
      setLike(true);
    }
  };
  const handleDislike = async () => {
    let body = {
      postId: post._id,
      likeBy: user._id,
    };

    const result = await postApi.dislikePost(body);
    if (result.success) {
      setLike(false);
    }
  };

  const heartIcon = (postLikes, user) => {
    if (postLikes.likes.some((obj) => obj.likeBy === user._id)) {
      setLike(true);
    }
  };

  return (
    <Card shadow={"lg"} bg={useColorModeValue("white", "gray.700")} mt={3}>
      <CardHeader>
        <Flex justifyContent="space-between" alignItems="center">
          <HStack as={Link} to={`/@${post.postBy.username}`}>
            <Avatar
              name={`${post.postBy.firstName}${post.postBy.lastName}`}
              size={"md"}
            />
            <Box>
              <Text fontWeight={"bold"}>
                {post.postBy.firstName} {post.postBy.lastName}
              </Text>
              <Text fontSize={"12px"}>
                @{post.postBy.username} - <TimeAgo date={post.createdAt} />
              </Text>
            </Box>
          </HStack>
          {post.postBy._id === user._id && (
            <Menu>
              <MenuButton>
                <HiDotsHorizontal fontSize={"20px"} />
              </MenuButton>
              <MenuList>
                <MenuItem icon={<BiEdit fontSize={"20px"} />}>Edit</MenuItem>
                <MenuItem
                  icon={<MdDelete fontSize={"20px"} />}
                  onClick={deletePost}
                >
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </CardHeader>
      <hr />
      <CardBody>
        <Text fontSize={"lg"}>{post.title}</Text>
      </CardBody>
      <hr />
      <CardFooter>
        <Flex justify={"space-around"} alignItems="center" w="100%">
          <Box>
            {like ? (
              <AiFillHeart
                fontSize={"25px"}
                cursor="pointer"
                onClick={handleDislike}
              />
            ) : (
              <AiOutlineHeart
                fontSize={"25px"}
                cursor="pointer"
                onClick={handleLike}
              />
            )}
          </Box>
          <Box>
            <AiOutlineComment
              fontSize={"25px"}
              cursor="pointer"
              onClick={() => {
                navigate(`/posts/${post._id}?from=comment-click`);
              }}
            />
          </Box>
          <Box>
            <MdShare
              fontSize={"25px"}
              cursor="pointer"
              onClick={() => {
                const url = `${window.location.origin}/posts/${post._id}?from=copy-share`;
                copy(url);
                toast({
                  title: "Copied Share Link",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }}
            />
          </Box>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default PostItem;
