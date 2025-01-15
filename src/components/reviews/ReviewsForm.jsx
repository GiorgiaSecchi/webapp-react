import { useState } from "react";

export default function ReviewsForm({ movieId }) {
  const formInitialData = {
    name: "",
    vote: "",
    text: "",
  };

  const [reviewForm, setReviewForm] = useState(formInitialData);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // console.log("Review:", reviewForm);

    if (validateForm(reviewForm)) {
      const storeReviewsUrl =
        import.meta.env.VITE_BACKEND_URL + `api/movies/` + movieId;
      fetch(storeReviewsUrl)
        .then((res) => res.json())
        .then((data) => {
          //# TO DO
        });
    } else {
      alert("Form non  valido");
    }
  };

  const validateForm = ({ name, vote, text }) => {
    if (!name) return false;
    if (!vote || vote < 1 || vote > 5) return false;
    if (!text) return false;

    return true;
  };

  const handleFormChange = (e) => {
    setReviewForm({
      ...reviewForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="row  g-3 align-items-end" onSubmit={handleReviewSubmit}>
      <div className="col">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          placeholder="Type here..."
          aria-label="name"
          name="name"
          value={reviewForm.name}
          onChange={handleFormChange}
        />
      </div>
      <div className="col">
        <label htmlFor="vote" className="form-label">
          Vote
        </label>
        <input
          id="vote"
          type="number"
          className="form-control"
          placeholder="Rating from 1 to 5..."
          aria-label="vote"
          name="vote"
          value={reviewForm.vote}
          onChange={handleFormChange}
        />
      </div>
      <div className="col">
        <label htmlFor="text" className="form-label">
          Text
        </label>
        <input
          id="text"
          type="text"
          className="form-control"
          placeholder="Type here..."
          aria-label="text"
          name="text"
          value={reviewForm.text}
          onChange={handleFormChange}
        />
      </div>
      <div className="col">
        <button className="btn btn-primary">Invia</button>
      </div>
    </form>
  );
}
