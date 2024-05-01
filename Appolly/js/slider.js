// let next_btn = document.querySelector('.slider_btn_right')
// let prev_btn = document.querySelector('')
const sampleSlider = new Swiper('.sample-slider', {
    // if navigation(arrows) is needed
    navigation: {
        nextEl: ".slider_btn_right",
        prevEl: ".slider_btn_left",
    },
    // if pagination(dots) is needed
    pagination: {
        el: '.swiper-pagination',
    },
    centeredSlides: true,
    loop: true,
    slidesPerView: 5,
    centeredSlides: true,
    clickable: true,
})

// const slider = () => {
//     console.log(12)
// }

// next_btn.addEventListener('click', () => {
//     console.log(1)
//     slider()
// })