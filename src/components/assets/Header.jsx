import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar is-dark " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink to="/">
          <h1
            className="is-size-1 nav-header"
            style={{
              padding: "0.3rem",
              color: "white",
              textTransform: "uppercase",
            }}
          >
            rick and morty
          </h1>{" "}
        </NavLink>
        
      </div>

      <div  className="navbar-menu is-active" id="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link">База данных</span>
            <div className="navbar-dropdown is-boxed  is-active">
              <NavLink className="navbar-item" to="/characters">
                Персонажи
                <span className='nav-icon'>
                <i class="fas fa-male "></i>
                </span>
              </NavLink>
              <NavLink className="navbar-item" to="/locations">
                Локации
                <span className='nav-icon'><i class="fas fa-globe-americas"></i></span>
              </NavLink>
              <NavLink className="navbar-item" to="/episodes">
                Серии
                <span className='nav-icon'><i class="fas fa-tv"></i></span>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a
                  className="button is-primary"
                  href="https://github.com/PavelMelnik94/rick-and-morty"
                >
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>Repo</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Header;
