let SectionElem = document.createElement("section")
SectionElem.classList = "popular_sec"

SectionElem.innerHTML =
`
    <h2>Popular</h2>
<div>
<button class="seeMore__btn">See more</button>
</div>
`

document.querySelector("main").append(SectionElem)