import React from "react";
import { useEffect, useState } from "react";

import { Pagination } from "../components/assets/Pagination.jsx";
import { Preloader } from "../components/assets/Preloader";

import { getAllEpisodesByPage } from "../api";
import { EpisodesList } from "../components/episodes/EpisodesList";

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState("");

  useEffect(() => {
    getAllEpisodesByPage(currentPage)
      .then((data) => {
        setEpisodes(data.results);
        setMaxPage(data.info.pages);
      })
      .catch((error) => console.log("error: " + error));
  }, [currentPage, episodes, maxPage]);
  console.log(episodes);

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

      {episodes ? <EpisodesList episodes={episodes} /> : <Preloader />}

      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        maxPage={maxPage}
      />
    </>
  );
}
