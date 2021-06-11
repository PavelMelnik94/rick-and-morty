import React from 'react';
import {useEffect, useState} from 'react';

import {Preloader} from '../components/assets/Preloader';

import CharacterList from '../components/characters/CharacterList';
import {getAllCharacters} from '../api';
import { Pagination } from '../components/assets/Pagination.jsx'



import Panel from '../components/Panel';


function Home() {


const [character, setCharacter] = useState([]);


const [currentPage, setCurrentPage] = useState(1);
const [maxPage, setMaxPage] = useState('');




useEffect(() => {

    getAllCharacters(currentPage)
    
  .then((data) => {
setCharacter(data.results)
setMaxPage(data.info.pages)
    console.log(maxPage);
    console.log(currentPage);
  })

  
}, [currentPage, maxPage ])





const prevPage = () => {
    setCurrentPage(currentPage - 1)
 }

 const nextPage = () => {
    setCurrentPage(currentPage + 1)
 }

 


    return (<>
          <Panel />

          <Pagination 
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          maxPage={maxPage}
          
           />
               
          
          
           {character ? <CharacterList  character={character}/>   : <Preloader />}
            
            <Pagination
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          maxPage={maxPage}
           />
           </>
    )
}

export { Home }