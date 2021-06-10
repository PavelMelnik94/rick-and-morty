import React from 'react'
import Character from './Character'


export default function CharacterList({ character }) {
    return (<>
        <div className='character-list p-3'>
            {character.map((el) => {
                return <Character key={el.id} {...el} />
            })}
        
        </div>
        
        </>
    )
}
