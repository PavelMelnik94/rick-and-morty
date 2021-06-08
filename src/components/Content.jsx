import React from 'react'
import CharacterList from './CharacterList'
import Preloader from './Preloader';
import {useEffect, useState} from 'react';

function Content() {

    const [loading, setLoading] = useState(true);
const [character, setCharacter] = useState([]);


useEffect(() => {

  fetch('https://rickandmortyapi.com/api/character').then((response) => response.json())
  .then((data) => {
setCharacter(data.results)
    setLoading(false)
  })

  return null;
}, [character])


    return (
        <div className='container general'>
       
       {!loading ? <CharacterList character={character}/>  : <Preloader />}
        </div>
    )
}

export { Content }