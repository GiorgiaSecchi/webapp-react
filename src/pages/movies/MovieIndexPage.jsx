import { useEffect, useState } from "react";
import Card from "../../components/Card";

export default function MovieIndexPage() {
  const [movies, setMovies] = useState([]);

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
        setMovies(data.movies);
        console.log(data.movies);
      })
      .catch((error) => {
        console.error("Si è verificato un errore durante la fetch:", error);
      });
  }, []);

  return (
    <>
      <div className="container py-5">
        <div className="mb-5">
          <h1>Movies List</h1>
        </div>

        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <Card
                image={movie.image}
                title={movie.title}
                subtitle={movie.director}
                link={{
                  to: `/movies/` + movie.id,
                  text: "View detail",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
