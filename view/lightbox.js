class Lightbox {

    static init() {
        const links = document.querySelectorAll('a[href$=".mp4"], a[href$=".jpg"], a[href$=".jpeg"]')
        links.forEach(link => link.addEventListener('click', e =>
         {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute('href'))
            
            
        }))
        console.log(links)
        
    }
    // /**
    //  * @param {string} url URL de l'image
    //  */

    constructor (url) {
        const element = this.buildDom(url)
        document.body.appendChild(element)

    }
    // /**
    // //  * @param {string} url URL de l'image
    // //  * @return {HTMLElement}
    //  */

    buildDom (url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `<button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container">
            <img src="${url}" alt="">
        </div>`
        return dom
    }

    
}


 /*

 <div class="lightbox">
        <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container">
            <img src="https://picsum.photos/900/1800" alt="">
        </div>
    </div>

*/

Lightbox.init()
