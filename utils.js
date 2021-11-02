export const createCard = photographe => {
    let tagList = ''
    photographe.tags.forEach(tag => { 
        tagList += `<li><a href="">#${tag}</a></li>`
        
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

export const createPage = photographe => {
    let tagList = ''
    photographe.tags.forEach(tag => { 
        tagList += `<li><a href="">#${tag}</a></li>`
        
    });

    const page = `<div class="photographer-page-wrapper">
    <header class="header__portfolio">
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
    </header>
    <main>
        
        <section class="preview">
            <ul class="preview__list">
                <li class="thumbnails"><a href=""><img class="thumbnails__img"
                            src="../public/Photos/Mimi/Animals_Rainbow.jpg" alt=""></a>
                    <div class="thumbnails__infos">
                        <h2 class="thumbnails__heading">Arc-en-ciel</h2>
                        <div class="likes-count">12 <img class="heart" src="../public/icones/like-filled.svg" alt="coeur"></div>
                    </div>
                </li>
                <li class="thumbnails"><a href=""><img class="thumbnails__img"
                            src="../public/Photos/Mimi/Travel_Lonesome.jpg" alt=""></a>
                    <div class="thumbnails__infos">
                        <h2 class="thumbnails__heading">Arc-en-ciel</h2>
                        <div class="likes-count">12 <img class="heart" src="../public/icones/like-filled.svg" alt="coeur"></div>
                    </div>
                </li>
                <li class="thumbnails"><a href=""><img class="thumbnails__img"
                            src="../public/Photos/Mimi/Event_SeasideWedding.jpg" alt=""></a>
                    <div class="thumbnails__infos">
                        <h2 class="thumbnails__heading">Arc-en-ciel</h2>
                        <div class="likes-count">12 <img class="heart" src="../public/icones/like-filled.svg" alt="coeur"></div>
                    </div>
                </li>
                <li class="thumbnails"><a href=""><img class="thumbnails__img"
                            src="../public/Photos/Mimi/Portrait_Background.jpg" alt=""></a>
                    <div class="thumbnails__infos">
                        <h2 class="thumbnails__heading">Arc-en-ciel</h2>
                        <div class="likes-count">12 <img class="heart" src="../public/icones/like-filled.svg" alt="coeur"></div>
                    </div>
                </li>
                <li class="thumbnails"><a href=""><img class="thumbnails__img"
                            src="../public/Photos/Mimi/Event_SeasideWedding.jpg" alt=""></a>
                    <div class="thumbnails__infos">
                        <h2 class="thumbnails__heading">Arc-en-ciel</h2>
                        <div class="likes-count">12 <img class="heart" src="../public/icones/like-filled.svg" alt="coeur"></div>
                    </div>
                </li>
                <li class="thumbnails"><a href=""><img class="thumbnails__img"
                            src="../public/Photos/Mimi/Portrait_Wednesday.jpg" alt=""></a>
                    <div class="thumbnails__infos">
                        <h2 class="thumbnails__heading">Arc-en-ciel</h2>
                        <div class="likes-count">12 <img class="heart" src="../public/icones/like-filled.svg" alt="coeur"></div>
                    </div>
                </li>

            </ul>
            <div class="likes-price">
                    <div class="total-likes">297 081<img class="heart" src="../public/icones/like-filled.svg" alt="coeur"></div>
                    <div class="cost-by-day">300€/jour</div>
                
            </div>

        </section>
        <button class="fixed-contact modal-btn">Contactez-moi</button>
    </main>


</div>`

return page    


}
