function Card({ src, title }) {
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={src} className="card-img-top" alt={title || "Image"} />
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
        </div>
      </div>
    </div>
  );
}

export default Card;
