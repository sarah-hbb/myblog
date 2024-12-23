import DashboardProfile from "./DashboardProfile";
import DashboardPosts from "./DashboardPosts";
import DashboardUsers from "./DashboardUsers";
import DashboardBookmarks from "./DashboardBookmarks";
import DashboardNotifications from "./DashboardNotifications";

const DashboardContent = ({ tab }) => {
  return (
    <div>
      {tab === "profile" && <DashboardProfile />}
      {tab === "posts" && <DashboardPosts />}
      {tab === "users" && <DashboardUsers />}
      {tab === "bookmarks" && <DashboardBookmarks />}
      {tab === "notifications" && <DashboardNotifications />}
    </div>
  );
};

export default DashboardContent;
