// const tagList = document.querySelectorAll('.tags')
/*tagList.querySelectorAll is not a function
    at index.js:30*/
    const cards = document.querySelectorAll('.photographers__cards')
    console.log(cards);
    
    const taggedLinks = document.querySelectorAll('.tags li > a')
    console.log(taggedLinks);
    
    const handleFilters = (event) => {
        event.preventDefault();
        cards.style.display = "none";
        
    }
    
    taggedLinks.forEach((link) => link.addEventListener('click', handleFilters));

    let tagList = ''
photographe.tags.forEach(tag => {
    tagList += `<li><a href="./view/portfolio.html">#${tag}</a></li>`
});