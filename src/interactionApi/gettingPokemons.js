import fetchingPokemon from './fetchingAPI.js';
import pokemonToTemplate from '../templates/pokemonTemplate.js'



const gettingPokemon = (totalPokemons, pokemonList) => {
    let pokemonArray = []
    let total = totalPokemons
    for(let i = 1 ; i < total + 1 ; i++){
        pokemonArray.push(fetchingPokemon(i))
    }
    
    Promise.all(pokemonArray)
        .then(pokemons =>{        
            const pokemonString =  pokemons.map( pokemon => {
                let id = pokemon.id
                let name = pokemon.name
                let image = pokemon.sprites.front_default
                let types = pokemon.types
                let typesArray = []
            
                for (let i = 0; i < types.length; i++) {
                    const type = types[i].type.name;
                    typesArray.push(type)
                }

                
                return pokemonToTemplate(id, name, image, typesArray)

            }).join('')
            pokemonList.innerHTML = pokemonString
        })

}

export default gettingPokemon;
