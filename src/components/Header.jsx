import React from 'react'
import { NavLink } from "react-router-dom";

 function Header() {

    const  logo = 'https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/1024/morty-icon.png';
    return (<>
            <nav className="level mt-3">
  
  <div className="level-item has-text-centered">
    <NavLink to='/' ><h1 className='is-size-1'>Rick and Morty</h1></NavLink>
  </div>
  
</nav>
<hr/>
        </>
    )
}

export default Header;
