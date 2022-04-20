const body = document.querySelector("body")
const url = `http://hp-api.herokuapp.com/api/characters`
const main = document.querySelector("main")

fetch(url)
    .then(response => response.json())
    .then(parsedResponse => {
        const getCharacters = parsedResponse
            .filter(character => character.image)
        createUl(getCharacters)
    })
    .catch(error => {
        console.error(error)
    })

const ul = document.createElement("ul")
ul.classList.add("character-info")
const createUl = (getCharacters) => {
    ul.innerHTML = getCharacters.map(characters =>
        `
        <li class="card">
        <h2 class="card-name">
        ${characters.name}
        </h2>
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
    )
    main.append(ul)
}