let sec = document.createElement("section")
sec.classList = "footerElm"

sec.innerHTML =
    `
<nav>
    <ul>
        <li>
            <a href=""><i class="fa-solid fa-film"></i></a>
        </li>  
         <li>
            <a href=""><i class="fa-solid fa-ticket"></i></a>
         </li> 
        <li>
            <a href=""><i class="fa-regular fa-bookmark"></i></a>
        </li>
    </ul>
</nav>
`

document.querySelector("footer").append(sec)