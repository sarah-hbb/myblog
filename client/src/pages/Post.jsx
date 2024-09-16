import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Alert from "../components/ui/Alert";
import CreateComment from "../components/comment/CreateComment";

const Post = () => {
  const { postSlug } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { currentUser } = useSelector((state) => state.user);

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
          setError(null);
        }
      }
    } catch (error) {
      setError("something went wrong :(");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostBySlug();
  }, [postSlug]);

  return (
    <div className="flex flex-col justify-center items-center pt-4 ">
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <Alert status="failure" className="w-1/2">
          {error}
        </Alert>
      ) : (
        <main
          className="px-4 py-8 w-full md:max-w-7xl md:mx-auto
            flex flex-col justify-center items-center pt-4 gap-4 font-serif"
        >
          <h1 className="text-3xl p-6 text-center font-bold italic text-slate-600">
            {post.title}
          </h1>
          <Link
            className="text-sm p-3 self-end font-semibold uppercase border border-cyan-400
             rounded shadow-cyan-800 shadow-xl hover:scale-105 transition"
            to={`/search?category=${post.category}`}
          >
            {post.category}
          </Link>
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
          {currentUser ? (
            <CreateComment
              postId={post._id}
              userId={currentUser._id}
              profilePicture={currentUser.profilePicture}
              username={currentUser.username}
            />
          ) : (
            <div>
              <Link
                to="/signin"
                className="text-cyan-600 hover:underline font-semibold"
              >
                Sign-in
              </Link>
              <span> to add your comment on this post.</span>
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default Post;
