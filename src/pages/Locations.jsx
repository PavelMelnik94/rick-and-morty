import React from 'react'
import {useEffect, useState} from 'react';
import { Pagination } from '../components/assets/Pagination.jsx'
import {Preloader} from '../components/assets/Preloader';
import {getAllLocationByPage} from '../api';
import Panel from '../components/Search/Panel/Panel';
import {LocationList} from '../components/locations/LocationList'


export default function Locations() {
    const [locations, setLocations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState('');

   

useEffect(() => {
  getAllLocationByPage(currentPage)
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
