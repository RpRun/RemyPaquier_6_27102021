


    import {
        createHeader
    } from '../utils.js'
    
    const getData = async () => {
        const response = await fetch('../data.json');
        const json = await response.json();
        return json
    }
    
    const init = async () => {
        const data = await getData()
        
        // RECUPERATION DES DONNEES A AFFICHER
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const urlId = urlParams.get('photographerId')
    
        data.photographers.forEach(photographer => {
            if (photographer.id == urlId) {
                const sectionHeader = document.querySelector('.header__portfolio--wrapper')
                const header = createHeader(photographer)
                sectionHeader.innerHTML += header
    
            }
            console.log(urlId)
        });
    
    }
    
    init()