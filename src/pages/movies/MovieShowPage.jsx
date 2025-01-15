import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReviewsList from "../../components/reviews/ReviewsList";
import ReviewsForm from "../../components/reviews/ReviewsForm";

export default function MovieShowPage() {
  const movieId = useParams().id;
  const [movie, setMovie] = useState(null);

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
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4 text-uppercase">
              <h1>{movie.title}</h1>
              <Link
                className="btn btn-outline-secondary btn-sm text-capitalize"
                to="/movies"
              >
                Back to the movies list
              </Link>
            </div>

            <div className="row">
              <div className="col-4">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="img-fluid shadow"
                />
              </div>

              <div className="col-8">
                <p className="card-subtitle mb-2 fs-4 ">
                  Directed by:{" "}
                  <span className="fw-medium">{movie.director}</span>
                </p>
                <p className="card-subtitle mb-2 fs-5">
                  Year: <span className="fw-medium">{movie.release_year}</span>
                </p>
                <p className="card-subtitle mb-4 fs-5">
                  Genre: <span className="fw-medium">{movie.genre}</span>
                </p>
                <p className="card-text mb-4 py-2 fst-italic ">
                  {movie.abstract}
                </p>
                <button className="btn btn-primary">WATCH NOW</button>

                <hr />

                <div className="my-4">
                  <h5 className="mb-4">ADD YOUR REVIEW ON THIS MOVIE: </h5>
                  <ReviewsForm movieId={movieId} />
                </div>
                <hr />
                <div>
                  <ReviewsList reviews={movie.reviews} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
