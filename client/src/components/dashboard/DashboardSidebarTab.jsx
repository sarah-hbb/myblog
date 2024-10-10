import React from "react";

const DashboardSidebarTab = ({ children, icon, active, notification }) => {
  return (
    <div
      className={`${
        active ? "bg-cyan-800 text-cyan-200" : "bg-cyan-100 text-cyan-800"
      } 
    sm:text-lg flex flex-row items-start justify-between
    w-full px-2 py-1 rounded-lg gap-1 cursor-pointer
    hover:-translate-y-1 focus:-translate-y-1 transition-all
    `}
    >
      <div className="flex flex-col sm:flex-row items-center gap-1">
        {icon}
        <span>{children}</span>
      </div>

      <span
        className={`${
          !notification ? "hidden" : "visible"
        } text-xs bg-white p-1 text-cyan-800 rounded-lg font-semibold`}
      >
        {notification}
      </span>
    </div>
  );
};

export default DashboardSidebarTab;
