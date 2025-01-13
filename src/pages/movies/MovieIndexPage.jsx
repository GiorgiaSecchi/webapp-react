import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MovieIndexPage() {
  const [movies, seMovies] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + `api/movies`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Errore nella fetch: ${res.status} ${res.statusText}`
          );
        }
        return res.json();
      })

      .then((data) => {
        seMovies(data.movies);
        console.log(data.movies);
      })
      .catch((error) => {
        console.error("Si è verificato un errore durante la fetch:", error);
      });
  }, []);

  return (
    <>
      <div className="container py-5">
        <h1>Movies List</h1>

        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/` + movie.id}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
