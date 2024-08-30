import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostsList from "./PostsList";

const DashboardPosts = () => {
  const [userPosts, setUserPosts] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  console.log(userPosts);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
      const data = await res.json();
      if (res.ok) {
        setUserPosts(data.posts);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);

  return (
    <div>
      <PostsList posts={userPosts} />
    </div>
  );
};

export default DashboardPosts;
