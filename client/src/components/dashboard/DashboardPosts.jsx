import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostsList from "./PostsList";

const DashboardPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);

  const { currentUser } = useSelector((state) => state.user);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
      const data = await res.json();
      if (res.ok) {
        setUserPosts(data.posts);
        if (data.posts.lenght < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prv) => [...prv, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {}
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <PostsList posts={userPosts} />
      {showMore && (
        <button
          type="button"
          className="font-bold text-lg text-cyan-600 p-4 self-center
          hover:text-black hover:scale-105 transition-all"
          onClick={handleShowMore}
        >
          Show more posts
        </button>
      )}
    </div>
  );
};

export default DashboardPosts;
