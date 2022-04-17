const body = document.querySelector("body")
const url = `http://hp-api.herokuapp.com/api/characters`

const header = document.createElement("header")
header.classList.add("main-header")
const headerContent = `
    <nav>
        <ul>
            <li><a href="index.html">Home<a></li>
            <li><a href="characters.html">Characters</a></li>
            <li><a href="houses.html">Houses</a></li>
            <li><a href="quiz.html">What's your Patronus?</a></li>
        </ul>
    </nav>
    `
header.innerHTML = headerContent
body.append(header)

function getCharactersWithImages() {
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
                    wand: character.wand,
                    ancestry: character.ancestry,
                    dateOfBirth: character.dateOfBirth
                }))
            createDiv(getCharacters)
        })




    const div = document.createElement("div")
    div.classList.add("character-images")
    const createDiv = (getCharacters) => {
        const characterImages = getCharacters.map(characters => `
        <img class="character-image" src="${characters.image}" alt="${characters.name}"/>
        <p>${characters.name}</p>
        <p>${characters.house}</p>
        `)
        div.innerHTML = characterImages
        body.append(div)
    }
}


getCharactersWithImages()


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