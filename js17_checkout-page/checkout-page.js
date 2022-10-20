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
  }
  if (event.target.classList.contains("fa-minus")) {
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
    } else {
      confirm("Do you want to remove this item from your checkout list?"),
        event.target.parentElement.parentElement.parentElement.remove();
    }
  }
  if (event.target.className == "remove-product") {
    event.target.parentElement.parentElement.parentElement.remove();
  }
});

const calculateProductTotal = (btn) => {
  const productsInfoDiv = btn.parentElement;

  // const productPrice = productsInfoDiv.querySelector(".product-price strong").innerText
  // console.log(productPrice);
};
calculateProductTotal();
const calculateSubTotal = () => {};
