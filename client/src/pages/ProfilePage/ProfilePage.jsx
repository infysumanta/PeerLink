import React from "react";
import { useParams } from "react-router-dom";
const ProfilePage = () => {
  let { username } = useParams();
  if (username.includes("@")) {
    username = username.slice(1);
  }
  return <div>{username}</div>;
};

export default ProfilePage;
