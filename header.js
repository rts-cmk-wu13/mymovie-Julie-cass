
let sectionElm = document.createElement("section")
sectionElm.classList = "home_title"

sectionElm.innerHTML =
`
<div class="title_column">
    <h1>MyMovies</h1>
        <input type="checkbox" id="check" name="check">
    </div>
`

document.querySelector("header").append(sectionElm)