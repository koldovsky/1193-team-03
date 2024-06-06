document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const burger = document.querySelector('.burger');
        const mobileHeader = document.querySelector('.header-mobile');
        console.log(burger)
        burger.addEventListener('click', () => {
            mobileHeader.classList.toggle('active');
        });
    }, 1500)
});