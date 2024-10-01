import { Link } from "react-router-dom";

const PostCard = ({ post, className }) => {
  return (
    <div
      className={`border border-gray-200 rounded-md relative min-w-full md:min-w-96 h-60
      shadow-lg shadow-slate-500 hover:shadow-slate-900 hover:scale-105
       transition-all ${className}
      group`}
    >
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            ad, quis possimus aut provident laboriosam quam dolorem perferendis
            ipsa eaque consectetur aspernatur accusantium distinctio vel iure
            qui vitae optio tempora!
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
