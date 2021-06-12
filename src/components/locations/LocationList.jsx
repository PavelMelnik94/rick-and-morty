import React from 'react'
import LocationItem from './LocationItem'




 function LocationList({locations}) {

    
    return (<>
        <div className='list p-3'>
            {locations.map((el) => {
                return <LocationItem key={el.id} {...el} />
            })}
        </div>

        </>
    )
}

export {LocationList}
