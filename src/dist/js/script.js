const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const back = document.querySelector('.fa-circle-arrow-up');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle("is-active")
    menu.classList.toggle("menu-active")
});

window.addEventListener("scroll",function(){
    windowPosition = window.scrollY > 300;
    back.classList.toggle('btn-active',windowPosition);

    hamburger.classList.remove('is-active')
    menu.classList.remove('menu-active')
});