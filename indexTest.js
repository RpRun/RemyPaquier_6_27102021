
    let tagList = ''
photographe.tags.forEach(tag => {
    tagList += `<li><a href="./view/portfolio.html">#${tag}</a></li>`
});

const cards = document.querySelectorAll('.photographers__cards')
console.log(cards);

const taggedLinks = document.querySelectorAll('.tags li > a')
console.log(taggedLinks);


const handleFilters = (event) => {
    event.preventDefault();
    for (let i=0;i<cards.length;i+=1) {
    cards[i].style.display = "none";
}
    
}

taggedLinks.forEach((link) => link.addEventListener('click', handleFilters));