import React from 'react'

export default function Character(props) {

    const {name, image, status, species, location, gender, episode, url} = props;
    return (
        <div className=' '>
            <div className="card character">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={image} alt="Placeholderimage"/>
    </figure>
  </div>
  <div className="card-content ">
  <div className="character-content ">
        <p className="title is-4 ">{name}</p>
        <p className="subtitle is-6 ">Status: {status}</p>
        <p className="subtitle is-6">gender: {gender}</p>
        <p className="subtitle is-6">species: {species}</p>
        <p className="subtitle is-6">location: <a href={location.url}>{location.name}</a> </p>
        <a href={url} className="button in-info">подробнее</a>
        
      </div>
      
    
  </div>
</div>
        </div>
    )
}
