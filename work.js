let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginFrom.classList.remove('active');
    navbar.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginFrom.classList.remove('active');
    navbar.classList.remove('active');
}
let loginFrom = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>{
    loginFrom.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar= document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    loginFrom.classList.remove('active');
}
window.onscroll=()=>{
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    loginFrom.classList.remove('active');
    navbar.classList.remove('active');
}