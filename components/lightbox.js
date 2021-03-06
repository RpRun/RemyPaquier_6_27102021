/**
 * @property {HTMLElement} element
 * @property {String[]} images chemins des images de la lightbox
 * @property {String} url Image actuellement affichée
 */
 class Lightbox {


    /**
     * 
     * @param {String} url URL de l'image
     * @param {String[]} images chemins des images de la lightbox
     */
    constructor(url, images) {
        this.element = this.buildDom(url)
        this.images = images
        this.loadMedia(url)
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }
    
    
    /**
     * @init initialisation de la lightbox
     */
    static init() {
        const links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]'))
        const media = links.map( link => link.getAttribute('href'))
        links.forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute('href'), media)
        }))
    }
    
    
    /**
     * 
     * @param {String} url URL de l'image
     */
    loadMedia (url) { 
        this.url = null
        const image = new Image();      
        const container = this.element.querySelector('.lightbox__container')
        const loader = document.createElement('div')      
        loader.classList.add('lightbox__loader')
        container.innerHTML = ''
        container.appendChild(loader)
        
        // si c'est une image
        if(url.includes('.jpg')) {
            image.onload = () => {
                image.setAttribute('alt', '')
                container.removeChild(loader)
                container.appendChild(image)
                this.url = url
            }
            image.src = url
        }
        else {
            // sinon on fabrique une video
            const video = document.createElement('video')
            video.setAttribute('controls', true)            
            video.classList.add('lightbox__video')
            container.removeChild(loader)
            container.appendChild(video)
            this.url = url
            video.src = url
        }
    }
    
    
    /**
     * 
     * @param {KeyboardEvent} e 
     */
    onKeyUp (e) {
        if (e.key === 'Escape') {
            this.close(e)
        } else if (e.key === 'ArrowLeft') {
            this.prev(e)
        } else if (e.key === 'ArrowRight') {
            this.next(e)
        }    
    }
    
    
    /**
     * Ferme la lightbox
     * @param {MouseEvent|KeyboardEvent} e 
     */
    close (e) {
        e.preventDefault()
        this.element.classList.add('fadeout')
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element)       
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp)
    
    }
    
    /**
     * 
     * @param {MouseEvent|KeyboardEvent} e 
     */
    next (e)  {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url)
        if (i === this.images.length -1) {
            i = -1
        }
        this.loadMedia(this.images [i + 1])
    }
    
    
    /**
     * 
     * @param {MouseEvent|KeyboardEvent} e 
     */
     prev (e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url)
        if (i === 0) {
            i = this.images.length
        }
        this.loadMedia(this.images [i - 1])
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
            <div class="lightbox__container"></div>`
        dom.querySelector('.lightbox__close').addEventListener('click',
        this.close.bind(this))
        dom.querySelector('.lightbox__next').addEventListener('click',
        this.next.bind(this))
        dom.querySelector('.lightbox__prev').addEventListener('click',
        this.prev.bind(this))
        return dom
    }  
    
    }
    
    Lightbox.init()

    