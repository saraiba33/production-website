const url = "https://hp-api.herokuapp.com/api/characters"
const main = document.querySelector("main")

fetch("https://hp-api.herokuapp.com/api/characters")
    .then(response => response.json())
    .then(parsedResponse => {
        const getCharacters = parsedResponse
            .filter(character => character.image)
        createUl(getCharacters)
    })
    .catch(errorMessage)

const ul = document.createElement("ul")
ul.classList.add("character-info")
const createUl = (getCharacters) => {
    ul.innerHTML = getCharacters.map(characters =>
        `
    <li class="card">
    <h1 class="card-name">
    ${characters.name}
    </h1>
    <img 
    class="card-image" 
    src="${characters.image}" 
    alt="${characters.name}"
    />
    <p class="card-info" id="house">
    House: ${characters.house}
    </p>
    <p class="card-info">
    Patronus: ${characters.patronus}
    </p>
    </li>
    `
    ).join('')
    main.append(ul)
}

function errorMessage() {
    const error = document.querySelector("#error")
    error.textContent = "Oh no! The magic's gone! Please try again later..."
}