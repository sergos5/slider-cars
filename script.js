'use strict'

const slides = document.querySelectorAll('.slide')

const clearActivClasses = () => {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        clearActivClasses()
        slide.classList.add('active')
    })
})

console.log(slides);
