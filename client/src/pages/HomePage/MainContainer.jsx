import React from "react";
import { Box } from "@chakra-ui/react";
import CreatePost from "../../components/Post/CreatePost";
import PostItem from "../../components/Post/PostItem";
import { useState, useEffect } from "react";
import postApi from "../../api/postApi";

const MainContainer = () => {
  const [posts, setPosts] = useState();
  const fetchPost = async () => {
    const datas = await postApi.getFeedPost();
    setPosts(datas.posts);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <Box flexGrow={3}>
        <CreatePost refreshData={fetchPost} />
        {posts &&
          posts.map((post) => (
            <PostItem post={post} key={post._id} refreshData={fetchPost} />
          ))}
      </Box>
    </>
  );
};

export default MainContainer;
