import { NavLink } from "react-router-dom";
import s from './Panel.module.css';

export default function Panel() {




    return (
            <div className='container-fluid general p-2'>
      

      
      <nav className="panel panel-sz">
<p className="panel-heading">
Сортировка по категориям
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

{/* <NavLink id='1' to='/'    >Блог</NavLink> */}
<NavLink id='2' to='/characters' activeClassName={s.active} >  Персонажи</NavLink>
<NavLink id='3' to='/locations'  activeClassName={s.active} >Локации</NavLink>
<NavLink id='4' to='/episodes'  activeClassName={s.active} >Серии</NavLink>

</p>






</nav>
  

  </div> 
    )
}
