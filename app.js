/* Minus and Plus item */
const plusBtn = document.querySelector(".plus-icon");
const minusBtn = document.querySelector(".minus-icon");
const displayNum = document.querySelector(".number-item");

let num = 0;

plusBtn.addEventListener("click", () => {
  num += 1;
  displayNum.textContent = num;
});

minusBtn.addEventListener("click", () => {
  if (num > 0) {
    num -= 1;
    displayNum.textContent = num;
  } else {
    displayNum.textContent = 0;
  }
});

/* Add to cart */
const addCartBtn = document.querySelector(".add-cart");
const topCartNum = document.querySelector("#topActionCartNum");
let total = 0;
addCartBtn.addEventListener("click", () => {
  topCartNum.style.display = "block";
  total += num;
  topCartNum.textContent = total;
});
/* Open cart */
const topCartBtn = document.querySelector(".nav-cart-icon");
const cartMenu = document.querySelector(".cart-menu");
const cartDetail = document.querySelector(".cart-detail");
const emptyDetail = document.querySelector(".empty-detail");
const billDetail = document.querySelector(".bill-details");
/* Get product title cart from product title */
const productTitle = document.querySelector(".product-title");
const productTiltleCart = document.querySelector(".product-title-cart");
/* Get theme image cart from product 1 */
const themeImageCart = document.querySelector(".theme-image-cart img");
const product1 = document.querySelector("#Product1");
/* Get product unit from pay price and number of unit from topCartNum  */
const productPriceCart = document.querySelector(".product-price-cart");
const priceNum = document.querySelector(".price-num");
const payPrice = document.querySelector(".pay-price");
/* Get sum */
const sumCart = document.querySelector(".sum-cart");
let sum;

topCartBtn.addEventListener("click", () => {
  cartMenu.classList.toggle("show");
  if (topCartNum.textContent == "0" || topCartNum.textContent == "") {
    emptyDetail.style.display = "block";
  } else {
    emptyDetail.style.display = "none";
    billDetail.style.display = "block";
    billDetail.appendChild(productDetail);
    productTiltleCart.textContent = productTitle.textContent;
    themeImageCart.src = product1.src;
    productPriceCart.textContent =
      payPrice.textContent + " x " + topCartNum.textContent;
    let sum = Number(
      parseInt(priceNum.innerText) * parseInt(topCartNum.innerText)
    ).toFixed(2);
    sumCart.textContent = "$" + sum;
  }
});
/* Click Remove */
const productDetail = document.querySelector(".product-detail");
const deleteIcon = document.querySelector(".delete-icon-cart");
const checkoutBtn = document.querySelector(".checkout-btn");
deleteIcon.addEventListener("click", () => {
  productDetail.outerHTML = "";
  topCartNum.textContent = parseInt(total) - parseInt(topCartNum.innerText);
  if (topCartNum.textContent == "0" || topCartNum.textContent == "") {
    emptyDetail.style.display = "block";
    checkoutBtn.style.display = "none";
  } else {
    checkoutBtn.style.display = "block";
  }
});
/* LightBox */
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);
/* Next and Previous control */
function plusSlides(n) {
  showSlides((slideIndex += n));
}
/* Thumbnail img controls */
function currenSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}
