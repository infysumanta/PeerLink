import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Container,
  Box,
  Center,
  Text,
  Heading,
  CardFooter,
  Button,
  CardHeader,
  useColorModeValue,
  HStack,
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import copy from "copy-to-clipboard";
import TimeAgo from "react-timeago";
import postApi from "../../api/postApi";
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdShare } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import Comments from "./Comments";
const PostPage = () => {
  const [post, setPost] = useState();
  const user = useSelector((state) => state.auth.user);
  const { post_id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const fetchPost = async () => {
    const res = await postApi.getSinglePost(post_id);
    setPost(res.post);
  };
  useEffect(() => {
    fetchPost();
  }, [post_id]);

  return (
    <Box>
      {post ? (
        <Container maxW={{ base: "100%", lg: "50%" }} mt={5}>
          <PostItem post={post} navigate={navigate} user={user} toast={toast} />
          <Comments post={post} />
        </Container>
      ) : (
        <>
          <NoPost navigate={navigate} />
        </>
      )}
    </Box>
  );
};

const PostItem = ({ post, navigate, user, toast }) => {
  const [like, setLike] = useState(false);

  const deletePost = async () => {
    const body = {
      postId: post._id,
    };
    const result = await postApi.deletePost(body);
    navigate("/");
    if (result.success) {
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

  useEffect(() => {
    heartIcon(post, user);
  }, []);
  const heartIcon = (postLikes, user) => {
    if (postLikes.likes.some((obj) => obj.likeBy === user._id)) {
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

const NoPost = ({ navigate }) => {
  return (
    <Container maxW={{ base: "100%", lg: "50%" }} mt={20}>
      <Card>
        <CardBody>
          <Center>
            <Heading fontSize="7xl">☹️</Heading>
          </Center>
          <Center>
            <Text fontSize="3xl">
              Sorry, No Post with this Link or Wrong Url
            </Text>
          </Center>
        </CardBody>
        <CardFooter>
          <Center w={"100%"}>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              Back to Home Page
            </Button>
          </Center>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default PostPage;
