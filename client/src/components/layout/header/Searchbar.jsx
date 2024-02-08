import React from "react";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <form className="bg-red relative bg-cyan-100 px-3 rounded-2xl flex items-center gap-1 w-2/5">
      <input
        type="text"
        name="search"
        placeholder="search..."
        className="rounded-md min-h-10/4 py-2 w-full border-none outline-none text-cyan-800 bg-inherit"
      />
      <button className="border-l-2 border-cyan-800">
        <FiSearch className="text-cyan-800 text-2xl hover:scale-125 transition-transform ml-1" />
      </button>
    </form>
  );
};

export default Searchbar;
