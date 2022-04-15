const body = document.querySelector("body")

const getCharacters = () => {
    const promises = [];
    for (let i = 1; i <= 23; i++) {
        const url = `https://fedeperin-harry-potter-api-en.herokuapp.com/characters/${i}`;
        promises.push(fetch(url).then((response) => response.json()));
    }

    Promise.all(promises).then((results) => {
        const allCharacters = results.map((data) => ({
            name: data.character,
            id: data.id,
            image: data.image,
            house: data.hogwartsHouse
        }));
        createDiv(allCharacters)
    });


    const div = document.createElement("div")
    div.classList.add("character-images")
    const createDiv = (allCharacters) => {
        const characterImages = allCharacters.map(characters => `
        <img class="character-image" src="${characters.image}" alt="${characters.name}"/>
        <p>${characters.name}</p>
        <p>${characters.house}</p>
        `)
        div.innerHTML = characterImages
        body.append(div)
    }
}

getCharacters()

const header = document.createElement("header")
header.classList.add("main-header")
const headerContent = `
    <h1>Characters</h1>
    `
header.innerHTML = headerContent
body.append(header)