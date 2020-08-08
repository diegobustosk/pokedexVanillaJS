
const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/';

const fetchingPokemon = async (id) => {
    const pokemonData = await fetch(`${POKEMON_API}${id}`);
    const pokemon = await pokemonData.json();
    return pokemon;
};


export default fetchingPokemon;