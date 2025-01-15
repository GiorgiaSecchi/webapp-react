export default function ReviewsItem({ review }) {
  // funzione per generare le stelle in base al dato di "vote"
  const generateStars = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      //   console.log("i: ", i);
      //   console.log("rating: ", rating);
      //   console.log("i < rating: ", i < rating);
      //   console.log("-------------");

      const star = (
        <i className={`fa-${i >= rating ? `regular` : `solid`} fa-star`}></i>
      );
      stars.push(star);
    }
    return stars;
  };

  return (
    <div className="col-12 d-flex gap-3 align-items-center">
      <div>
        <div className="avatar">{review.name[0]}</div>
      </div>
      <div>
        {generateStars(review.vote).map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
      <div>{review.name}</div>
      <div>{review.text}</div>
      <div>{review.created_at}</div>
    </div>
  );
}
