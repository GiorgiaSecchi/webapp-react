import { useEffect, useState } from "react";

export default function MoviesIndexPage() {
  const [movies, seMovies] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/movies";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        seMovies(data.movies);
        console.log(data.movies);
      });
  }, []);

  return (
    <>
      <div className="container py-5">
        <h1>Movies List</h1>

        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
