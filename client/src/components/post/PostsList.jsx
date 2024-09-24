import PostCard from "./PostCard";

const PostsList = ({ posts }) => {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-4 ">
      {posts.map((p) => (
        <PostCard post={p} key={p._id} />
      ))}
    </div>
  );
};

export default PostsList;
