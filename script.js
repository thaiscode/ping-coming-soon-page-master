let errorMessage = document.querySelector('.form__alert')
let button = document.querySelector('.email__button')


button.addEventListener('click', validation)

function validation() {
    let email = document.querySelector('#email__box')

    if (email.value == "") {

        errorMessage.innerHTML = "Whoops! It looks like you forgot to add your email"
        email.style.border = '1px solid hsl(354, 100%, 66%)'

    } else if (!email.checkValidity()) {

        errorMessage.innerHTML = "Please provide a valid email address"
        email.style.border = '1px solid hsl(354, 100%, 66%)'
        
    } 
}