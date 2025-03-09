
let SectionElm = document.createElement("section")
SectionElm.classList = "showing_container"

SectionElm.innerHTML =
`
<div class="showing_div">
    <h2>Now Showing</h2>
<button class="seeMore__btn">See more</button>
</div>
`

document.querySelector("main").append(SectionElm)

/*
 * 
 * @param {string} file_path
 * @returns {string}
 */

let Section = document.createElement("section")
Section.classList = "movies_showing"

function getIdFromMovie(file_path) {
  return file_path
}

let baseUrl = "https://image.tmdb.org/t/p/w500"


let options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTJjMGNkOTU0NmEyY2M1YTY1ZWMxZDg3M2Q5M2NmOSIsIm5iZiI6MTc0MTA3MTQwMS42NjEsInN1YiI6IjY3YzZhNDI5NTc1YTE4MDViZTkwN2M4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRk-6WZYMbw01HDIu8V4VW32h5IYjDV0WTp5XEWYzlA'
    }
}


fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(data => {

    console.log(data);
    
    Section.innerHTML = data.results.map( movie => 
    ` 
<div class="movieIMG">

    <a href="#"><img src="${baseUrl}${movie.poster_path}" alt=""></a>
<h3>${movie.original_title}</h3>
<p><i class="fa-solid fa-star"></i> ${movie.vote_average}/10 IMDb</p>
</div>

    `
    
    ).join("");  
    console.log(Section);
    })
    
    document.querySelector("main").append(Section);
