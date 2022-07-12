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