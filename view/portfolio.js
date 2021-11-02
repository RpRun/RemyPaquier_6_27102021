import { createPage } from '../utils.js'


fetch('../data.json')
    .then(data => data.json())
    .then(reponse => { 

        console.log(reponse);

        const sectionDom = document.querySelector('.photographers__name')
        const photographers = reponse.photographers

        for (let i = 0; i < photographers.length; i++) {            
            const page = createPage(photographers[i])
            sectionDom.innerHTML += page
        }

    })



// const createPage = async () => {
//     const response = await fetch('../data.json');
//     const json = await response.json();
//     return json
// }

// const init = async() => {
//     const data = await createPage()
//     const h1 = document.querySelector('.photographers__name')

//     // RECUPERATION DES DONNEES A AFFICHER
//     const queryString = window.location.search
//     const urlParams = new URLSearchParams(queryString)
//     const urlId = urlParams.get('id')

//     data.photographers.forEach(photographer => {
//         if (photographer.id == urlId) {
//             h1.innerHTML = photographer.name
//         }
//     });
    
// }

// init()