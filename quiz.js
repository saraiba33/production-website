const url = "https://fedeperin-harry-potter-api-en.herokuapp.com/db"
const selectOne = document.querySelector(".character-select")
const selectTwo = document.querySelector(".spell-select")
const form = document.querySelector("form")
const responseDiv = document.querySelector("#response")

function characterOptions() {
    fetch(url)
        .then(response => response.json())
        .then(parsedResponse => {
            parsedResponse.characters
                .map(characters => characters.character)
                .filter((name, index) => [1, 12, 21]
                    .includes(index))
                .map(name => {
                    const option = document.createElement("option")
                    option.classList.add("character-options")
                    option.textContent = name
                    option.value = name
                    return option
                })
                .forEach(option => selectOne.append(option))
        })
        .catch(errorMessage)
}

characterOptions()


function spellOptions() {
    fetch(url)
        .then(response => response.json())
        .then(parsedResponse => {
            parsedResponse.spells
                .map(spells => spells.spell)
                .filter((spell, index) => [21, 53]
                    .includes(index))
                .map(name => {
                    const option = document.createElement("option")
                    option.classList.add("spell-options")
                    option.textContent = name
                    option.value = name
                    return option
                })
                .forEach(option => selectTwo.append(option))
        })
        .catch(errorMessage)
}
spellOptions()

function getInputs() {
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const name = formData.get("name")
        const selectedCharacter = formData.get("character-select")
        const selectedSpell = formData.get("spell-select")

        localStorage.setItem("name", name)
        localStorage.setItem("character-select", selectedCharacter)
        localStorage.setItem("spell-select", selectedSpell)

        const userName = localStorage.getItem("name")
        const div = document.createElement("div")
        div.classList.add("name-return")
        div.textContent = `${userName}, here is your Patronus!`
        form.remove()
        responseDiv.append(div)
        const userCharacter = localStorage.getItem("character-select")
        const userSpell = localStorage.getItem("spell-select")
        const img = document.createElement("img")
        img.classList.add("patronus-image")
        if (userCharacter === "Hermione Jean Granger" &&
            userSpell === "Expecto Patronum") {
            img.src = "images/otter.jpg"
            responseDiv.append(img)
        } else if (userCharacter === "Hermione Jean Granger" &&
            userSpell === "Expulso") {
            img.src = "images/stag.jpg"
            responseDiv.append(img)
        } else if (userCharacter === "Luna Lovegood" &&
            userSpell === "Expecto Patronum") {
            img.src = "images/Rabbit.jpg"
            responseDiv.append(img)
        } else if (userCharacter === "Luna Lovegood" &&
            userSpell === "Expulso") {
            img.src = "images/doe.jpg"
            responseDiv.append(img)
        } else if (userCharacter === "Lord Voldemort" &&
            userSpell === "Expecto Patronum") {
            img.src = "images/wolf.jpg"
            responseDiv.append(img)
        } else if (userCharacter === "Lord Voldemort" &&
            userSpell === "Expulso") {
            img.src = "images/dog.jpg"
            responseDiv.append(img)
        }
    })
}
getInputs()

function errorMessage() {
    const error = document.querySelector("#error")
    form.remove()
    error.textContent = "Oh no! The magic's gone! Please try again later..."
}