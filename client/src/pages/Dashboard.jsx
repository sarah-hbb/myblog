import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardProfile from "../components/dashboard/DashboardProfile";

// the url for dashboard page is like: /dashboard?tab=profile
// location.search = ?tab=profile
// tabFromUrl = profile

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="flex-1 flex flex-col sm:flex-row gap-4">
      {/* Sidebar */}
      <div>
        <DashboardSidebar />
      </div>
      {/* Profile */}
      {tab === "profile" && <DashboardProfile />}
    </div>
  );
};

export default Dashboard;
