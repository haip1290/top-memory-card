function Card({ src, title, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(title)}>
      <img src={src} alt="HSR image" />
      <p>{title}</p>
    </div>
  );
}

export default Card;
