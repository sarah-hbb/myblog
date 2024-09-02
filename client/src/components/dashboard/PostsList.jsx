import { Link } from "react-router-dom";

const PostsList = ({ posts }) => {
  return (
    <div
      className="flex flex-col items-center gap-1 p-2 lg:max-w-7xl
      lg:mx-auto lg:p-10 lg:shadow-2xl
      [&>*:not(:last-child)]:border-b [&>*]:border-gray-300 last:border-b-0"
    >
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex justify-between gap-3 p-2 min-w-full
          hover:scale-105 transition-all"
        >
          <Link to={`/post/${post.slug}`} className="flex-1 flex gap-3 p-1">
            <img src={post.image} alt="" className="h-20 w-20 object-cover" />
            <div className="flex-1 flex flex-col lg:flex-row justify-between lg:gap-9">
              <h1 className="flex-1 text-lg uppercase font-semibold">
                {post.title}
              </h1>
              <h3>{post.category}</h3>
              <span className="text-gray-500">
                Last updated at {new Date(post.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </Link>
          <div className="flex flex-row gap-4">
            <Link to={`/update-post/${post._id}`}>
              <h3 className="text-cyan-700 hover:font-semibold">Edit</h3>
            </Link>

            <h3 className="text-red-600 cursor-pointer hover:font-semibold">
              Delete
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
