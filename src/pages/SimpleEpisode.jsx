import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEpisodeById } from "../api";
import { Preloader } from "../components/assets/Preloader";
import {Link} from 'react-router-dom'
import {useHistory} from "react-router-dom";

function SimpleEpisode(props) {
  const { id } = useParams();
  const [episode, setEpisode] = useState([]);

  const {goBack} = useHistory();

  useEffect(() => {
    getEpisodeById(id).then((data) => setEpisode(data));
    return () => {
      console.log("unmount");
    };
  }, [id]);

  return (
    <>
      {!episode ? (
        <Preloader />
      ) : (
        <div className="simple-char">
          <div className="card ">
            <div className="card-content box ">


                <div className='char-wrapper'>


            <div className='char-content'>
              <button className='button is-black' onClick={goBack}> Назад</button>
              <h1 className='is-size-5'>{episode.name ? episode.name : 'загружаем..'}</h1>
      <h4>дата выхода: {episode.air_date ? episode.air_date : 'загружаем...'}</h4>
      <h4>эпизод: {episode.episode ? episode.episode : 'загружаем..'}  </h4>
        <h4 className='subtitle'> список персонажей:</h4>
        <ul>
            {episode.characters ? episode.characters.map( listItem => <Link to={`/character/${listItem.slice(42)}`} > <li> {listItem.slice(42)}  </li> </Link> ) : <Preloader /> }
        </ul>

        <button className='button is-black' onClick={goBack}> Назад</button>
              </div>

              </div>


            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SimpleEpisode;
