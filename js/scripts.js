

console.log('hello');

const swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});