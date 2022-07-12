
if (document.querySelector('.benefits__slider')) {
    let benefitsSlider = new Swiper(".benefits__slider", {
        slidesPerView: "auto",
        spaceBetween: 24,
        grabCursor: true,
    });
}
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
if (document.querySelector('.header__contacts-call')) {
    document.querySelector('.header__contacts-call').addEventListener('click', function () {
        document.querySelector('.call-menu').classList.toggle('open');
    })
}
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelectorAll('.contact-form');
    if (contactForm) {
        contactForm.forEach(function(form) {
            const formPhone = form.querySelector('[data-validate-field="tel"]');
            const formName = form.querySelector('[data-validate-field="name"]');
        
            const formAllInput = form.querySelectorAll('[data-validate-field]');
            const contactFormSubmitBtn = form.querySelector('.contact-form-submit');
            const formPolicyCheckbox = form.querySelector('.contact-form__wrapper-form-policy input');
            
            // let regx = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
            
            formAllInput.forEach(function(item) {
                item.addEventListener('focus', function() {
                    item.parentElement.classList.remove('g-input-error');
                    item.parentElement.classList.remove('policy-error');
                })
    
                inputEl = item.querySelector('input');
                item.addEventListener('blur', onInputBlur);
    
                function onInputBlur(inputEl) {
                    if(inputEl.target && inputEl.target.value) {
                        inputEl.target.parentElement.classList.add('input--filled');
                    } else {
                        inputEl.target.parentElement.classList.remove('input--filled');
                    }
                }
            });
        
            if (formPolicyCheckbox) {
                formPolicyCheckbox.addEventListener('change', function() {
                    if(this.checked) {
                        formPolicyCheckbox.parentElement.classList.remove('policy-error');
                    }
                });
            }

            if (contactFormSubmitBtn) {
                contactFormSubmitBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    let errCount = 0;
        
                    if(formName) {
                        if (formName.value.length === 0) {
                            formName.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formName.parentElement.classList.remove('g-input-error') }
                    } 

                    if(formPhone) {
                        if (formPhone.value.length < 15 || formPhone.value.length >= 24 || formPhone.value.length === 0) { // SET MIN/MAX COUNT OF NUMBERS IN PHONE NUMBER
                            formPhone.parentElement.classList.add('g-input-error');
                            errCount++;
                        } else { formPhone.parentElement.classList.remove('g-input-error') }
                    } 

                    if(formPolicyCheckbox) {
                        if (formPolicyCheckbox.checked == false) {
                            errCount++;
                            formPolicyCheckbox.parentElement.classList.add('policy-error');
                        } else { formPolicyCheckbox.classList.remove('policy-error') }
                    } 
        
                    if (errCount === 0) {
                        // CODE HERE WILL SEND AJAX REQUEST FOR ALL FORMS BY DEFAULT
                        alert('SEND AJAX REQUEST FOR ALL FORMS BY DEFAULT');
                    }
                });
            }
        })
    }
});
const tels = document.querySelectorAll("input[type=\"tel\"]");

if (tels) {
    tels.forEach(el => {
        IMask(el, { mask: "+ {0} (000) 000 00 000 00" });
    });
}
const observer = lozad('.lozad', {
    loaded: function(img) {
        img.addEventListener('load', function() {
            img.classList.add('loaded');
        });
        
        if(img.hasAttribute('data-background-image')) {
            img.classList.add('loaded');
        };
    },
});


observer.observe();
if (document.querySelectorAll('.modal')) {
    const allModal = document.querySelectorAll('.modal');
    const allModalBtns = document.querySelectorAll('[data-modal-btn]');

    allModalBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            let btnModalTag = btn.getAttribute('data-modal-btn');
            allModal.forEach(function(modal) {
                if (modal.getAttribute('data-modal') === btnModalTag) {
                    modal.classList.toggle('open');
                    document.querySelector('body').classList.toggle('m-hidden');
                }
            });
        });
    })

    allModal.forEach(function(modal) {
        const closeBtn = modal.querySelectorAll('.modal-close-btn');
        closeBtn.forEach(function(btn) {
            btn.addEventListener('click', function() {
                modal.classList.remove('open');
                document.querySelector('body').classList.toggle('m-hidden');
            });
        })
    });
}
if (document.querySelector('.partners__slider')) {
    let partnersSlider = new Swiper(".partners__slider", {
        slidesPerView: "auto",
        grabCursor: true,
        spaceBetween: 40,
    });
}
const smoothLinks = document.querySelectorAll('a[href^="#"]');
if (smoothLinks) {
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    
            if (id === "#") return
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
}
if (document.querySelectorAll('.messenger-widget')) {
    document.querySelectorAll('.messenger-widget').forEach(function(widget) {
        const btn = widget.querySelector('.messenger-widget__btn');
        btn.addEventListener('click', function() {
            widget.classList.toggle('active');
        })
    })
}