import React, { useState } from "react";
import {
  useToast,
  Flex,
  useColorModeValue,
  Stack,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Link,
  Button,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link as aHref, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./../../../redux/actions/authActions";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data, navigate, toast, setLoading));
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.200", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"5xl"}>PeerLink</Heading>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input
                  type="username"
                  placeholder="username"
                  {...register("username")}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="**********"
                  {...register("password")}
                />
              </FormControl>
              <Stack spacing={5}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"end"}
                >
                  <Link color={"blue.400"} as={aHref} to="/forgot-password">
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                  isLoading={loading}
                >
                  Sign in
                </Button>
              </Stack>
            </form>
            <Stack pt={2}>
              <Text align={"center"}>
                Don't Have Account?{" "}
                <Link color={"blue.400"} as={aHref} to="/register">
                  Create Account
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
