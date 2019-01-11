import React from 'react';
import './StarWars.css';

const StarWars = props => {
    return (
        <div className = 'char'>
            <div className = 'cName'>Name: {props.character.name}</div>
            <div className = 'stat'>Height: {props.character.height}</div>
            <div className = 'stat'>Mass: {props.character.mass}</div>
        </div>
    )
}

export default StarWars;