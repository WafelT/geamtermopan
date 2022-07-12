document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileClose = document.querySelector('.mobile-menu__close');
    const body = document.body;
    
    burger.addEventListener("click", (e) => {
        mobileMenu.classList.toggle('open');
    });

    mobileClose.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
    })
});