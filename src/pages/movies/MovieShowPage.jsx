import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieShowPage() {
  const movieId = useParams().id;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + `api/movies/` + movieId;

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
        setMovie(data.movie);
        console.log(data.movie);
      })
      .catch((error) => {
        console.error("Si è verificato un errore durante la fetch:", error);
      });
  }, []);

  return (
    <>
      {movie && (
        <div className="container py-5">
          <h1>Movie Detail</h1>

          <img src={movie.image} alt={movie.title} />
          <h2 className="card-title">{movie.title}</h2>
          <h4 className="card-subtitle ">{movie.director}</h4>
          <h6 className="card-subtitle ">{movie.release_year}</h6>
          <h6 className="card-subtitle ">{movie.genre}</h6>
          <p className="card-text">{movie.abstract}</p>
        </div>
      )}
    </>
  );
}
