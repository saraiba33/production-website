const body = document.querySelector("body")

const getSpells = () => {
    const promises = [];
    for (let i = 1; i <= 72; i++) {
        const url = `https://fedeperin-harry-potter-api-en.herokuapp.com/spells/${i}`;
        promises.push(fetch(url)
            .then((response) => response.json()));
    }
    Promise.all(promises).then((results) => {
        const allSpells = results.map((data) => ({
            name: data.spell,
            id: data.id,
            use: data.use
        }));
        createDiv(allSpells)
    });
    const div = document.createElement("div")
    div.classList.add("spells-list")
    const createDiv = (allSpells) => {
        const listOfSpells = allSpells.map(spell => `
        <p>Spell Name: ${spell.name}</p>
        <p>Use: ${spell.use}</p>
        `)
        div.innerHTML = listOfSpells
        body.append(div)
    }
}

getSpells()

const header = document.createElement("header")
header.classList.add("main-header")
const headerContent = `
    <h1>Welcome to The Wizarding World</h1>
    `
header.innerHTML = headerContent
body.append(header)