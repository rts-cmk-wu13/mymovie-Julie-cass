
let sectionElm = document.createElement("section")
sectionElm.classList = "home_title"

sectionElm.innerHTML =
`
    <h1>MyMovies</h1>
    <div>
        <input type="checkbox" id="check" name="check">
    </div>
`

document.querySelector("header").append(sectionElm)