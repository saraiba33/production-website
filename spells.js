const body = document.querySelector("body")


const getSpells = () => {
    const promises = [];
    for (let i = 1; i <= 72; i++) {
        const url = `https://fedeperin-harry-potter-api-en.herokuapp.com/spells/${i}`;
        promises.push(fetch(url)
            .then((response) => response.json()));
    }
    Promise.all(promises).then((results) => {
        const allSpells = results.map((data) => ({
            name: data.spell,
            id: data.id,
            use: data.use
        }));
        createMain(allSpells)
    });
    const main = document.createElement("main")
    main.classList.add("spells-list")
    const createMain = (allSpells) => {
        main.innerHTML = allSpells.map(spell => `
        <div class="spell-container">
        <h2 class="spell-title">${spell.name}</h2>
        <p>What does ${spell.name} do?</p>
        <p> ${spell.use}</p>
        </div>
        `)
        body.append(main)
    }
}

getSpells()