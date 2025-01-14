import ReviewsItem from "./ReviewsItem";

export default function ReviewsList({ reviews }) {
  return (
    <div className="row">
      {reviews.map((review) => (
        <ReviewsItem review={review} key={review.id} />
      ))}
    </div>
  );
}
