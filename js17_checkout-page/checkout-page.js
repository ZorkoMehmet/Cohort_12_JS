const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);
  //  sessionStorage.setItem("taxRate", taxRate);
  //  sessionStorage.setItem("shippingPrice", shippingPrice);
  //  sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-plus") {
    //! search for the previous sibling version of this
    event.target.parentElement.querySelector(".quantity").innerText++;
    calculateProductPrice(event.target)
    calculateTotalPrice()

  }
  if (event.target.classList.contains("fa-minus")) {
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
      calculateProductPrice(event.target)
      calculateTotalPrice()
    } else {
      confirm("Do you want to remove this item from your checkout list?"),
        event.target.parentElement.parentElement.parentElement.remove();
        calculateTotalPrice(event.target)

    }
  }
  if (event.target.className == "remove-product") {
    event.target.parentElement.parentElement.parentElement.remove();
    calculateTotalPrice()

  }
});

const calculateProductPrice = (btn) => {
  const productInfoDiv = btn.parentElement.parentElement;
  //console.log(productInfoDiv);
  const price = productInfoDiv.querySelector(".product-price strong").innerText;
  const quantity = productInfoDiv.querySelector(".quantity").innerText;
  const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
  //alert(quantity);
};

const calculateTotalPrice = () => {
  const allPrices = document.querySelectorAll(".product-line-price")
  let beginningAmount = 0
  const subTotal = allPrices.forEach((div) => {beginningAmount += parseFloat(div.innerText)})
  document.querySelector("#cart-subtotal").lastElementChild.innerText = subTotal

  }
  calculateTotalPrice()
  
  
window.addEventListener("load", () => {
  calculateTotalPrice()

})
