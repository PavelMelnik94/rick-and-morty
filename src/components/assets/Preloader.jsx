import React from 'react'

function Preloader() {
    const url = 'https://gifimage.net/wp-content/uploads/2018/11/gif-rick-et-morty-png-9.gif';
    return (
        <div>
        <img className='img-fz' src={url}  alt="preloader" />  
        </div>
    )
}


export {Preloader};