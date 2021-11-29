export const createCard = photographe => {
    let tagList = ''
    photographe.tags.forEach(tag => {
        tagList += `<li><a href="./view/portfolio.html">#${tag}</a></li>`
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

    const header = `<div class="photographers__infos--portfolio">
                    <h1 class="photographers__name">${photographe.name}</h1>
                    <p class="localisation">${photographe.city}, ${photographe.country}</p>
                    <p class="mojo">${photographe.tagline}</p> 
                        <ul role=navigation class="tags photographer__tags aria-label="tags filters"">
                        ${tagList}
                        </ul>                   
                    <button class="btn__ctc--header btn__ctc">Contactez-moi</button>
                    </div>
                    <img class="photographers__portrait" src="../public/Photos/PhotographersIdPhotos/${photographe.portrait}"
                     alt="portrait du photographe">`

    return header

}

export const createPreview = media => {
    const mediapreview = (media.image || media.video)
    if (mediapreview == media.image) {
        const preview__list = `<li class="thumbnails"><a href="../public/Photos/medias/${mediapreview}"><img class="thumbnails__medias"
        src="../public/Photos/medias/${mediapreview}"></a>
        <div class="thumbnails__infos">
            <h2 class="thumbnails__heading">${media.title}</h2>
             <div class="likes-count"><span class="total">${media.likes}</span><i aria-hidden="true" class="far fa-heart heart" ></i>              
        </div>
        </li>`

        return preview__list
    }

    if (mediapreview == media.video) {
        const preview__list = `<li class="thumbnails">
        <a href="../public/Photos/medias/${mediapreview}"><video controls="" class="thumbnails__medias" src="../public/Photos/medias/${mediapreview}"></video></a>
        <div class="thumbnails__infos">
              <h2 class="thumbnails__heading">${media.title}</h2>
                 <div class="likes-count"><span class="total">${media.likes}</span><i aria-hidden="true" class="far fa-heart heart"></i>                
        </div>
        </li>`

        return preview__list

    }

}


export const tagsHandler = () => {
    const cards = document.querySelectorAll('.photographers__cards')
    const headerTags = document.querySelectorAll('.main-nav .tags li a')

    const handleFilters = (event) => {
        event.preventDefault();

        const selectedTag = document.querySelector('.selectedTag')
        const clickedTag = event.target

        // 1 - On enleve toutes les cards du dom
        for (let i = 0; i < cards.length; i += 1) {
            cards[i].style.display = "none";
        }

        // 2 - On vérifie si il n'y a pas déjà un 'selectedTag' dans la nav
        // Si oui (déjà un tag de cliqué):
        if (selectedTag !== null) {
            // On le retire
            selectedTag.classList.remove('selectedTag')
        }
        // 3 - Au click sur le tag, on rajoute la class:
        clickedTag.classList.add('selectedTag')

        // 4 - On affiche que les cards avec le meme tag que le tag cliqué

        // Pour chaque cards
        for (let i = 0; i < cards.length; i += 1) {
            const cardTags = cards[i].querySelectorAll('.tags a')

            // On recherche dans ses tags si clickedTag est présent
            for (let j = 0; j < cardTags.length; j++) {
                const tags = cardTags[j].outerText;
                // Si oui, on affiche les cards
                if (clickedTag.outerText.toLowerCase() == tags.toLowerCase()) {
                    cards[i].style.display = "block";
                }
            }
        }

        // =======
        // EXTRA
        // ======
        // Si un tag est déjà sélectionné
        if (selectedTag !== null) {
            // et si on re-click sur le même tag:
            if (selectedTag.outerText.toLowerCase() == clickedTag.outerText.toLowerCase()) {
                // la class 'selectedTag' est retirée
                clickedTag.classList.remove('selectedTag');
                // et on affiche toutes les cards
                for (let i = 0; i < cards.length; i += 1) {
                    cards[i].style.display = "block";
                }
            }
        }
    }

    headerTags.forEach((link) => link.addEventListener('click', (event) => {
        handleFilters(event)
    }));

}


export const addListenerOnHearts = () => {
    const hearts = document.querySelectorAll('.heart')
    // const allLikesCount = hearts.parentNode
    const allLikes = document.querySelectorAll('.total')
    const totalPhotographersLikes = document.querySelector('.total-likes__amount')

    let sumAllLikes 

    hearts.forEach(heart => {
        heart.addEventListener('click', (event) => {
            onClickLike(event)

            if (heart.classList.contains('fas')) {
                
                sumAllLikes = parseInt(allLikes.innerHTML, 10) - 1
                console.log(allLikes)
               
            } else {
                
                sumAllLikes = parseInt(allLikes.innerHTML, 10) + 1  
                console.log(allLikes)
            }
            
            totalPhotographersLikes.innerHTML = sumAllLikes
        

        })
    });
}

const onClickLike = (event) => {
    const heart = event.target;
    const likesCount = heart.parentNode
    const total = likesCount.querySelector('.total')
    
    let totalCount
    
    if (heart.classList.contains('fas')) {
        totalCount = parseInt(total.innerHTML, 10) - 1
       
       
    } else {
        totalCount = parseInt(total.innerHTML, 10) + 1   
        
    }
    heart.classList.toggle('fas')


    total.innerHTML = totalCount
    

}

