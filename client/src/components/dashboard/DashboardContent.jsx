import DashboardProfile from "./DashboardProfile";
import DashboardPosts from "./DashboardPosts";
import DashboardUsers from "./DashboardUsers";
import DashboardBookmarks from "./DashboardBookmarks";

const DashboardContent = ({ tab }) => {
  return (
    <div>
      {tab === "profile" && <DashboardProfile />}
      {tab === "posts" && <DashboardPosts />}
      {tab === "users" && <DashboardUsers />}
      {tab === "bookmarks" && <DashboardBookmarks />}
    </div>
  );
};

export default DashboardContent;
