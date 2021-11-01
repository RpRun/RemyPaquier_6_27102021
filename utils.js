export const createCard = photographe => {
    let tagList = ''
    photographe.tags.forEach(tag => { 
        tagList += `<li><a href="">#${tag}</a></li>`
        
    });

const card = `<div class="photographers__cards">
<a href="./view/portfolio.html?photographerId=${photographe.id}" class="links__portfolio">
    <img class="photographers__portrait"
        src="./public/Photos/PhotographersIdPhotos/${photographe.portrait}" alt="">
    <h2 class="photographers__name">${photographe.name}</h2>
</a>
<div class="photographers__infos">
    <p class="localisation">${photographe.city}</p>
    <p class="mojo">${photographe.tagline}</p>
    <p class="cost">${photographe.price}</p>
</div>
<div class="filters" role="navigation" aria-label="tags filters">
    <ul class="tags" >
    <ul>${tagList}</ul>
    </ul>
</div>
</div>`

return card

}