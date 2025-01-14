import { Link } from "react-router-dom";

export default function Card({ image, title, subtitle, description, link }) {
  return (
    <div className="card shadow w-100">
      {image && <img src={image} className="card-img-top" alt={title} />}

      <div className="card-body">
        {title && <h5 className="card-title text-uppercase">{title}</h5>}
        {subtitle && <h6 className="card-subtitle fw-normal">{subtitle}</h6>}
        {description && <p className="card-text">{description}</p>}

        {link.to && link.text && (
          <Link to={link.to} className="btn btn-primary btn-sm mt-3">
            {link.text}
          </Link>
        )}
      </div>
    </div>
  );
}
