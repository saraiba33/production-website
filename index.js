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

const main = document.createElement("main")
main.innerHTML = `
<h2 class="page-title">Welcome to Hogwarts Library</h2>
<p> We are glad you're able to visit our magical library.
Choose a book and enter a world of wonder! (Don't forget to visit our last book to find find your patronus)
</p>
`
body.append(main)

const div = document.createElement("div")
div.classList.add("catagories")
const divContent = `
    <a class="covers" href="characters.html"><img class="cover one" src="images/character-cover2.jpg" />
    </a>
    <a class="covers" href="spells.html"><img class="cover three" src="images/spells-cover2.jpg" /></a>
    <a class="covers" href="quiz.html"><img class="cover four" src="images/quiz-cover2.jpg" /></a>
    `
div.innerHTML = divContent
body.append(div)

// < a class="covers" href = "houses.html" > <img class="cover two" src="images/houses-cover4.jpg" /></a >