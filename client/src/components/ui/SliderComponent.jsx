import { useEffect, useState } from "react";
import PostCard from "../post/PostCard";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const SliderComponent = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrvClick = () => {
    setCurrentIndex((prvCurrentIndex) =>
      prvCurrentIndex === 0 ? posts.length - 1 : prvCurrentIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prvCurrentIndex) =>
      prvCurrentIndex === posts.length - 1 ? 0 : prvCurrentIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center p-3 gap-2 ">
        <button
          type="button"
          onClick={handlePrvClick}
          className="text-2xl p-2 border h-full rounded-full
         bg-slate-600 bg-opacity-30"
        >
          <MdNavigateBefore className="text-cyan-900" />
        </button>
        <div className="overflow-hidden">
          <div className={`flex p-2`}>
            {posts.map((p) => (
              <PostCard
                post={p}
                key={p._id}
                className={`-translate-x-[${currentIndex * 100}%]`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNextClick}
          className="text-2xl p-2 border h-full rounded-full
         bg-slate-600 bg-opacity-30"
        >
          <MdNavigateNext className="text-cyan-900" />
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
