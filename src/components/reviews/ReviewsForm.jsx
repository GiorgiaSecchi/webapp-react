export default function ReviewsForm({ movieId }) {
  const storeReviewsUrl =
    import.meta.env.VITE_BACKEND_URL + `api/movies/` + movieId;

  return (
    <form className="row  g-3">
      <div className="col">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Type here..."
          aria-label="name"
        />
      </div>
      <div className="col">
        <label htmlFor="vote" className="form-label">
          Vote
        </label>
        <input
          type="number"
          className="form-control"
          placeholder="Rating from 1 to 5..."
          aria-label="vote"
        />
      </div>
      <div className="col">
        <label htmlFor="text" className="form-label">
          Text
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Type here..."
          aria-label="text"
        />
      </div>
    </form>
  );
}
