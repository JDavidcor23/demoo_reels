import { routes } from "../constants";
import { Login, Signup } from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const PublicRoute = () => {
  return (
    <Routes>
      <Route path={routes.LOGIN} element={<Login />} />
      <Route path={routes.SIGNUP} element={<Signup />} />
      <Route
        path={routes.ERROR}
        element={<Navigate to={routes.HOME} replace />}
      />
    </Routes>
  );
};
