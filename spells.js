const body = document.querySelector("body")

const header = document.createElement("header")
header.classList.add("main-header")
const headerContent = `
    <img class="logo" src="images/hogwarts-logo.png" />
    <nav>
        <ul class="nav-bar">
            <li class="page-links"><a href="index.html">Home</a></li>
            <li class="page-links"><a href="characters.html">Characters</a></li>
            <li class="page-links"><a href="spells.html">Spells</a></li>
            <li class="page-links"><a href="quiz.html">Patronus Quiz</a></li>
        </ul>
    </nav>
    `
header.innerHTML = headerContent
body.append(header)

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
        <p>${spell.name}</p>
        <p>What does ${spell.name} do? It ${spell.use}</p>
        `)
        div.innerHTML = listOfSpells
        body.append(div)
    }
}

getSpells()