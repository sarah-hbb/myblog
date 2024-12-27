import { useEffect, useState, useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Alert from "../components/ui/Alert";
import CommentsList from "../components/comment/CommentsList";
import PostsList from "../components/post/PostsList";
import { PiBookmarkSimpleDuotone } from "react-icons/pi";
import useBookmark from "../hooks/useBookmark";

const Post = () => {
  const { postSlug } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postCategory, setPostCategory] = useState();
  const [postsByCategory, setPostsByCategory] = useState([]);
  const [loadingPostsByCategory, setLoadingPostsByCategory] = useState(true);
  const [errorPostsByCategory, setErrorPostsByCategory] = useState(null);

  const { currentUser } = useSelector((state) => state.user);
  const { handleBookmark } = useBookmark();
  const location = useLocation();
  const commentsRef = useRef();

  const fetchPostBySlug = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.message);
      } else {
        if (data.posts.length === 0) {
          setError("Ooops! there is problem loading the post");
        } else {
          setPost(data.posts[0]);
          setPostCategory(data.posts[0].category);
          setError(null);
        }
      }
    } catch (error) {
      setError("something went wrong :(");
    } finally {
      setLoading(false);
    }
  };

  const fetchPostsByCategory = async () => {
    try {
      setLoadingPostsByCategory(true);
      const res = await fetch(`/api/post/getposts?category=${postCategory}`);
      const data = await res.json();
      if (!res.ok) {
        setErrorPostsByCategory(data.message);
      } else {
        setPostsByCategory(data.posts);
        setErrorPostsByCategory(null);
      }
    } catch (error) {
      setErrorPostsByCategory(
        "There is a problem loading more post from this category"
      );
    } finally {
      setLoadingPostsByCategory(false);
    }
  };

  useEffect(() => {
    fetchPostBySlug();
  }, [postSlug]);

  useEffect(() => {
    if (postCategory) {
      fetchPostsByCategory();
    }
  }, [postCategory]);

  useEffect(() => {
    if (location.state?.fromSignin) {
      commentsRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="flex flex-col justify-center items-center pt-4">
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <Alert status="failure" className="w-1/2">
          {error}
        </Alert>
      ) : (
        <main
          className="px-4 py-8 w-full md:max-w-7xl md:mx-auto
          border-b border-gray-300
            flex flex-col justify-center items-center pt-4 gap-4 font-serif"
        >
          <h1 className="text-3xl p-6 text-center font-bold italic text-slate-600">
            {post.title}
          </h1>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-3">
              {currentUser && currentUser.isAdmin && (
                <Link
                  to={`/update-post/${post._id}`}
                  className="bg-cyan-700 py-2 px-4 text-white font-normal
                 hover:bg-black hover:font-bold transition-all rounded "
                >
                  Edit post
                </Link>
              )}
              <Link
                className="text-sm p-3 self-end font-semibold uppercase border border-cyan-400
             rounded shadow-cyan-800 shadow-xl hover:scale-105 transition"
                to={`/search?category=${post.category}`}
              >
                {post.category}
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <button onClick={() => handleBookmark(post, setPost)}>
                <PiBookmarkSimpleDuotone
                  className={`text-3xl ${
                    post.bookmarks.includes(currentUser?._id)
                      ? "text-amber-400"
                      : "text-slate-400"
                  } `}
                />
              </button>
              {post.numberOfBookmarks !== 0 && (
                <span className="text-amber-400 font-semibold uppercase">
                  {post.numberOfBookmarks === 1
                    ? `${post.numberOfBookmarks} bookmark`
                    : post.numberOfBookmarks > 1
                    ? `${post.numberOfBookmarks} bookmarks`
                    : ""}
                </span>
              )}
            </div>
          </div>
          <img
            src={post.image}
            alt=""
            className="w-full h-80 object-cover object-center"
          />
          <h3 className="text-gray-400 self-end">
            <span> last updated at </span>
            {new Date(post.updatedAt).toLocaleDateString()}
          </h3>
          <div
            // post-content class added to style innerHTML of post content. you can style it in index.css file
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="max-w-5xl w-full mx-auto post-content"
          ></div>
        </main>
      )}

      {/* Comments setion */}
      <div
        ref={commentsRef}
        className="flex flex-col w-full max-w-3xl mx-auto self-start p-2 mt-2 gap-4"
      >
        <CommentsList postId={post._id} />
      </div>
      {loadingPostsByCategory ? (
        <LoadingSpinner />
      ) : postsByCategory.length === 0 ? (
        <Alert status={"failure"}>{errorPostsByCategory}</Alert>
      ) : (
        <div
          className="flex flex-col justify-center items-center border-t-2 border-black p-4 w-full
         "
        >
          <h1 className="text-xl font-semibold p-2 mb-4 italic">
            More posts from {post.category} category
          </h1>
          <PostsList
            posts={postsByCategory.filter((p) => p._id !== post._id)}
          />
        </div>
      )}
    </div>
  );
};

export default Post;
