'use strict'

const sliderBlock = document.querySelector('.container')
const slides = document.querySelectorAll('.slide')

const clearActivClasses = () => {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}




// autoPlay - автопролистывание слайдов
let count = 0;
let interval;

let autoPlay = () => {
    interval = setInterval(()=> {
        if (count>=slides.length) {
            count = 0
        };
        clearActivClasses();
        slides[count].classList.add('active');
        count++;        
    }, 2000)
}

sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.container')) {              
        clearInterval(interval)
    }
}, true);

sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.container')) {               
        autoPlay()
    }
}, true);


slides.forEach((slide, num) => {
    slide.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
           clearActivClasses() 
        } else {
            clearActivClasses()
            slide.classList.add('active')
            count = num+1
        }        
    })
})

autoPlay()
