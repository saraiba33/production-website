const body = document.querySelector("body")
const url = "https://fedeperin-harry-potter-api-en.herokuapp.com/spells"


fetch(url)
    .then(response => response.json())
    .then(parsedResponse => {
        const main = document.createElement("main")
        main.classList.add("spells-list")
        main.innerHTML = parsedResponse.map(spells => `
        <div class="spell-container">
        <h2 class="spell-title">${spells.spell}</h2>
        <p>What does ${spells.spell} do?</p>
        <p> ${spells.use}</p>
        </div>
        `).join('')
        body.append(main)
    })
    .catch(errorMessage)

function errorMessage() {
    const error = document.querySelector("#error")
    error.textContent = "Oh no the magic is gone! "
}