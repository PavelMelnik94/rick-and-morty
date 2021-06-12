import React from 'react'
import {useEffect, useState} from 'react';
import { Pagination } from '../components/assets/Pagination.jsx'
import {Preloader} from '../components/assets/Preloader';
import {getAllLocations} from '../api';
import Panel from '../components/Panel';
import {LocationList} from '../components/locations/LocationList'


export default function Locations() {
    const [locations, setLocations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState('');

   

useEffect(() => {
    getAllLocations(currentPage)
    .then((data) => {
  setLocations(data.results)
  setMaxPage(data.info.pages)
      
    }).catch(error => console.log('error: ' + error))

}, [currentPage, locations, maxPage])



const prevPage = () => {
    setCurrentPage(currentPage - 1)
 }

 const nextPage = () => {
    setCurrentPage(currentPage + 1)
 }



    return (
        
            <>
          <Panel />

          <Pagination 
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          maxPage={maxPage}
          
           />
               
          
          
           {locations ? <LocationList  locations={locations}/>   : <Preloader />}
            
           <Pagination 
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          maxPage={maxPage}
          
           />



           </>
        
    )
}
