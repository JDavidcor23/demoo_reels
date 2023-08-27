import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../constants";
import { Chat, Profile } from "../pages";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path={routes.CHAT} element={<Chat />} />
      <Route path={routes.PROFILE} element={<Profile />} />
      <Route
        path={routes.ERROR}
        element={<Navigate to={routes.HOME} replace />}
      />
    </Routes>
  );
};
