import React from 'react';

export const Card = props =>(
    <div className="card">
        <a href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`} target="_blank" rel="noreferrer">
            <img className="img-size" alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}/>
            <h2 className="nombre-pokemon">{props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}</h2>
        </a>
    </div>
);