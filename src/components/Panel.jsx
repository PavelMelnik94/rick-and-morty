import { Link } from "react-router-dom";

export default function Panel() {
    return (
            <div className='container-fluid general p-2'>
      

      
      <nav className="panel panel-sz">
<p className="panel-heading">
Быстрый поиск по вселенной
</p>
<div className="panel-block">
<p className="control has-icons-left">
<input className="input" type="search" placeholder="Введите имя персонажа, название локации, номер или название серии и нажмите ENTER"/>
<span className="icon is-left">
  <i className="fas fa-search" aria-hidden="true"></i>
</span>
</p>
</div>
<p className="panel-tabs">

<Link to='/characters' className="is-active">Персонажи</Link>
<Link to='/locations'>Локации</Link>
<Link to='/episodes'>Серии</Link>

</p>






</nav>
  

  </div> 
    )
}
