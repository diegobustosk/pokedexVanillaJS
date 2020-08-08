import gettingPokemon from './interactionApi/gettingPokemons.js';

const pokemonList = document.getElementById('pokemon-list')

console.log(pokemonList)

const total = 50;

gettingPokemon(total, pokemonList)




