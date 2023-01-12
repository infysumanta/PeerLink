import React from "react";
import {
  Box,
  Heading,
  useColorModeValue,
  Flex,
  Link,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
const RightSide = () => {
  return (
    <>
      <Box flexGrow={1} display={{ base: "none", lg: "inline" }}>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          rounded={"md"}
          shadow="md"
        >
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
        <Box
          bg={useColorModeValue("white", "gray.700")}
          rounded={"md"}
          shadow="md"
          mt={5}
        >
          <Heading fontSize={"xl"} p={2} fontWeight={"semibold"}>
            👤 Suggestions
          </Heading>
          <hr style={{ marginTop: "10px" }} />
          <Box p={3}>
            <Text>👤 Users follow</Text>
            <Text>👤 Users follow</Text>
            <Text>👤 Users follow</Text>
            <Text>👤 Users follow</Text>
            <Text>👤 Users follow</Text>
            <Text>👤 Users follow</Text>
          </Box>
        </Box>
      </Box>
    </>
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

export default RightSide;
