

const pokemonTypeToHTML = (typesArray) => {
    const typeToString = typesArray.map(type =>{
        let htmlTemplate = `<div class="pokemon-type ${type}" id="pokemon-type">${type}</div>`
        return htmlTemplate
    }).join('')
    return typeToString
};

export default pokemonTypeToHTML;