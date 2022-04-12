const url = `https://fedeperin-harry-potter-api-en.herokuapp.com/db`
const body = document.querySelector("body")

// function addHeader() {

// }

// addHeader()

function addMainContent() {
    const header = document.createElement("header")
    header.classList.add("main-header")
    const headerContent = `
    <h1>Welcome to The Wizarding World</h1>
    `
    header.innerHTML = headerContent
    body.append(header)
    const div = document.createElement("div")
    div.classList.add("catagories")
    const divContent = `
    <a class="covers" href="characters.html"><img class="cover one" src="images/character-cover2.jpg" />
    </a>
    <a class="covers" href="houses.html"><img class="cover two" src="images/house-cover2.jpg" /></a>
    <a class="covers" href="spells.html"><img class="cover three" src="images/spells-cover2.jpg" /></a>
    <a class="covers" href="quiz.html"><img class="cover four" src="images/quiz-cover2.jpg" /></a>
    `
    div.innerHTML = divContent
    body.append(div)
}
addMainContent()




fetch(url)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {

    })


















// function getCharacters() {
//     fetch(`http://hp-api.herokuapp.com/api/characters`)
//         .then(response => {
//             return response.json()
//         }).then(parsedResponse => {
//             console.log(parsedResponse)
//         })
// }