const body = document.querySelector("body")
const url = `https://fedeperin-harry-potter-api-en.herokuapp.com/db`
const selectOne = document.querySelector(".character-select")
const selectTwo = document.querySelector(".spell-select")
const form = document.querySelector("form");



function characterOption() {
    fetch(url)
        .then(response => response.json())
        .then(parsedResponse => {
            const getCharacters = parsedResponse.characters
            const onlyNames = getCharacters.map(characters => characters.character).filter((name, index) => [1, 12, 21].includes(index)).map(name => {
                const option = document.createElement("option")
                option.classList.add("character-options")
                option.textContent = name
                option.value = name
                return option
            }).forEach(option =>
                selectOne.append(option)
            )

        }).catch(error => {
            console.error(error.message)
        })
}

characterOption()


function spellOption() {
    fetch(url)
        .then(response => response.json())
        .then(parsedResponse => {
            const getSpells = parsedResponse.spells
            const onlySpells = getSpells
                .map(spells => spells.spell)
                .filter((spell, index) => [21, 53]
                    .includes(index))
                .map(name => {
                    const option = document.createElement("option")
                    option.classList.add("spell-options")
                    option.textContent = name
                    option.value = name
                    return option
                }).forEach(option =>
                    selectTwo.append(option)
                )
        }).catch(error => {
            console.error(error.message)
        })
}
spellOption()

function getInputs() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name")
        const selection1 = formData.get("character-select");
        const selection2 = formData.get("spell-select");

        console.log(selection1, selection2, name)
            // if (selection1 === "Luna Lovegood" && selection2 === "Expecto Patronum") {
            //     console.log(`${name} here is your Patronus`)
            // } else if (selection1 === "Hermione Jean Granger" && selection2 === "Expulso") {
            //     console.log(`${name} I can't find it`)
            // }
            // } else if (selection1 === "Hermione Jean Granger" && selection2 === "Exp") {

        // } else if (selection1 === "Hermione Jean Granger" && selection2 === "Expecto Patronum") {

        // } else if (selection1 === "Hermione Jean Granger" && selection2 === "Expecto Patronum") {

        // } else(selection1 === "Hermione Jean Granger" && selection2 === "Expecto Patronum") {

        // }
    })
}