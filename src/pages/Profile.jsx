import React from "react";
import { ProfileInfo, Navbar, Design, AddProject } from "../components";

export const Profile = () => {
  return (
    <div className="gradient-bg-welcome">
      <Navbar />
      <div className="flex">
        <ProfileInfo />
        {/* <Design /> */}
        <AddProject />
      </div>
    </div>
  );
};
