import React from 'react'

 function Header() {

    const  logo = 'http://assets.stickpng.com/images/58f37720a4fa116215a9240f.png';
    return (<>
            <nav className="navbar p-2" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="#!">
      <img src={logo} width="112" height="28" alt='logo'/>
    </a>

   
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href='#!'>
        Home
      </a>

      


        
      </div>
    </div>

    <div className="navbar-end p-2">
     
     <a className='button is-link' href='#!' type='button'> Repo</a>
    </div>
  
</nav>
<hr/>
        </>
    )
}

export default Header;
