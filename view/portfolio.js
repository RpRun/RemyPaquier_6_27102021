// const getData = async () => {
//     const response = await fetch('../data.json');
//     const json = await response.json();
//     return json
// }

// const init = async() => {
//     const data = await getData()
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