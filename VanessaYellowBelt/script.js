let addToCartbutton = document.querySelectorAll(".product__atc");
let cartNumber = document.querySelector("#cart_number");
let linuxButton = document.querySelectorAll(".showLinuxSupport");
let updatedNumber = 0;

// //ATC
addToCartbutton.forEach(function (button) {
  button.addEventListener("click", function () {
    updatedNumber = updatedNumber + 1;
    alert("Item added to cart");
    cartNumber.textContent = updatedNumber;
  });
});

//Linux
linuxButton.forEach(function (button) {
  button.addEventListener("click", function () {
    alert("This game is supported on linux");
  });
});

//Slider
let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
