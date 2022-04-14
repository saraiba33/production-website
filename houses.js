const body = document.querySelector("body")
const header = document.createElement("header")
header.classList.add("main-header")
const headerContent = `
    <h1>Welcome to The Wizarding World</h1>
    `
header.innerHTML = headerContent
body.append(header)