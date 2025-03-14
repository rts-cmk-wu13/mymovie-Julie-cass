
let SecElm = document.createElement("section")
SecElm.classList = "popular_title"

SecElm.innerHTML =
`
<div class="showing_div">
    <h2>Popular</h2>
<button class="seeMore__btn">See more</button>
</div>
`

document.querySelector("main").append(SecElm)


let Elm = document.createElement("section")
Elm.classList = "popular_movies"

/* let genreTags = "";

for(i in genres){
    genreTags+= `<a href="${'https://api.themoviedb.org/3/genre/movie/list'}">${genres[i].name}</a>`; // Add genre link in the href
} */

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
.then(res => res.json())
  .then(Data => {

    console.log(Data);
    
    Elm.innerHTML = Data.results.map( popular => 
    ` 
<article class="popular">
<div class="popIMG">
    <a href="#"><img class="popularIMG" src="${baseUrl}${popular.poster_path}" alt=""></a>
    </div>
    
    <div class="popTXT">
<h3>${popular.title}</h3>
<p><i class="fa-solid fa-star"></i> ${popular.vote_average}/10 IMDb</p>
<p>${popular.genre_ids}</p>

</div>
</article>

    `
    
    ).join("");  
    console.log(Elm);
    })
    
    document.querySelector("main").append(Elm);
