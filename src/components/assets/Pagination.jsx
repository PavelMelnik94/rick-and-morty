import React, {useEffect, useState} from "react";

function Pagination({currentPage = Number, nextPage = Function.prototype, prevPage = Function.prototype, maxPage = Number}) {
  
  
  

  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  

  useEffect(() => {


    
    if (currentPage > 1) {
      setDisabledPrev(false)
  }
  if (currentPage <= 1 ) {
      setDisabledPrev(true)
  } 
  
  if (currentPage >= maxPage) { 
      setDisabledNext(true)
  }
  
  if (currentPage < maxPage) {
      setDisabledNext(false)
    }
  }, [maxPage, currentPage])




  const handlePrevPage = () => {
    return prevPage()
 }

 const handleNextPage = () => {
    return nextPage()
 }

  return (
    <div className="pagination">
      <button
        className="button is-primary prev "
        onClick={() => handlePrevPage()}
        disabled={disabledPrev}
      >
        Предыдущая страница
      </button>

      <progress class="progress is-primary pgb" value={currentPage} max={maxPage} />

      <button
        className="button  is-primary next"
        onClick={()=> handleNextPage() }
        disabled={disabledNext}
      >
        Следующая страница
      </button>
    </div>
  );
}


export { Pagination };