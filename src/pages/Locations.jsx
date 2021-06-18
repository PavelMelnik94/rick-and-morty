import { useEffect, useState } from "react";

import LocationList from "../components/locations/LocationList";
import Pagination from "../components/assets/Pagination.jsx";
import Preloader from "../components/assets/Preloader";

import { getAllLocationByPage } from "../api";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState("");

  useEffect(() => {
    getAllLocationByPage(currentPage)
      .then((data) => {
        setLocations(data.results);
        setMaxPage(data.info.pages);
      })
      .catch((error) => console.log("error: " + error));
  }, [currentPage, locations]);

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

      {locations ? <LocationList locations={locations} /> : <Preloader />}

      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        maxPage={maxPage}
      />
    </>
  );
}
