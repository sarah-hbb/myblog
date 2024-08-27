import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardProfile from "../components/dashboard/DashboardProfile";
import { useSelector } from "react-redux";
import DashboardPosts from "../components/dashboard/DashboardPosts";

// the url for dashboard page is like: /dashboard?tab=profile
// location.search = ?tab=profile
// tabFromUrl = profile

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className=" flex-1 flex flex-col sm:flex-row gap-4 ">
      {/* Sidebar */}
      <div>
        <DashboardSidebar isAdmin={currentUser.isAdmin} />
      </div>
      {/* Dashboard */}
      <div className="p-2 w-full">
        {tab === "profile" && <DashboardProfile />}
        {tab === "posts" && <DashboardPosts />}
      </div>
    </div>
  );
};

export default Dashboard;
