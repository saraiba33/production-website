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
            const getFounder = parsedResponse.find(founder => founder.name === 'Godric Gryffindor')
            console.log(getFounder)
        })
}

getGodric()

function getRavenClaw() {
    fetch(`http://hp-api.herokuapp.com/api/characters`)
        .then(response => response.json())
        .then(parsedResponse => {
            const getFounder = parsedResponse.find(founder => founder.name === 'Rowena Ravenclaw')
            console.log(getFounder)
        })
}

getRavenClaw()


function getHufflepuff() {
    fetch(`http://hp-api.herokuapp.com/api/characters`)
        .then(response => response.json())
        .then(parsedResponse => {
            const getFounder = parsedResponse.find(founder => founder.name === 'Helga Hufflepuff')
            console.log(getFounder)
        })
}

getHufflepuff()


function getGodric() {
    fetch(`http://hp-api.herokuapp.com/api/characters`)
        .then(response => response.json())
        .then(parsedResponse => {
            const getFounder = parsedResponse.find(founder => founder.name === 'Salazar Slytherin')
            console.log(getFounder)
        })
}

getGodric()