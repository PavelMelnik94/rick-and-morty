import React from 'react';
import {useEffect, useState} from 'react';

import {Preloader} from '../components/assets/Preloader';


import {getAllCharacters} from '../api';
import { Pagination } from '../components/assets/Pagination.jsx'
import Blog from './Blog'


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
  }).catch(error => console.log('error: ' + error))

  
}, [currentPage, maxPage ])





const prevPage = () => {
    setCurrentPage(currentPage - 1)
 }

 const nextPage = () => {
    setCurrentPage(currentPage + 1)
 }

 


    return (<>
          <Panel />

          
               
          
          
           {character ? <Blog  />   : <Preloader />}
           
            
           
           </>
    )
}

export { Home }