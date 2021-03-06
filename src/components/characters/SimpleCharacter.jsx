import { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";

import Preloader from "../assets/Preloader";

import { filterCharacterById } from "../../api";

function SimpleCharacter(props) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  const { goBack } = useHistory();

  useEffect(() => {
    filterCharacterById(id).then((data) => setCharacter(data));
  }, [id, character.episode, character]);

  return (
    <>
      {!character ? (
        <Preloader />
      ) : (
        <div className="simple-char">
          <div className="card ">
            <div className="card-content box ">
              <div className="char-wrapper">
                <div className="char-img">
                  <img src={character.image} alt="fdf" />
                </div>

                <div className="char-content">
                  <span className="title is-4 is-family-primary ">
                    {character.name}
                  </span>
                  <ul>
                    <li>статус: {character.status}</li>
                    <li>пол: {character.gender}</li>
                    <li>измерение: {character.species}</li>
                    {character.type ? <li> тип: {character.type} </li> : null}

                    {character.origin ? (
                      <li>
                        {" "}
                        место рождения:{" "}
                        <Link to={character.origin.url.slice(31)}>
                          {character.origin.name}
                        </Link>{" "}
                      </li>
                    ) : (
                      <li> место рождения: неизвестно</li>
                    )}
                    {character.location ? (
                      <li>
                        {" "}
                        локация:{" "}
                        <Link to={character.location.url.slice(31)}>
                          {character.location.name}
                        </Link>{" "}
                      </li>
                    ) : (
                      <li> поиск в базе...</li>
                    )}
                  </ul>

                  <div className="char-episode-list">
                    <p
                      className="title is-5 is-bold"
                      style={{ margin: "1rem 0 0" }}
                    >
                      список эпизодов
                    </p>
                    <ul>
                      {character.episode
                        ? character.episode.map((el) => (
                            <span>
                              {" "}
                              <Link to={el.slice(31)}>
                                {" "}
                                {el.slice(40)}
                              </Link>{" "}
                            </span>
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

export default SimpleCharacter;
