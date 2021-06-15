import React, { useState, useEffect } from "react";
import s from "./Panel.module.css";

export default function Panel({cb = Function.prototype }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchCategory, setSearchCategory] = useState("character");

  const handleKey = (e) => {
    if (e.key === 'Enter') {
        cb(searchValue, searchCategory);
    }
    
};

const handleFilter = (e) => {
  setSearchCategory(e.target.dataset.type);
  
  
};

useEffect(() => {
  
}, [searchValue, searchCategory])

  const handleSubmit = () => {
    cb(searchValue, searchCategory);
};





  return (
    <div className="container-fluid general p-2">
      <nav className="panel panel-sz">
        <p className="panel-heading">Быстрый поиск</p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input 
            style={{maxWidth: '390px'}}
              className="input validate"
              placeholder='например, "Rick"'
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKey}
            />

            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
          <button className='button is-dark' style={{minWidth: '100px'}} onClick={handleSubmit}>найти</button>
        </div>
        <p className="panel-tabs ">
          <div>
            
            <p>
            <span style={{marginRight: '1rem', fontSize: '16px'}}>категория поиска:</span>
              <label className="radio">
                <input
                  className="with-gap search-category"
                  name="type"
                  type="radio"
                  data-type="character"
                  onClick={handleFilter}
                  onChange={handleFilter}
                  checked={searchCategory === "character"}
                />
                <span  activeClassName={s.active}>Персонажи</span>
              </label>

              <label className="radio">
                <input
                  className="with-gap search-category"
                  name="type"
                  type="radio"
                  data-type="location"
                  onClick={handleFilter}
                  onChange={handleFilter}
                  checked={searchCategory === "location"}
                />
                <span activeClassName={s.active}>Локации</span>
              </label>

              <label className="radio">
                <input
                  className="with-gap search-category"
                  name="type"
                  type="radio"
                  data-type="episode"
                  onClick={handleFilter}
                  onChange={handleFilter}
                  checked={searchCategory === "episode"}
                />
                <span activeClassName={s.active}>Серии</span>
              </label>
            </p>
          </div>

        </p>
      </nav>

    </div>
  );
}
