const url = `http://hp-api.herokuapp.com/api/characters`
const body = document.querySelector("body")

const header = document.createElement("header")
header.classList.add("main-header")
const headerContent = `
    <h1>Houses</h1>
    `
header.innerHTML = headerContent
body.append(header)

const main = document.createElement("main")
main.innerHTML = `
<h2>Hogwarts Houses</h2>
<p>Hogwarts was founded by two wizards and two witches
At some point in the tenth century, four of the greatest witches and wizards 
that ever lived founded Hogwarts School of Witchcraft and Wizardry. Their 
names were Godric Gryffindor, Rowena Ravenclaw, Helga Hufflepuff and Salazar 
Slytherin. As The Sorting Hat told us, their reason for doing so was because 
they had the ‘selfsame yearning, to make the world’s best magic school’, and 
once they did, each created their own house to represent a personality and 
skill that they wanted to nurture. Gryffindor students embodied bravery and 
chivalry; Ravenclaw, intelligence and wit; Hufflepuff, loyalty and fair play; 
and Slytherin, the values of being sly and cunning.
</p>
`
body.append(main)

const ul = document.createElement("ul")
ul.classList.add("house-list")
ul.textContent = ''
body.append(ul)



function getGryffindor() {
    fetch(url)
        .then(response => response.json())
        .then(parsedResponse => {
            const getFounder = parsedResponse
                .find(founder => founder.name === 'Godric Gryffindor')
            const li = document.createElement("li")
            li.innerHTML = `
            <a href=""><img src="images/gryffindor.webp" /></a>
            <p>${getFounder.name}</p>
            `
            ul.append(li)
        })
}

getGryffindor()

function getRavenClaw() {
    fetch(url)
        .then(response => response.json())
        .then(parsedResponse => {
            const getFounder = parsedResponse
                .find(founder => founder.name === 'Rowena Ravenclaw')
            const li = document.createElement("li")
            li.innerHTML = `
            <a href=""><img src="images/ravenclaw.webp" /><a>
            <p>${getFounder.name}</p>
            `
            ul.append(li)
        })
}

getRavenClaw()


function getHufflepuff() {
    fetch(url)
        .then(response => response.json())
        .then(parsedResponse => {
            const getFounder = parsedResponse
                .find(founder => founder.name === 'Helga Hufflepuff')
            const li = document.createElement("li")
            li.innerHTML = `
            <a href=""><img src="images/hufflepuff.webp" /></a>
            <p>${getFounder.name}</p>
            `
            ul.append(li)
        })
}

getHufflepuff()


function getSlytherin() {
    fetch(url)
        .then(response => response.json())
        .then(parsedResponse => {
            const getFounder = parsedResponse
                .find(founder => founder.name === 'Salazar Slytherin')
            const li = document.createElement("li")
            li.innerHTML = `
            <a href=""><img src="images/slytherin.webp" /></a>
            <p>${getFounder.name}</p>
            `
            ul.append(li)
        })
}

getSlytherin()