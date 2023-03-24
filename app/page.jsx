import React from "react";
import Movie from "./Movie";
import Searchbar from "./Searchbar/page";

// whenever want to use state effect or button in next13 its from client side not server side so we should add  at the top "user client"
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <>
      <Searchbar />
      <main>
        <div className="grid gap-16 grid-cols-fluid">
          {res.results.map((movie) => (
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
    </>
  );
}
