import React from 'react';
import './StarWars.css';

const StarWars = props => {
    return (
        <div className = 'char'>
            <div>Name: {props.character.name}</div>
            <div>Height: {props.character.height}</div>
            <div>Mass: {props.character.mass}</div>
        </div>
    )
}

export default StarWars;