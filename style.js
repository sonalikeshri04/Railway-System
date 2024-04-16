const wrappers = document.querySelector('.wrapper1');
const loginlLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrappers.classList.add('active');
});

loginlLink.addEventListener('click',()=>{
    wrappers.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrappers.classList.remove('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrappers.classList.remove('active-popup');
});

