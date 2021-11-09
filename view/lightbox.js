class Lightbox {

  /**
     * 
     * @param {String} url URL de l'image
     */
   constructor(url) {
    const element = this.buildDom(url)
    document.body.appendChild(element)
}

/**
 * @init initialisation de la lightbox
 */
static init() {
    const links = document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
    links.forEach(link => link.addEventListener('click', e => {
        e.preventDefault()
        new Lightbox(e.currentTarget.getAttribute('href'))
        
    }))
    
    console.log(links)
}

/**
/* @param {string} url URL de l'image
/* @return {HTMLElement}
 */
buildDom(url) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.innerHTML = `<button class="lightbox__close">Fermer</button>
    <button class="lightbox__next">Suivant</button>
    <button class="lightbox__prev">Précédent</button>
    <div class="lightbox__container">
    <div class="lightbox__loader"></div>       
    </div>`
    return dom
}  


}


Lightbox.init()