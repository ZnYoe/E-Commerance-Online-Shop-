// Mobile menu action 
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    } )
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    } )
}


// transition-page-from-single-pro
const proItem = document.querySelectorAll(".pro");
proItem.forEach(item => {
    item.addEventListener("click" , () => {
        
    })
})


// single img action 
const mainImg = document.querySelector("#mainImg");
const smallImg = document.querySelectorAll(".smallImg");

smallImg.forEach(img => {
    img.addEventListener("click", () => {
        mainImg.src = img.src;
    })
})

