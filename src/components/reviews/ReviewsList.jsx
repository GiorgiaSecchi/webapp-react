import ReviewsItem from "./ReviewsItem";

export default function ReviewsList({ reviews }) {
  return (
    <div className="row g-3 mt-4">
      {reviews.map((review) => (
        <ReviewsItem review={review} key={review.id} />
      ))}
    </div>
  );
}
