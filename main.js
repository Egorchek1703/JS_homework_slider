let slides = document.querySelectorAll('.slide')
let dots = document.querySelectorAll('.dot-slide')
let preventBtn = document.querySelector('.prevent-btn')
let nextBtn = document.querySelector('.next-btn')

let slideIndex = 0

function showSlide(){
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = 'none'
    }
    for(let i=0; i<dots.length; i++){
        dots[i].classList.remove('active')
    }

    slides[slideIndex].style.display = 'block'
    dots[slideIndex].classList.add('active')
}
function checkIndex(){
    if(slideIndex >= 4){
        slideIndex = 0
    }
    if(slideIndex < 0){
        slideIndex = 3
    }
}
function increaseIndex(){
    slideIndex++
    return slideIndex
}
function reduceIndex(){
    slideIndex--
    return slideIndex
}

showSlide(slideIndex)

// listeners
preventBtn.addEventListener('click', ()=>{
    reduceIndex()
    checkIndex()
    showSlide()
})
nextBtn.addEventListener('click', ()=>{
    increaseIndex()
    checkIndex()
    showSlide()
})
for(let i=0; i<dots.length; i++){
    dots[i].addEventListener('click', (event)=>{
        slideIndex = Number(event.target.getAttribute('data-index'))
        checkIndex()
        showSlide()
        return slideIndex
    })
}