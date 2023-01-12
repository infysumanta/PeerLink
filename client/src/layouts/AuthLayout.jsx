import React from "react";
import { Outlet } from "react-router-dom";
import { IconButton, Box, useColorMode } from "@chakra-ui/react";

import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const AuthLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
