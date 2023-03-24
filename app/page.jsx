"use client";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Searchbar from "./Searchbar/page";

// whenever want to use state effect or button in next13 its from client side not server side so we should add  at the top "user client"
export default function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=7c09c2c875a816fd1db55b08daff219a`
    );
    const res = await data.json();
    setData(res);
  };

  const search = async (query) => {
    try {
      let filteredData = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7c09c2c875a816fd1db55b08daff219a&query=${query}`
      );
      let response = await filteredData.json();
      setData(response);
      console.log("Search results:", response);
      // return data;
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    getData();
  };
  return (
    <div className="menu_Container">
      <div className="flex justify-between">
        <button
          className="my-10 ml-2 py-2 px-4 bg-green-500 text-white rounded-md"
          onClick={handleClick}
        >
          Home
        </button>
        <Searchbar search={search} />
      </div>
      <main>
        <div className="grid gap-16 grid-cols-fluid">
          {data?.results?.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
