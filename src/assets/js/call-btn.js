if (document.querySelector('.header__contacts-call')) {
    document.querySelector('.header__contacts-call').addEventListener('click', function () {
        document.querySelector('.call-menu').classList.toggle('open');
    })
}