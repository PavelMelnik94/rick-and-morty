import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { filterCharacterById } from "../api";
import { Preloader } from "../components/assets/Preloader";
import {Link} from 'react-router-dom'

function SimpleCharacter(props) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

console.log(character);

  useEffect(() => {
    filterCharacterById(id).then((data) => setCharacter(data));
    console.log(character);
    return () => {
      console.log("unmount");
    };
  }, [id, character]);

  return (
    <>
      {!character ? (
        <Preloader />
      ) : (
        <div className="simple-char">
          <div className="card ">
            <div className="card-content box ">


                <div className='char-wrapper'>

                <div className='char-img'>
              <img src={character.image} alt="fdf" />
              </div>

            <div className='char-content'>
              <span className="title is-4 is-family-primary ">{character.name}</span>
              <ul>
                  <li>статус: {character.status}</li>
                  <li>пол: {character.gender}</li>
                  <li>измерение: {character.species}</li>
                  { character.type ? <li> тип: {character.type} </li> : null }

                  { character.origin ? <li> место рождения: <Link to={character.origin.url.slice(31)} >{character.origin.name}</Link> </li> : <li> место рождения: неизвестно</li> }
                  { character.location ? <li> локация: <Link to={character.location.url.slice(31)} >{character.location.name}</Link> </li> : <li> поиск в базе...</li> }
                  
                  
                  <li></li>
                  <li></li>
              </ul>

                <div className='char-episode-list' >
                <p className='title is-5 is-bold' style={{margin: '1rem 0 0'}}>список эпизодов</p>
                    <ul>
                    {character.episode ? character.episode.map(el => <li> <Link to={el.slice(31)}> {el}</Link> </li>) : 'загружаю...'}
                    </ul>

                </div>


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
