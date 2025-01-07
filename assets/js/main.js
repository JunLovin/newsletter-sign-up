const emailInput = document.querySelector('input[type="email"]')
const emailInputMobile = document.querySelector('.emailMobile')
const errorMobile = document.querySelector('.errorMobile')
const newsletterMobile = document.querySelector('.newsletter-mobile')
const thanksMobile = document.querySelector('.thanks-message-mobile')
let emailValue
const btn = document.getElementById('subscribeBtn')
const btnMobile = document.getElementById('subscribeBtnMobile')
const error = document.getElementById('error')
const firstScreen = document.getElementById('first')
const secondScreen = document.getElementById('second')
const spanEmail = document.getElementById('spanEmail')
const spanEmailMobile = document.querySelector('.spanEmailMobile')

const checkEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        error.style.display = 'none'
    } else {
        error.style.display = 'block';
        emailInput.style.borderColor = 'rgb(255, 0, 0)'
        emailInput.style.backgroundColor = 'hsl(0,100%,95%)'
        emailInput.style.color = 'rgb(255, 0, 0)'
    }
}

btn.addEventListener('click', () => {
    emailValue = emailInput.value
    checkEmail(emailValue)
    console.log(emailValue)
    if (error.style.display === 'none') {
        firstScreen.style.display = 'none'
        secondScreen.style.display = 'flex'
        if (secondScreen.style.display = 'flex') {
            spanEmail.innerHTML = emailValue
            spanEmail.style.fontWeight = 'bold'
        }
    }
})

btnMobile.addEventListener('click', () => {
    emailValue = emailInputMobile.value
    console.log(emailValue)
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        errorMobile.style.display = 'none'
        if (errorMobile.style.display === 'none') {
            newsletterMobile.style.display = 'none'
            thanksMobile.style.display = 'flex'
            spanEmailMobile.innerHTML = emailValue
            spanEmailMobile.style.fontWeight = 'bold'
        }
    } else {
        errorMobile.style.display = 'block';
        emailInputMobile.style.borderColor = 'rgb(255, 0, 0)'
        emailInputMobile.style.backgroundColor = 'hsl(0,100%,95%)'
        emailInputMobile.style.color = 'rgb(255, 0, 0)'
    }
})