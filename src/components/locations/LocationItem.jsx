import React from 'react'

export default function LocationItem({name, type, dimension, url}) {
    return (
        
            <div className="card list-item" style={{}}>
  <div className="card-content box">
    <div className="list-item--content" style={{minHeight: '200px'}}>
      <h1 className='is-size-5'>{name}</h1>
      <h4>тип: {type}</h4>
      <h4>измерение: {dimension === 'unknown' ? 'нет информации' : dimension}</h4>
      <hr/>
      <a href={url} className="button in-info  ">подробнее</a>
    </div>
  </div>
</div>
       
    )
}
