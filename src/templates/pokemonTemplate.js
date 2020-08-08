import pokemonTypeToHTML from '../interactionApi/pokemonTypes.js'

const pokemonToTemplate = (id,name,image,typesArray) => {
    const typeString = pokemonTypeToHTML(typesArray)
    const pokemonTemplate = `
    <ul class="pokemons">
        <img src="${image}" alt="${name}">
        <div class="pokemon-data-type">
            <div class="pokemon-number-name" >
                <h3>${id} </h3>
                <h4> ${name.toUpperCase()} </h4>
            </div>
            <div class="pokemon-type-wrapper" id="pokemon-type">
                ${typeString}
            </div>
        </div>
    </ul>
    `
    return pokemonTemplate
}

export default pokemonToTemplate;






