import React, { useEffect, useState } from "react";
import Carousel from "../components/ui/Carousel";

const Home = () => {
  const [posts, setPost] = useState([]);
  const fetchPostsByCategory = async () => {
    try {
      const res = await fetch(`/api/post/getposts`);
      const data = await res.json();
      if (res.ok) {
        setPost(data.posts);
      } else {
        console.log("There is a problem loading more post from this category");
      }
    } catch (error) {
      console.log("There is a problem loading more post from this category");
    }
  };

  useEffect(() => {
    fetchPostsByCategory();
  }, []);

  return (
    <div className="w-full mx-auto">
      <Carousel posts={posts} />
    </div>
  );
};

export default Home;
