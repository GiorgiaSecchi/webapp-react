import ReviewsItem from "./ReviewsItem";

export default function ReviewsList({ reviews }) {
  return (
    <div className="row g-4 mt-2">
      {reviews.map((review) => (
        <ReviewsItem review={review} key={review.id} />
      ))}
    </div>
  );
}
