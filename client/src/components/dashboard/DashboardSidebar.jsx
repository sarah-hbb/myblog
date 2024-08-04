import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { PiSignOutFill } from "react-icons/pi";
import DashboardSidebarTab from "./DashboardSidebarTab";
import useSignout from "../../hooks/useSignout";

const DashboardSidebar = ({ className }) => {
  const location = useLocation();
  const [tab, setTab] = useState();
  const handleSignout = useSignout();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div
      className="flex flex-col gap-4 p-2 
        min-h-full border-b-2 w-full
        sm:w-60 sm:border-r-2 sm:border-b-0"
    >
      <Link to="/dashboard?tab=profile">
        <DashboardSidebarTab
          icon={<IoPersonCircleSharp />}
          active={tab === "profile"}
        >
          Profile
        </DashboardSidebarTab>
      </Link>
      <div onClick={handleSignout}>
        <DashboardSidebarTab icon={<PiSignOutFill />} active={false}>
          Sign out
        </DashboardSidebarTab>
      </div>
    </div>
  );
};

export default DashboardSidebar;

//   [&>div]:bg-yellow-100 [&>div]:text-lg [&>div]:flex [&>div]:items-center
//    [&>div]:p-4 [&>div]:w-48
//     [&>div]:rounded-lg
