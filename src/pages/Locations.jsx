// import React from 'react'
// import {useEffect, useState} from 'react';
// import { Pagination } from '../components/assets/Pagination.jsx'
// import {Preloader} from '../components/assets/Preloader';
// import {getAllLocations} from '../api';
// import {Panel}

// export default function Locations() {
//     const [locations, setLocations] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [maxPage, setMaxPage] = useState('');

// useEffect(() => {
//     getAllLocations(currentPage)
//     .then((data) => {
//   setLocations(data.results)
//   setMaxPage(data.info.pages)
      
//     })



    
// }, [currentPage, locations, maxPage])


//     return (
//         <div>
//             <>
//           <Panel />

//           <Pagination 
//           disabledPrev={disabledPrev}
//           disabledNext={disabledNext}
//           currentPage={currentPage}
//           nextPage={nextPage}
//           prevPage={prevPage}
//            />
               
          
          
//            {character ? <CharacterList  character={character}/>   : <Preloader />}
            
//             <Pagination
//           disabledPrev={disabledPrev}
//           disabledNext={disabledNext}
//           currentPage={currentPage}
//           nextPage={nextPage}
//           prevPage={prevPage}
//            />
//            </>
//         </div>
//     )
// }
