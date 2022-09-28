const loginForm = document.querySelector("header .overlay.form");
const loginBtn = document.querySelector("#login-btn");
const cartPage = document.querySelector('header .overlay.cart')
const cartBtn = document.querySelector('#cart-btn')

loginBtn.onclick = function () {
  loginForm.classList.toggle('active')
}
cartBtn.onclick = function () {
  cartPage.classList.toggle('active')
}