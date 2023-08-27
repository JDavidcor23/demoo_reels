import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "../constants";
import { Home, Designers } from "../pages";
import { useEffect } from "react";
import { useAuth } from "../hooks";
import { PrivateRoutes } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user, isLoggedIn, setTrue } = useAuth();

  useEffect(() => {
    if (user) {
      setTrue();
    }
  }, [user]);

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
