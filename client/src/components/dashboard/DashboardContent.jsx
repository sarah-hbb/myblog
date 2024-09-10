import DashboardProfile from "./DashboardProfile";
import DashboardPosts from "./DashboardPosts";
import DashboardUsers from "./DashboardUsers";

const DashboardContent = ({ tab }) => {
  return (
    <div>
      {tab === "profile" && <DashboardProfile />}
      {tab === "posts" && <DashboardPosts />}
      {tab === "users" && <DashboardUsers />}
    </div>
  );
};

export default DashboardContent;
