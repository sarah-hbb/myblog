import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "../components/ui/Select";
import Input from "../components/ui/Input";
import selectItems from "../constants/SelectOptions";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PostsList from "../components/post/PostsList";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState({});
  const [searchPosts, setSearchPosts] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const fetchSearchPosts = async () => {
    try {
      setLoading(true);
      const urlParams = new URLSearchParams(location.search);
      const searchParams = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchParams}`);
      const data = await res.json();
      if (res.ok) {
        setSearchPosts(data.posts);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchQuery.searchTerm);
    urlParams.set("order", searchQuery.order);
    if (searchQuery.category) {
      urlParams.set("category", searchQuery.category);
    }
    const searchParams = urlParams.toString();
    navigate(`/search?${searchParams}`);
    console.log(searchParams);
    fetchSearchPosts();
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const orderFromUrl = urlParams.get("order");
    const categoryFromUrl = urlParams.get("category");
    if (searchTermFromUrl || orderFromUrl || categoryFromUrl) {
      setSearchQuery({
        ...searchQuery,
        searchTerm: searchTermFromUrl,
        order: orderFromUrl,
        category: categoryFromUrl,
      });
    }
    fetchSearchPosts();
  }, [location.search]);

  return (
    <div className="p-4 w-full flex flex-col">
      <form
        className="flex flex-col sm:flex-row justify-between w-full gap-2 max-w-5xl mx-auto"
        onSubmit={handleSearchSubmit}
      >
        <Input
          className=""
          type="text"
          placeholder="search term"
          id="search-term"
          value={searchQuery?.searchTerm}
          onChange={(e) => {
            setSearchQuery({ ...searchQuery, searchTerm: e.target.value });
          }}
        />
        <div className="flex flex-row w-full justify-between gap-2">
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Select
              className="w-full"
              options={selectItems.categoryOptions}
              onChange={(e) => {
                setSearchQuery({ ...searchQuery, category: e.target.value });
              }}
              value={searchQuery.category}
            />
            <Select
              className="w-full"
              options={selectItems.orderOptions}
              onChange={(e) => {
                setSearchQuery({ ...searchQuery, order: e.target.value });
              }}
              value={searchQuery.order}
            />
          </div>
          <button className="border-l-2 border-cyan-800">
            <FiSearch className="text-cyan-800 text-2xl hover:scale-125 transition-transform ml-1" />
          </button>
        </div>
      </form>
      <div className="p-4 flex justify-center items-center">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div>
            <PostsList posts={searchPosts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
