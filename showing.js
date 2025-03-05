
let SectionElm = document.createElement("section")
SectionElm.classList = "main_section"

SectionElm.innerHTML =
`
    <h2>Now Showing</h2>
<div>
<button>See more</button>
</div>
`

document.querySelector("main").append(SectionElm)