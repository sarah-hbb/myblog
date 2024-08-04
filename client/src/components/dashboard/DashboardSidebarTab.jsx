import React from "react";

const DashboardSidebarTab = ({ children, icon, active }) => {
  return (
    <div
      className={`${
        active ? "bg-cyan-800 text-cyan-200" : "bg-cyan-200 text-cyan-800"
      } 
    text-lg flex items-center p-4 rounded-lg gap-1 cursor-pointer`}
    >
      {/* <IoPersonCircleSharp className="mr-1 focus:bg-gray-500" /> */}
      {icon}
      <span>{children}</span>
    </div>
  );
};

export default DashboardSidebarTab;
