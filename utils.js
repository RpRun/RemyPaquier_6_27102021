export const createCard = photographe => {
    let tagList = ''
    photographe.tags.forEach(pouet => { 
        tagList += `<li><a href="lalala">#${pouet}</a></li>`
        
    });

    const card = `<li class="photographers__cards">
    <a href="./view/portfolio.html?photographerId=${photographe.id}" class="links__portfolio">
        <img class="photographers__portrait"
            src="./public/Photos/PhotographersIdPhotos/${photographe.portrait}" alt="portrait du photographe">
        <h2 class="photographers__name">${photographe.name}</h2>
    </a>
    <div class="photographers__infos">
        <p class="localisation">${photographe.city}</p>
        <p class="mojo">${photographe.tagline}</p>
        <p class="cost">${photographe.price}€/jour</p>
    </div>
    <div class="filters" role="navigation" aria-label="tags filters">
        <ul class="tags">${tagList}</ul>  
    </div>
    </li>`

return card

}

export const createHeader = photographe => {
    let tagList = ''
    photographe.tags.forEach(tag => { 
        tagList += `<li><a href="">#${tag}</a></li>`
        
    });

    const header = `<header class="header__portfolio">
        <a class="home-page-link" href="../index.html">
            <img class="logo" src="../public/icones/logo.png" alt="Fisheye Home page"></a>
        <div class="header__portfolio--wrapper">
            <div class="photographers__infos--portfolio">
                <h1 class="photographers__name">${photographe.name}</h1>
                <p class="localisation">${photographe.city}, ${photographe.country}</p>
                <p class="mojo">${photographe.tagline}</p> 
                    <ul role=navigation class="tags photographer__tags aria-label="tags filters"">
                    ${tagList}
                    </ul>                   
                <button class="header-contact modal-btn">Contactez-moi</button>
            </div>

            <img class="photographers__portrait" src="../public/Photos/PhotographersIdPhotos/${photographe.portrait}"
                alt="portrait du photographe">
        </div>
        <div class="dropdown-wrapper">
            <span>Trier par </span>
            <nav class="sortBy" aria-label="Trier par">
                <ul id="menubar" role="menubar" aria-label="Trier par">
                    <li><a role="menuitem" aria-haspopup="true" aria-expanded="false" href="#" tabindex="0">
                            Popularité</a>
                    </li>
                    <li><a role="menuitem" aria-haspopup="true" aria-expanded="false" href="#" tabindex="-1">
                            Date</a>
                    </li>
                    <li><a role="menuitem" aria-haspopup="true" aria-expanded="false" href="#" tabindex="-1">
                            Titre</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>`

return header    


}
