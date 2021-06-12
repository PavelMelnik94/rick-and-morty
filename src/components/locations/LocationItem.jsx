import React from 'react'

export default function LocationItem({name, type, dimension, url}) {
    return (
        
            <div className="box list-item " style={{border: '1px solid gray'}}>
  <div className=" ">
    <div className="list-item--content" style={{minHeight: '100px', textAlign: 'center'}}>
      <h1 className='is-size-5'>{name}</h1>
      
      <hr/>
      <a href={url.slice(32)} className="button is-dark  ">подробнее</a>
    </div>
  </div>
</div>
       
    )
}
