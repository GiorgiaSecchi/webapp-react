import { useEffect, useState } from "react";

export default function MoviesIndexPage() {
  const [movies, seMovies] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/movies";

    fetch(url)
      .then()
      .then((res) => {
        seMovies(res);
      });
  }, []);

  return (
    <>
      <div className="container py-5">
        <h1>Movies List</h1>

        {movies}
      </div>
    </>
  );
}
