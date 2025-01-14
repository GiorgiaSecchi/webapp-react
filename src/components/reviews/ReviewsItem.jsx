export default function ReviewsItem({ review }) {
  return (
    <div className="col-12 d-flex gap-3 align-items-center">
      <div>
        <div className="avatar">{review.name[0]}</div>
      </div>
      <div>{review.name}</div>
      <div>{review.vote}</div>
      <div>{review.text}</div>
      <div>{review.created_at}</div>
    </div>
  );
}
