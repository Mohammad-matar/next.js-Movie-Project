"use client";
import { useState } from "react";

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await search(searchQuery);
      setSearchResults(data.results);
      console.log(data);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const search = async (query) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7c09c2c875a816fd1db55b08daff219a&query=${query}`
      );
      const data = await response.json();
      console.log("Search results:", data);
      return data;
    } catch (error) {
      console.error("Search error:", error);
      throw error;
    }
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
      {searchResults.length > 0 && (
        <ul className="absolute top-16 right-0 bg-white border border-gray-300 rounded-md shadow-md w-full max-h-60 overflow-y-scroll z-10">
          {searchResults.map((result) => (
            <li key={result.id} className="p-4 border-b border-gray-300">
              {result.title}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
