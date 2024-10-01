import { useEffect, useRef } from "react";
import PostCard from "../post/PostCard";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const Carousel = ({ posts }) => {
  const containerRef = useRef();

  const handlePrvClick = () => {
    if (containerRef.current) {
      let { clientWidth, scrollLeft } = containerRef.current;

      containerRef.current.scrollTo({
        left: scrollLeft - clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    if (containerRef.current) {
      let { clientWidth, scrollLeft, scrollWidth } = containerRef.current;
      if (clientWidth + scrollLeft + 1 > scrollWidth) {
        containerRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollTo({
          left: scrollLeft + clientWidth,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center py-5 px-3 gap-2">
        <button
          type="button"
          onClick={handlePrvClick}
          className="text-2xl sm:p-2 border h-full rounded-full
         bg-slate-600 bg-opacity-30 "
        >
          <MdNavigateBefore className="text-cyan-900 hover:scale-125 transition-all" />
        </button>
        <div className="overflow-hidden sm:px-2 py-4" ref={containerRef}>
          <div className="flex sm:p-2 sm:gap-2">
            {posts.map((p) => (
              <PostCard post={p} key={p._id} />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNextClick}
          className="text-2xl sm:p-2 border h-full rounded-full
         bg-slate-600 bg-opacity-30"
        >
          <MdNavigateNext className="text-cyan-900 hover:scale-125 transition-all" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
