import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../constants";
import { Home, Designers } from "../pages";
import { useEffect } from "react";
import { useAuth } from "../hooks";
import { PrivateRoutes } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { isLoggedIn, setTrue, setFalse } = useAuth();

  let accessToken = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  useEffect(() => {
    if (accessToken?._id) {
      setTrue();
    } else {
      setFalse();
    }
  }, [accessToken]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.DESIGNERS} element={<Designers />} />
        {isLoggedIn ? (
          <Route path={routes.REDIRECT} element={<PrivateRoutes />} />
        ) : (
          <Route path={routes.REDIRECT} element={<PublicRoute />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
