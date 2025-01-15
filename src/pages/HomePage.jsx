import { useEffect, useState } from "react";

import Carousel from "../components/Carousel";

export default function HomePage() {
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
    <div className="container py-5">
      <h1>Home</h1>

      {/* {movies.map((movie, index) => (
        <div key={index}>
          <Carousel images={[movie.image]} />
        </div>
      ))} */}

      {/* <div className="m-auto">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="http://localhost:3000/img/movies/inception.jpg"
                className="d-block w-50"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="http://localhost:3000/img/movies/the_godfather.jpg"
                className="d-block w-50"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="http://localhost:3000/img/movies/titanic.jpg"
                className="d-block w-50"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
