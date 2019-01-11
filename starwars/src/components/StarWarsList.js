import React from 'react';
import StarWars from './StarWars';

const StarWarsList = props => {
    return (
        <div>
            {props.starwarsChars.map(character =>{
                return (
                    <StarWars
                        character = {character}
                    />
                )}    
            )}
        </div>
    )
}

export default StarWarsList;