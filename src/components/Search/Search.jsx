import { useState, useEffect } from "react";

import { getAllCategory } from "../../api";


import Panel from "./Panel/Panel";
import ResultList from "./ResultList";

function Search() {
  const [searchingResult, setSearchingResult] = useState([]);
  const [category, setCategory] = useState("character");
  const [value, setValue] = useState("");

  const [data, setData] = useState([]);

  const handleSearch = (searchValue, searchCategory) => {
    setCategory(searchCategory);
    setValue(searchValue);
  };

  useEffect(() => {
    getAllCategory(category).then((resp) => {
      setData(resp.results);
      console.log("get запрос" + {category});
    });
  }, [category]);

  useEffect(() => {
    setSearchingResult(
      data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [data, value]);

  return (
    <>
      <Panel cb={handleSearch} />

      {!searchingResult.length ? (
        'ничего не найдено'
      ) : (
        <ResultList searchResult={searchingResult} id={data.id} category={category} />
      )}
    </>
  );
}

export { Search };
