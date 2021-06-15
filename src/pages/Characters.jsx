import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Preloader } from "../components/assets/Preloader";
import { Pagination } from "../components/assets/Pagination.jsx";

import CharacterList from "../components/characters/CharacterList";
import { getAllCharactersByPage } from "../api";

function Characters() {
  const id = useParams();
  console.log(id);
  console.log(useParams);

  const [character, setCharacter] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState("");

  useEffect(() => {
    getAllCharactersByPage(currentPage)
      .then((data) => {
        setCharacter(data.results);
        setMaxPage(data.info.pages);
      })
      .catch((error) => console.log("error: " + error));
  }, [currentPage, maxPage]);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        maxPage={maxPage}
      />

      {character ? <CharacterList character={character} /> : <Preloader />}

      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        maxPage={maxPage}
      />
    </>
  );
}

export { Characters };
