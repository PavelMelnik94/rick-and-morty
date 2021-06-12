import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'


export default function LocationItem({name, air_date, episode, url, characters}) {

const [value, setValue ] = useState(true);

const toggler = () => {
  setValue(!value)
}
    return (
        
            <div className="card list-item " style={{ border: '1px solid black'}}>
  <div className="card-content box">
    <div className="list-item--content" style={{minHeight: '200px'}}>
      <h1 className='is-size-5'>{name}</h1>
      <h4>дата выхода: {air_date}</h4>
      <h4>эпизод: {episode} </h4>
      
      
      <a onClick={() => toggler()} href='#!'  className="button is-dark 
"> список персонажей</a>

{
  value ? null : (
    <div className='toggler-list'>
    <ul>
      {characters.map(listItem => <li> <Link to={listItem.slice(31)} >{listItem.slice(42)} </Link></li>)}
  </ul>
  </div>
  )
}
  









    </div>
  </div>
</div>
       
    )
}
