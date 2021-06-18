import { Link } from "react-router-dom";

export default function EpisodesItem({
  name,
  air_date,
  episode,
  id,
}) {
  return (
    <div className="card list-item " style={{ border: "1px solid black" }}>
      <div className="card-content box">
        <div className="list-item-content" style={{ minHeight: "200px" }}>
          <h1 className="is-size-5">{name}</h1>
          <h4>дата выхода: {air_date}</h4>
          <h4>эпизод: {episode} </h4>

          <Link
            to={`/episode/${id}`}
            className="button is-dark 
"
          >
            {" "}
            подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}
