//js for the sidebar navigation
let mobileIcon = document.querySelector('.mobile-menu');
let closeBtn = document.querySelector('.icon-close');
let menu = document.querySelector(".nav-desktop");

mobileIcon.onclick = function () {
  menu.classList.add("active");
  
}

closeBtn.onclick = function() {
  menu.classList.remove("active");

}

//js for the slide
let slideIndex = 1;
showSlides(slideIndex);

//next/previous control buttons
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//image controls 
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1){ 
    slideIndex = slides.length;
  }
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//js for the counter
let positiveSign = document.querySelector(".positive-sign");
let negativeSign = document.querySelector(".negative-sign");
let numberOfOrder = document.querySelector(".number");
let cart = document.querySelector(".icon-cart");
let cartBox = document.querySelector(".cart-box");
let addToCartBtn = document.querySelector(".add-to-cart");
let numberMultiplication = document.querySelector(".number-mul");
let totalAmount = document.querySelector(".number-total-amount");
let deletIcon = document.querySelector(".icon-delete");
let cartFull = document.querySelector(".cart-full");
let cartText = document.querySelector(".cart-text-p");
let amountNotification = document.querySelector(".amount-notification");



numberOfOrder.innerText = 0;
numberMultiplication.innerText = 0;
negativeSign.addEventListener("click", ()=> {
  if (numberOfOrder.innerText === "0") return;
  numberOfOrder.innerText -= 1; 
});

positiveSign.addEventListener("click", ()=> {
  numberOfOrder.innerText -= -1;
});

cart.addEventListener("click", ()=> {
  cartBox.classList.toggle("show");
});

deletIcon.addEventListener("click", ()=> {
  cartFull.style.display = "none";
  cartText.style.display = "block";

  amountNotification.style.display = "none";
});

addToCartBtn.onclick = function() {
  if (numberOfOrder.innerText === "0") {
    cartFull.style.display = "none";
    cartText.style.display = "block";
    amountNotification.style.display = "none";
  }
  else {
  cartFull.style.display = "block";
  cartText.style.display = "none";

  numberMultiplication.innerText = numberOfOrder.innerText;

  let sum1;
  sum1 = numberOfOrder.innerText * 125.00;
  totalAmount.innerText = "$" + sum1.toFixed(2);
  numberMultiplication.innerText = numberOfOrder.innerText;

  let sum2;
  sum2 = numberOfOrder.innerText * 125.00;
  totalAmount.innerText = "$" + sum2.toFixed(2);

  amountNotification.style.display = "block";
  amountNotification.innerText = numberOfOrder.innerText;
  }
}

//script for the lightbox

function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
document.getElementById("myModal").style.display = "none";
}

let index = 1;
showSlide(index);

//next and previous controls
function plusSide(n) {
showSlide(index += n);
}

//Thumbnail image controls

function current(n) {
showSlide(index = n)
}

function showSlide(n) {
let i;
let slide = document.getElementsByClassName("mySlide");
var dots = document.getElementsByClassName("demo");
var predots = document.getElementsByClassName("demo1");
var slided = document.getElementsByClassName("mySlided");
if(n > slide.length) {
  index = 1;
}
if(n > slided){ 
  index = 1;
}
if(n < 1) {
  index = slide.length;
}
if(n < 1) {
  index = slided.length;
}
for (i = 0; i < slide.length; i++) {
  slide[i].style.display = "none";
  slided[i].style.display = "none";
}
for (i = 0; i < dots.length; i ++) {
  dots[i].className = dots[i].className.replace(" activate", "");
}
for (i = 0; i < predots.length; i ++) {
  predots[i].className = predots[i].className.replace(" activity", "");
}
slide[index-1].style.display = "block";
slided[index-1].style.display = "block";
dots[index-1].className += " activate";
predots[index-1].className += " activity";
}