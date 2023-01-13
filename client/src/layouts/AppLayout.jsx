import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { verifyUser } from "./../redux/actions/authActions";
import { useToast } from "@chakra-ui/react";
const AppLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const verifyToken = () => {
      dispatch(verifyUser(navigate, toast));
    };
    verifyToken();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AppLayout;
