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

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUserDetails } from "./../../redux/actions/authActions";
import constant from "../../util/constant";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchText, setSearchText] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth?.user);
  const logout = () => {
    dispatch(deleteUserDetails());
    localStorage.removeItem(constant.TOKEN_NAME);
    navigate("/login");
  };
  return (
    <>
      <Box
        bg={useColorModeValue("gray.50", "gray.700")}
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
            <Link to="/">PeerLink</Link>
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
              onClick={() => navigate("/notifications")}
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
                  <Avatar size={"sm"} name={user.fullname} bg={"gray.200"} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <Center>
                    <Avatar size={"xl"} name={user.fullname} />
                  </Center>
                  <Center>
                    <p>@{user.username}</p>
                  </Center>
                  <MenuDivider />
                  <MenuItem
                    onClick={() => {
                      navigate(`/@${user.username}`);
                    }}
                  >
                    Account
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate(`/settings`);
                    }}
                  >
                    Settings
                  </MenuItem>
                  <MenuItem onClick={logout}>Logout</MenuItem>
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
      zIndex={999}
      shadow={"lg"}
      bg={useColorModeValue("gray.50", "gray.900")}
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
