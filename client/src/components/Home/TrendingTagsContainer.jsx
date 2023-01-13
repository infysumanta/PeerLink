import {
  Box,
  Flex,
  Heading,
  Tag,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const TrendingTagsContainer = () => {
  return (
    <Box bg={useColorModeValue("white", "gray.700")} rounded={"md"} shadow="md">
      <Flex justifyContent={"space-between"} alignItems={"center"} p={2}>
        <Heading fontSize={"xl"} fontWeight={"semibold"}>
          #️⃣ Trending Tags
        </Heading>
      </Flex>
      <hr style={{ marginTop: "10px" }} />
      <Box p={3}>
        <TrendingTags postCount={26} tag={"start"} />
        <TrendingTags postCount={30} tag={"love"} />
        <TrendingTags postCount={10} tag={"yesterday"} />
        <TrendingTags postCount={8} tag={"holiday"} />
        <TrendingTags postCount={44} tag={"traveller"} />
      </Box>
    </Box>
  );
};

const TrendingTags = ({ tag, postCount }) => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent="start">
        <Tag
          size={"lg"}
          variant="outline"
          colorScheme="blue"
          m={2}
          cursor="pointer"
        >
          <TagLabel># {tag}</TagLabel>
        </Tag>
        <Text color={"gray.500"} fontSize="15px" fontWeight={"semibold"}>
          {postCount} Posts.
        </Text>
      </Flex>
    </>
  );
};

export default TrendingTagsContainer;
