import React from 'react'
import { NavLink } from "react-router-dom";

 function Header() {

  

    const  logo = 'https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/1024/morty-icon.png';
    return (
            <nav class="navbar is-dark">
  <div class="navbar-brand">
  <NavLink to='/' ><h1 className='is-size-1' style={{padding: '0.3rem', color: 'white', fontWeight: 'bold'}}>Rick and Morty base</h1></NavLink>
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          
          <p class="control">
            <a class="button is-primary" href="https://github.com/PavelMelnik94/rick-and-morty">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              <span>Repo</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  

</nav>
        
    )
}

export default Header;
