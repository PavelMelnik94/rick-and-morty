import { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";

import Preloader from "../assets/Preloader";

import { filterLocationById } from "../../api";

function SimpleLocation(props) {
  const { id } = useParams();
  const [location, setLocation] = useState([]);

  const { goBack } = useHistory();

  useEffect(() => {
    filterLocationById(id).then((data) => setLocation(data));
    return () => {};
  }, [id]);

  return (
    <>
      {!location ? (
        <Preloader />
      ) : (
        <div className="simple-char">
          <div className="card ">
            <div className="card-content box ">
              <button className="button is-black " onClick={goBack}>
                {" "}
                Назад
              </button>
              <div className="char-wrapper">
                <div className="char-content">
                  <span className="title is-4 is-family-primary ">
                    {location.name}
                  </span>
                  <ul>
                    {location.type ? (
                      <li>тип: {location.type}</li>
                    ) : (
                      "загружаю..."
                    )}
                    {location.dimension ? (
                      <li>измерение: {location.dimension}</li>
                    ) : (
                      "загружаю..."
                    )}
                  </ul>

                  <div className="char-episode-list">
                    <p
                      className="title is-5 is-bold"
                      style={{ margin: "1rem 0 0" }}
                    >
                      резиденты
                    </p>
                    <ul>
                      {location.residents
                        ? location.residents.map((el) => (
                            <li>
                              {" "}
                              <Link to={el.slice(31)}> {el}</Link>{" "}
                            </li>
                          ))
                        : "загружаю..."}
                    </ul>
                  </div>
                  <button className="button is-black" onClick={goBack}>
                    {" "}
                    Назад
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SimpleLocation;
