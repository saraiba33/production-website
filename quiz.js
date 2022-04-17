const body = document.querySelector("body")
const url = `http://hp-api.herokuapp.com/api/characters`

const header = document.createElement("header")
header.classList.add("main-header")
const headerContent = `
    <nav>
        <ul>
            <li><a href="index.html">Home<a></li>
            <li><a href="characters.html">Characters</a></li>
            <li><a href="houses.html">Houses</a></li>
            <li><a href="quiz.html">What's your Patronus?</a></li>
        </ul>
    </nav>
    `
header.innerHTML = headerContent
body.append(header)