import { createCard } from './utils.js'


fetch('data.json')
    .then(data => data.json())
    .then(reponse => { 

        console.log(reponse);

        const sectionDom = document.querySelector('.photographers__list')
        const photographers = reponse.photographers

        for (let i = 0; i < photographers.length; i++) {            
            const card = createCard(photographers[i])
            sectionDom.innerHTML += card
        }

    })

    // const getData = async () => {
    //     const response = await fetch('./data.json');
    //     const json = await response.json();
    //     return json
    // }
    
    // const init = async () => {
    //     const data = await getData();
    //     const ul = document.querySelector('.photographers__list')
    
    
    //     data.photographers.forEach(photographer => {
    //         const link = `<li class="photographers__cards"><a href='./view/portfolio.html?id=${photographer.id}'>${photographer.name}</a></li>`
            
    //         ul.insertAdjacentHTML('beforeend', link)
    //     });
    // }
    
    // init()
  