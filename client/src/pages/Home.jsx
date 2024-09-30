import React, { useEffect, useState } from "react";
import SliderComponent from "../components/ui/SliderComponent";

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
    <div className="w-full max-w-7xl mx-auto">
      <SliderComponent posts={posts} />
    </div>
  );
};

export default Home;
