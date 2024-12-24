import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiBookmarkSimpleDuotone } from "react-icons/pi";

const PostCard = ({ post, className }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [bookmarked, setBookmarked] = useState();

  const handleBookmark = async () => {
    try {
      if (currentUser) {
        const res = await fetch(`/api/post/bookmarkpost/${post._id}`, {
          method: "PUT",
        });
        if (res.ok) {
          setBookmarked((prv) => !prv);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      setBookmarked(post.bookmarks.includes(currentUser._id));
    }
  }, [currentUser]);

  return (
    <div
      className={`border border-gray-200 rounded-md relative w-full md:w-96 min-w-96 h-60
      shadow-lg shadow-slate-500 hover:shadow-slate-900 hover:scale-105
       transition-all ${className}
      group`}
    >
      <PiBookmarkSimpleDuotone
        className={`${
          bookmarked ? "text-yellow-300" : "text-slate-400"
        } absolute right-0 m-1 text-4xl `}
        onClick={handleBookmark}
      />
      <Link
        to={`/post/${post.slug}`}
        className="flex flex-col justify-between w-full h-full "
      >
        <img
          src={post.image}
          alt=""
          className="w-full object-cover rounded-md h-full"
        />

        <div
          className="flex flex-col w-full text-white gap-2 p-3 absolute bottom-0
       bg-black bg-opacity-45 rounded-b-md"
        >
          <h1
            className="text-lg leading-5 font-bold line-clamp-2
       "
          >
            {post.title}
          </h1>
          <h4 className="text-slate-200 font-thin italic">{post.category}</h4>
          <div
            className="hidden group-hover:block group-hover:animate-reveal
            w-ful p-2 border-2 border-cyan-300 text-cyan-300 rounded-md 
            text-center "
          >
            Read article
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
