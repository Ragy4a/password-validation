'use strict';

const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');


function checkPassword() {
    const buttonContainer = document.querySelector('.button-container');
    const errorPar = document.querySelector('.error-window');
    if (password.value !== passwordConfirmation.value) {
        buttonContainer.style.marginTop = '1px'
        errorPar.style.display = 'block';
    } else {
        buttonContainer.style.marginTop = '50px'
        errorPar.style.display = 'none';
    }
}
password.addEventListener('change', checkPassword);
passwordConfirmation.addEventListener('change', checkPassword);