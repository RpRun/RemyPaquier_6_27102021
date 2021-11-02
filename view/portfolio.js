// import { createHeader } from '../utils.js'


// fetch('../data.json')
//     .then(data => data.json())
//     .then(reponse => { 

//         console.log(reponse);

//         const sectionDom = document.querySelector('.header__portfolio--wrapper')
//         const photographers = reponse.photographers

//         for (let i = 0; i < photographers.length; i++) {            
//             const header = createHeader(photographers[i])
//             sectionDom.innerHTML += header
//         }

    // })



const createHeader = async () => {
    const response = await fetch('../data.json');
    const json = await response.json();
    return json
}

const init = async() => {
    const data = await createHeader()
    const h1 = document.querySelector('.photographers__name')
    const localisation = document.querySelector('.localisation')

    // RECUPERATION DES DONNEES A AFFICHER
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const urlId = urlParams.get('id')

    data.photographers.forEach(photographer => {
        if (photographer.id == urlId) {
            h1.innerHTML = photographer.name
            localisation.innerHTML = photographer.city


        }
    });
    
}

init()
