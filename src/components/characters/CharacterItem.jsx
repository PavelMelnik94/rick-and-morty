import { Link } from "react-router-dom";

export default function CharacterItem(props) {
  const { name, image, id } = props;
  return (
    <div className=" ">
      <div className="card list-item">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Placeholderimage" />
          </figure>
        </div>
        <div className="card-content box">
          <div className="list-item-content card-size-character">
            <p className="title is-4 ">{name}</p>
            <Link to={`/character/${id}`} className="button is-dark">
              подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
