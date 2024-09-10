import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";
import { PiSignOutFill } from "react-icons/pi";
import { PiUsersThreeLight } from "react-icons/pi";
import DashboardSidebarTab from "./DashboardSidebarTab";
import useSignout from "../../hooks/useSignout";
import { useSelector } from "react-redux";

const DashboardSidebar = ({ tab }) => {
  const handleSignout = useSignout();
  const { currentUser } = useSelector((state) => state.user);
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
      {/* Users tab */}
      {currentUser.isAdmin && (
        <Link to="/dashboard?tab=users">
          <DashboardSidebarTab
            icon={<PiUsersThreeLight />}
            active={tab === "users"}
          >
            Users
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
