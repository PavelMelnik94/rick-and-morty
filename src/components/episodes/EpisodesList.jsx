import React from 'react'
import EpisodesItem from './EpisodesItem'




 function EpisodesList({episodes}) {
    return (<>
        <div className='list p-3'>
            {episodes.map((el) => {
                return <EpisodesItem key={el.id} {...el} />
            })}
        </div>

        </>
    )
}

export {EpisodesList}
