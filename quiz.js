const body = document.querySelector("body")
const url = `https://fedeperin-harry-potter-api-en.herokuapp.com/db`

const header = document.createElement("header")
header.classList.add("main-header")
const headerContent = `
    <nav>
        <ul>
            <li><a href="index.html">Home<a></li>
            <li><a href="characters.html">Characters</a></li>
            <li><a href="spells.html">Spells</a></li>
            <li><a href="quiz.html">Patronus Quiz</a></li>
        </ul>
    </nav>
    `
header.innerHTML = headerContent
body.append(header)

function characterOption() {
    fetch(url)
        .then(response => response.json())
        .then(parsedResponse => {
            const getCharacters = parsedResponse.characters
            const onlyNames = getCharacters.map(characters => characters.character)
            const formCharacterOption = [onlyNames[1], onlyNames[12], onlyNames[21]].forEach(name => console.log(name))
        })
}

function spellOption() {
    fetch(url)
        .then(response => response.json())
        .then(parsedResponse => {
            const getSpells = parsedResponse.spells
            const onlySpells = getSpells.map(spells => spells.spell)
            const SpellOption = [onlySpells[21], onlySpells[53]]

        })
}
const main = document.createElement('main')
main.classList.add("form-container")
const getOptions = `
            <form name="quiz options">
            <label for="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" Required>
            <select name="favorite-character" id="">
            </select>
            <select name="favorite-Spell" id="">
            </select>
            <input type="submit"/>
            </form>
            `
main.innerHTML = getOptions
body.append(main)



// const formContent = `
//             <form action="">
//                 <label for="full-name">Full Name</label>        
//                 <input type="text" name="full-name" id="full-name" Required>
//                 <select name="favorite-character" id="">
//                     <option value="character-names">

//                     </option>
//                 </select>
//             </form>
//             `