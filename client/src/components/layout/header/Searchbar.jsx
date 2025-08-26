import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigae = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSearchTerm("");
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigae(`/search?${searchQuery}`);
  };

  return (
    <form
      className="bg-red relative bg-cyan-100 px-3 rounded-2xl flex items-center gap-1 lg:w-2/5"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="search"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="rounded-md min-h-10/4 py-2 w-full border-none outline-none text-cyan-800 bg-inherit"
      />
      <button className="border-l-2 border-cyan-800">
        <FiSearch className="text-cyan-800 text-2xl hover:scale-125 transition-transform ml-1" />
      </button>
    </form>
  );
};

export default Searchbar;
