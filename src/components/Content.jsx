import React from 'react'

import Preloader from './Preloader';
import {useEffect, useState} from 'react';
import CharacterList from './CharacterList'
import {getAllCharacters} from '../api';

function Content() {


const [character, setCharacter] = useState([]);

const [currentPage, setCurrentPage] = useState(1);


const [disabledPrev, setDisabledPrev] = useState(true);
const [disabledNext, setDisabledNext] = useState(false);


useEffect(() => {

    getAllCharacters(currentPage)
  .then((data) => {
setCharacter(data.results)
    
  })

if (currentPage > 1) {
    setDisabledPrev(false)
}
if (currentPage <= 1 || currentPage > 39) {
    setDisabledPrev(true)
} 

if (currentPage >= 34) {
    setDisabledNext(true)
}

if (currentPage < 34) {
    setDisabledNext(false)
}

console.log(currentPage);
  
}, [currentPage, disabledPrev, disabledNext ])



 const prevPage = (event) => {
    setCurrentPage(currentPage - 1)
 }

 const nextPage = (event) => {
    setCurrentPage(currentPage + 1)
 }

 


console.log('page ' + currentPage);
    return (
          <div className='container-fluid general p-2'>
      

      
            <nav className="panel panel-sz">
  <p className="panel-heading">
    Быстрый поиск по вселенной
  </p>
  <div className="panel-block">
    <p className="control has-icons-left">
      <input className="input" type="search" placeholder="Введите имя персонажа, название локации, номер или название серии и нажмите ENTER"/>
      <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <p className="panel-tabs">
    
    <a href='#!' className="is-active">Персонажи</a>
    <a href='#!'>Локации</a>
    <a href='#!'>Серии</a>
    
  </p>
  {character ? <CharacterList  character={character}/>   : <Preloader />}
  
 
  
</nav>
        

<div className='pagination' >
           
               <button  className='button is-primary prev ' onClick={prevPage} disabled={disabledPrev} >Предыдущая страница</button>
                
                <progress class="progress is-primary pgb" value={currentPage} max="34" />
            
                <button  className='button  is-primary next' onClick={nextPage} disabled={disabledNext}>Следующая страница</button>
                

        </div>
       
        </div> 
    )
}

export { Content }