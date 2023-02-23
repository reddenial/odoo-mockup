//sticky navigation
window.onscroll = function () { stickyNav() };
var lastScrollTop = 0;

function stickyNav() {
    const doc = document.documentElement;
    let scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const header = document.getElementsByTagName('header')[0];
    const headerH = header.getBoundingClientRect().height;

    console.log(scrollTop);

    if (scrollTop > headerH) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    } 

}

//init swiper
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