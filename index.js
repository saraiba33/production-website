const url = `https://fedeperin-harry-potter-api-en.herokuapp.com/db`
const characterUrl = `http://hp-api.herokuapp.com/api/characters `


const getBooks = () => {
    const promises = [];
    for (let i = 1; i <= 8; i++) {
        const url = `https://fedeperin-harry-potter-api-en.herokuapp.com/books/${i}`;
        promises.push(fetch(url).then((response) => response.json()));
    }

    Promise.all(promises).then(results => {
        return results.map(books => {
            books.title
        })

    })
}

// fetch(url)
//     .then(response => {
//         return response.json()
//     }).then(parsedResponse => {
//         const bookList = parsedResponse.books.map(book => )
//         console.log(bookList)
//     })

function getCharacters() {
    fetch(`http://hp-api.herokuapp.com/api/characters`)
        .then(response => {
            return response.json()
        }).then(parsedResponse => {
            console.log(parsedResponse)
        })
}