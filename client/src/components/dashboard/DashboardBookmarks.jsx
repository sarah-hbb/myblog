import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardBookmarks = () => {
  const [bookmarksPosts, setBookmarksPosts] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  const fetchMyBookmarks = async () => {
    try {
      const res = await fetch(`/api/post/mybookmarks/${currentUser._id}`);
      const data = await res.json();
      if (res.ok) {
        setBookmarksPosts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyBookmarks();
  }, [currentUser._id]);

  return (
    <div className="p-2 flex flex-col ">
      <h1
        className="text-xl font-bold text-cyan-700 p-3 italic uppercase
           bg-gray-200 rounded"
      >
        My Bookmarked Posts
      </h1>
      {bookmarksPosts.map((post, index) => (
        <div
          key={index}
          className="flex justify-between gap-3 p-2 w-auto max-w-2xl
                hover:scale-105 transition-all"
        >
          <Link to={`/post/${post.slug}`} className="flex-1 flex gap-3 p-1">
            <img src={post.image} alt="" className="h-20 w-20 object-cover" />
            <div className="flex-1 flex flex-col  justify-between ">
              <h1 className="flex-1 text-lg uppercase font-semibold">
                {post.title}
              </h1>
              <h3>{post.category}</h3>
              <span className="text-gray-500">
                Last updated at {new Date(post.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DashboardBookmarks;
