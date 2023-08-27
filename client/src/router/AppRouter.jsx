import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "../constants";
import { Chat, Home, Login, Designers, Profile } from "../pages";
import { Signup } from "../pages/Signup";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.CHAT} element={<Chat />} />
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.SIGNUP} element={<Signup />} />
        <Route path={routes.PROFILE} element={<Profile />} />
        <Route path={routes.DESIGNERS} element={<Designers />} />
      </Routes>
    </HashRouter>
  );
};
