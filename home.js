let SectionElm = document.createElement("section") 
// always put outside the fetch function
SectionElm.classlist = "pokedex_main"


function (fecthPopular){

fetch("https://api.themoviedb.org/3/trending/movie/week", {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTJjMGNkOTU0NmEyY2M1YTY1ZWMxZDg3M2Q5M2NmOSIsIm5iZiI6MTc0MTA3MTQwMS42NjEsInN1YiI6IjY3YzZhNDI5NTc1YTE4MDViZTkwN2M4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRk-6WZYMbw01HDIu8V4VW32h5IYjDV0WTp5XEWYzlA'
  }
  .then (response => response.json())
  .then(data => {
  
  console.log(data);
  
  SectionElm.innerHTML = data.results.map( movie => 
  ` 
  <div class="pokemon_box">
  
  <p>${movie.person_id}</p>
  <img src="${movie.image}" alt="SHOW UP">
  </div>
  `
  
  ).join("");  
  console.log(SectionElm);
  })
})
}
fecthPopular();

/* 
let options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTJjMGNkOTU0NmEyY2M1YTY1ZWMxZDg3M2Q5M2NmOSIsIm5iZiI6MTc0MTA3MTQwMS42NjEsInN1YiI6IjY3YzZhNDI5NTc1YTE4MDViZTkwN2M4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRk-6WZYMbw01HDIu8V4VW32h5IYjDV0WTp5XEWYzlA'
    }
}

fetch(options)
.then response => response.json
.then(data => {

console.log(data);

SectionElm.innerHTML = data.results.map( => 
` 
<div class="pokemon_box">

<p>${pokemon.name}</p>
<img src="" alt="SHOW UP ${pokemon.name}">
</div>
`

).join("");  
console.log(SectionElm);
})

document.querySelector("main").append(SectionElm);


 */