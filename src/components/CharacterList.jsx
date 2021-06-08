import React from 'react'
import Character from './Character'

export default function CharacterList({ character }) {
    return (
        <div className='character-list'>
            {character.map((el) => {
                return <Character {...el} />
            })}
        
        </div>
    )
}
