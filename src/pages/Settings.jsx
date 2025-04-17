import React from "react";
import Header from "../components/common/header";
import { div } from "framer-motion/client";
import Profile from "../components/settings/Profile";
import Notification from "../components/settings/Notification";
import Secure from "../components/settings/Secure";

const Settings = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10  bg-gray-900">
      <Header title={"Settings"} />
      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8"></main>
      <Profile />
      <Notification />
      <Secure />
    </div>
  );
};

export default Settings;
