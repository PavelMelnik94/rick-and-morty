import React, { useEffect, useState } from "react";

export default function Pagination({
  currentPage = Number,
  nextPage = Function.prototype,
  prevPage = Function.prototype,
  maxPage = Number,
}) {
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  useEffect(() => {
    if (currentPage > 1) {
      setDisabledPrev(false);
    }
    if (currentPage <= 1) {
      setDisabledPrev(true);
    }

    if (currentPage >= maxPage) {
      setDisabledNext(true);
    }

    if (currentPage < maxPage) {
      setDisabledNext(false);
    }
  }, [maxPage, currentPage]);

  const handlePrevPage = () => {
    return prevPage();
  };

  const handleNextPage = () => {
    return nextPage();
  };

  return (
    <div className="pagination">
      <button
        className="button is-dark prev "
        onClick={() => handlePrevPage()}
        disabled={disabledPrev}
      >
        назад
      </button>

      <div className="progress-container">
        <progress
          class="progress is-dark pgb"
          value={currentPage}
          max={maxPage}
        />
        <span>
          {currentPage} / {maxPage}
        </span>
      </div>

      <button
        className="button  is-dark next"
        onClick={() => handleNextPage()}
        disabled={disabledNext}
      >
        вперед
      </button>
    </div>
  );
}
