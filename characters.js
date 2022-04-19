const body = document.querySelector("body")
const url = `http://hp-api.herokuapp.com/api/characters`

const header = document.createElement("header")
header.classList.add("main-header")
const headerContent = `
    <nav>
        <ul class="nav-bar">
            <li><a href="index.html">Home<a></li>
            <li><a href="characters.html">Characters</a></li>
            <li><a href="spells.html">Spells</a></li>
            <li><a href="quiz.html">Patronus Quiz</a></li>
        </ul>
    </nav>
    `
header.innerHTML = headerContent
body.append(header)

fetch(url)
    .then(response => response.json())
    .then(parsedResponse => {
        const getCharacters = parsedResponse
            .filter(character => character.image)
            .map(character => ({
                name: character.name,
                patronus: character.patronus,
                image: character.image,
                house: character.house,
                ancestry: character.ancestry,
                dateOfBirth: character.dateOfBirth
            }))
        createMain(getCharacters)
    }).catch(error => {
        console.error(error.message)
    })




const main = document.createElement("div")
main.classList.add("character-info")
const createMain = (getCharacters) => {
    const characterList = getCharacters.map(characters => `
        <ul class="card-container">
        <li class="card">
        <img class="card-image" src="${characters.image}" alt="${characters.name}"/>
        <p class="card-name">${characters.name}</p>
        <p class="card-house">Hogwarts House:${characters.house}
        <p class "card-ancestry">Ancestry:${characters.ancestry}</p>
        <p class="card-patronus">Patronus:${characters.patronus}</p>
        </li>
        </ul>
        `).join()
    main.innerHTML = characterList
    body.append(main)
}



//Removed to use differnet API
// const getCharacters = () => {
//     const promises = [];
//     for (let i = 1; i <= 23; i++) {
//         const url = `https://fedeperin-harry-potter-api-en.herokuapp.com/characters/${i}`;
//         promises.push(fetch(url).then((response) => response.json()));
//     }

//     Promise.all(promises).then((characters) => {
//         const allCharacters = characters.map((data) => ({
//             name: data.character,
//             id: data.id,
//             image: data.image,
//             house: data.hogwartsHouse
//         }));
//         createDiv(allCharacters)
//     });