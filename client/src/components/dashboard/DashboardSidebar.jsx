import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";
import { PiSignOutFill } from "react-icons/pi";
import { PiUsersThreeLight } from "react-icons/pi";
import { BiBookmarkHeart } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import DashboardSidebarTab from "./DashboardSidebarTab";
import useSignout from "../../hooks/useSignout";
import { useSelector } from "react-redux";

const DashboardSidebar = ({ tab }) => {
  const handleSignout = useSignout();
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div
      className="flex p-2 gap-1
      w-full [&>*]:flex-1
       sm:flex-col sm:justify-start sm:w-60 sm:gap-2"
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
      {currentUser && currentUser.isAdmin && (
        <Link to="/dashboard?tab=posts">
          <DashboardSidebarTab icon={<SiReaddotcv />} active={tab === "posts"}>
            Posts
          </DashboardSidebarTab>
        </Link>
      )}
      {/* Users tab */}
      {currentUser && currentUser.isAdmin && (
        <Link to="/dashboard?tab=users">
          <DashboardSidebarTab
            icon={<PiUsersThreeLight />}
            active={tab === "users"}
          >
            Users
          </DashboardSidebarTab>
        </Link>
      )}
      {/* Notifications tab */}
      {currentUser && currentUser.isAdmin && (
        <Link to="/dashboard?tab=notifications">
          <DashboardSidebarTab
            icon={<IoIosNotificationsOutline />}
            active={tab === "notifications"}
          >
            Notifications
          </DashboardSidebarTab>
        </Link>
      )}
      {/* Bookmarks posts tab */}
      {currentUser && !currentUser.isAdmin && (
        <Link to="/dashboard?tab=bookmarks">
          <DashboardSidebarTab
            icon={<BiBookmarkHeart />}
            active={tab === "bookmarks"}
          >
            Bookmarks
          </DashboardSidebarTab>
        </Link>
      )}
    </div>
  );
};

export default DashboardSidebar;
