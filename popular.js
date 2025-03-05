let SectionElem = document.createElement("section")
SectionElem.classList = "popular_sec"

SectionElem.innerHTML =
`
    <h2>Popular</h2>
<div>
<button>See more</button>
</div>
`

document.querySelector("main").append(SectionElem)