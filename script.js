'use strict'

const slides = document.querySelectorAll('.slide')

const clearActivClasses = () => {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}


// autoPlay - автопролистывание слайдов
/* let count = 0

let autoPlay = setInterval(()=> {
    clearActivClasses();
    slides[count].classList.add('active');
    count++;
    if (count>=slides.length) {
        count = 0
    };
}, 3000)  */



slides.forEach(slide => {
    slide.addEventListener('click', () => {
        clearActivClasses()
        slide.classList.add('active')
    })
})


