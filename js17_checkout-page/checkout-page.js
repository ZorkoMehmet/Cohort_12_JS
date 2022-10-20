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
    calculateCartPrice()

  }
  if (event.target.classList.contains("fa-minus")) {
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
      calculateProductPrice(event.target)
      calculateCartPrice()
    } else {
      confirm("Do you want to remove this item from your checkout list?"),
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartPrice(event.target)

    }
  }
  if (event.target.className == "remove-product") {
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCartPrice()

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

const calculateCartPrice = () => {
  const productsTotalPricesDivs = document.querySelectorAll(
    ".product-line-price"
  );
  //foreach ==> NodeList, Array
  //const productsTotalPricesDivs = [...document.getElementsByClassName("product-line-price")];

  // let subtotal = 0;
  // productsTotalPricesDivs.forEach((div) => {
  //   subtotal += parseFloat(div.innerText);
  // });

  //! alternatif olarak reduce metodu da kullanilabilir.
  // const subtotal = [...productsTotalPricesDivs].reduce(
  //   (acc, price) => acc + Number(price.innerText),
  //   0
  // );
  //console.log(subtotal);
  const taxPrice = subtotal * localStorage.getItem("taxRate");

  const shippingPrice = parseFloat(
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );

  console.log(shippingPrice);

  document.querySelector("#cart-subtotal").lastElementChild.innerText =
    subtotal.toFixed(2);
  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);
  document.querySelector("#cart-shipping").children[1].innerText =
    shippingPrice.toFixed(2);
  document.querySelector("#cart-total").lastElementChild.innerText = (
    subtotal +
    taxPrice +
    shippingPrice
  ).toFixed(2);
};
