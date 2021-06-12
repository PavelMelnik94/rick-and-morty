import React from 'react'

export default function LocationItem({name, air_date, episode, url}) {
    return (
        
            <div className="card list-item " style={{}}>
  <div className="card-content box">
    <div className="list-item--content" style={{minHeight: '200px'}}>
      <h1 className='is-size-5'>{name}</h1>
      <h4>дата выхода: {air_date}</h4>
      <h4>эпизод: {episode} </h4>
      <hr/>
      <a href={url} className="button in-info  ">подробнее</a>
    </div>
  </div>
</div>
       
    )
}
