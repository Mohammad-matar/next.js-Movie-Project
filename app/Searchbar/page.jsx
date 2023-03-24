"use client";
import { useState } from "react";

export default function Searchbar({ search }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      await search(searchQuery);
    } catch (error) {
      console.error("Search error:", error);
    }
    // event.target.reset();
    // setSearchQuery("");
  };

  return (
    <form
      className="flex justify-end mb-4 fixed top-2 left-0 right-2"
      onSubmit={handleSearchSubmit}
    >
      <input
        type="text"
        placeholder="Search"
        className="py-2 px-5 border border-gray-300 rounded-md"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button
        type="submit"
        className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-md"
      >
        Search
      </button>
    </form>
  );
}
