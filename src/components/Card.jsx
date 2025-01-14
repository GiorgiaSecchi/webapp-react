import { Link } from "react-router-dom";

export default function Card({ image, title, subtitle, description, link }) {
  return (
    <div className="card">
      {image && <img src="..." className="card-img-top" alt="..." />}

      <div className="card-body">
        {title && <h5 className="card-title">Card title</h5>}
        {subtitle && <h5 className="card-title">Card subtitle</h5>}
        {description && (
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        )}

        {link.to && link.text && (
          <Link to={link.to} className="btn btn-primary">
            {link.text}
          </Link>
        )}
      </div>
    </div>
  );
}
