export default function ReviewsItem({ review }) {
  return (
    <div className="col-12 d-flex">
      <div>
        <div className="avatar">{review.name[0]}</div>
      </div>
      <div>name</div>
      <div>vote</div>
      <div>text</div>
      <div>created</div>
    </div>
  );
}
