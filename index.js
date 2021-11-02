import { createCard } from './utils.js'


fetch('data.json')
    .then(data => data.json())
    .then(reponse => { 

        console.log(reponse);

        const sectionDom = document.querySelector('.photographers')
        const photographers = reponse.photographers

        for (let i = 0; i < photographers.length; i++) {            
            const card = createCard(photographers[i])
            sectionDom.innerHTML += card
        }

    })



    // const getData = async () => {
    //     const response = await fetch('./bigData.json');
    //     const json = await response.json();
    //     return json
    // }
    
    // const init = async () => {
    //     const data = await getData();
    //     const ul = document.querySelector('ul')
    
    
    //     data.photographers.forEach(photographer => {
    //         const link = `<a href='./view/portfolio.html?id=${photographer.id}'>${photographer.name}</a><br>`
    //         ul.insertAdjacentHTML('beforeend', link)
    //     });
    // }
    
    // init()