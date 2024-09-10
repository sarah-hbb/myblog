import React, { useEffect, useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardContent from "../components/dashboard/DashboardContent";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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
    <div className=" flex-1 flex flex-col sm:flex-row gap-1 ">
      {/* Sidebar */}
      <div>
        <DashboardSidebar isAdmin={currentUser.isAdmin} tab={tab} />
      </div>
      {/* Dashboard */}
      <div className="p-2 w-full">
        <DashboardContent tab={tab} />
      </div>
    </div>
  );
};

export default Dashboard;
