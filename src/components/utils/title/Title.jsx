import "./Title.scss";

export default function Title() {
  return (
    <div className="title__container">
      <div className="title__container__item">
        {["S", "P", "L", "I"].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
      <div className="title__container__item">
        {["T", "T", "E", "R"].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
