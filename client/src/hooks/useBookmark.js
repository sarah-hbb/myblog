import { useSelector } from "react-redux";

const useBookmark = () => {
  const { currentUser } = useSelector((state) => state.user);

  const handleBookmark = async (post, setPost) => {
    try {
      if (currentUser) {
        const res = await fetch(`/api/post/bookmarkpost/${post._id}`, {
          method: "PUT",
        });
        const data = await res.json();
        if (res.ok) {
          setPost((prvPost) => ({
            ...prvPost,
            bookmarks: data.bookmarks,
            numberOfBookmarks: data.numberOfBookmarks,
          }));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { handleBookmark };
};

export default useBookmark;
