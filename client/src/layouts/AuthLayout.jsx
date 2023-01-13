import React from "react";
import { Outlet } from "react-router-dom";
import { IconButton, Box, useColorMode } from "@chakra-ui/react";

import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import constant from "../util/constant";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUserDetails } from "./../redux/actions/authActions";

const AuthLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem(constant.TOKEN_NAME);
    if (token) {
      navigate("/");
      dispatch(deleteUserDetails());
    }
  }, []);
  return (
    <>
      <Box
        position={"absolute"}
        right={0}
        marginTop={"10px"}
        marginRight={"10px"}
        shadow={"lg"}
        rounded={"lg"}
      >
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        />
      </Box>
      <Outlet />
    </>
  );
};

export default AuthLayout;
