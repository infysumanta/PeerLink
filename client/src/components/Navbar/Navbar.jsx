import React, { useState } from "react";
import {
  Flex,
  useColorModeValue,
  Avatar,
  MenuList,
  Box,
  Stack,
  Button,
  Menu,
  MenuButton,
  Center,
  MenuDivider,
  MenuItem,
  Input,
  useColorMode,
  InputGroup,
  InputRightElement,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, SearchIcon, BellIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchText, setSearchText] = useState();
  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.700")}
        px={4}
        w="100%"
        shadow="lg"
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          minWidth="max-content"
          gap="2"
        >
          <Box fontSize={"2xl"} fontWeight="bold">
            PeerLink
          </Box>
          <Box display={{ base: "none", md: "inline" }}>
            <InputGroup>
              <Input
                placeholder="Search User"
                w={{ base: "0px", md: "500px" }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <InputRightElement h={"full"}>
                <Button variant={"ghost"}>🔍</Button>
              </InputRightElement>
            </InputGroup>
            {searchText && searchText.length >= 1 && <SearchListContainer />}
          </Box>
          <Flex alignItems={"center"} justifyContent={"space-between"} gap={5}>
            <Box
              cursor="pointer"
              bg={useColorModeValue("gray.200", "gray.600")}
              w={8}
              h={8}
              rounded={"full"}
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              🔔
            </Box>
            <Box
              onClick={toggleColorMode}
              cursor="pointer"
              bg={useColorModeValue("gray.200", "gray.600")}
              w={8}
              h={8}
              rounded={"full"}
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
              shadow="md"
            >
              {colorMode === "light" ? <>🌙</> : <>🔆</>}
            </Box>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} name="Peer Link" bg={"gray.200"} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <Center>
                    <Avatar size={"xl"} name="Peer Link" />
                  </Center>
                  <Center>
                    <p>Username</p>
                  </Center>
                  <MenuDivider />
                  <MenuItem>Account</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

const SearchListContainer = () => {
  return (
    <Box
      position="absolute"
      bg={useColorModeValue("white", "gray.900")}
      w={{ base: "0px", md: "500px" }}
      marginTop="2px"
    >
      <Card>
        <CardBody>Loading...</CardBody>
      </Card>
    </Box>
  );
};
export default Navbar;
