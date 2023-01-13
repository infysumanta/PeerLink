import React from "react";
import { Routes, Route } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/Auth/LoginPage/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage/RegisterPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage/ResetPasswordPage";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        {/* Auth Layout */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Route>
        {/* App Layout */}
        <Route path="/" element={<AppLayout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/:username" index element={<ProfilePage />} />
          <Route path="/settings" index element={<SettingsPage />} />
          <Route path="/notifications" index element={<NotificationPage />} />
          {/* Not Found / Error Handler Url */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
