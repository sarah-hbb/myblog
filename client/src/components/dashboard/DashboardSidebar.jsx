import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";
import { PiSignOutFill } from "react-icons/pi";
import DashboardSidebarTab from "./DashboardSidebarTab";
import useSignout from "../../hooks/useSignout";
import { useSelector } from "react-redux";

const DashboardSidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState();
  const handleSignout = useSignout();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div
      className="flex flex-col gap-2 p-2 
        min-h-full border-b-2 w-full
        sm:w-60 sm:border-r-2 sm:border-b-0"
    >
      {/* profile tab */}
      <Link to="/dashboard?tab=profile">
        <DashboardSidebarTab
          icon={<IoPersonCircleSharp />}
          active={tab === "profile"}
          notification={currentUser.isAdmin ? "Admin" : "User"}
        >
          Profile
        </DashboardSidebarTab>
      </Link>
      {/* Posts tab */}
      {currentUser.isAdmin && (
        <Link to="/dashboard?tab=posts">
          <DashboardSidebarTab icon={<SiReaddotcv />} active={tab === "posts"}>
            Posts
          </DashboardSidebarTab>
        </Link>
      )}

      {/* Signout tab */}
      <div onClick={handleSignout}>
        <DashboardSidebarTab icon={<PiSignOutFill />} active={false}>
          Sign out
        </DashboardSidebarTab>
      </div>
    </div>
  );
};

export default DashboardSidebar;
