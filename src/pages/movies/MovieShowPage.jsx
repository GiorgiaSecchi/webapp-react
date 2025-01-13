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
      <div className="container py-5">
        <h1>Movies Detail</h1>

        {movie && <p>{movie.title}</p>}
      </div>
    </>
  );
}
