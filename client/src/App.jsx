import React from "react";
import { Routes, Route } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/Auth/LoginPage/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage/RegisterPage";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        {/* Auth Layout */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        {/* App Layout */}
        <Route path="/" element={<AppLayout />}>
          <Route path="/" index element={<HomePage />} />
          {/* Not Found / Error Handler Url */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
