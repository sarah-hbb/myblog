import React from "react";

const DashboardSidebarTab = ({ icon, title, active }) => {
  return (
    <div
      className={`${
        active ? "bg-cyan-800 text-cyan-200" : "bg-cyan-200 text-cyan-800"
      } 
    text-lg flex items-center p-4 w-48 rounded-lg gap-1`}
    >
      {/* <IoPersonCircleSharp className="mr-1 focus:bg-gray-500" /> */}
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default DashboardSidebarTab;
