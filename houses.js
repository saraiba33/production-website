const body = document.querySelector("body")
const header = document.createElement("header")
header.classList.add("main-header")
const headerContent = `
    <h1>Houses</h1>
    `
header.innerHTML = headerContent
body.append(header)

function getGryffindor() {
    fetch(`http://hp-api.herokuapp.com/api/characters`)
        .then(response => response.json())
        .then(parsedResponse => {
            const getFounder = parsedResponse
                .find(founder => founder.name === 'Godric Gryffindor')
            const p = document.createElement("p");
            p.textContent = getFounder.name
            body.append(p);
        })
}

getGryffindor()

function getRavenClaw() {
    fetch(`http://hp-api.herokuapp.com/api/characters`)
        .then(response => response.json())
        .then(parsedResponse => {
            const getFounder = parsedResponse
                .find(founder => founder.name === 'Rowena Ravenclaw')
            const p = document.createElement("p");
            p.textContent = getFounder.name
            body.append(p);
        })
}

getRavenClaw()


function getHufflepuff() {
    fetch(`http://hp-api.herokuapp.com/api/characters`)
        .then(response => response.json())
        .then(parsedResponse => {
            const getFounder = parsedResponse
                .find(founder => founder.name === 'Helga Hufflepuff')
            const p = document.createElement("p");
            p.textContent = getFounder.name
            body.append(p);
        })
}

getHufflepuff()


function getSlytherin() {
    fetch(`http://hp-api.herokuapp.com/api/characters`)
        .then(response => response.json())
        .then(parsedResponse => {
            const getFounder = parsedResponse
                .find(founder => founder.name === 'Salazar Slytherin')
            const p = document.createElement("p");
            p.textContent = getFounder.name
            body.append(p);
        })
}

getSlytherin()