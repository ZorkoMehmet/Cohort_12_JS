//* ===========================================================
//*                            EVENTS
//* ===========================================================
console.log("****** EVENTS ******");

//* EXAMPLE-1 (Mouse Over, Mouse Out)
//* ===========================================================

const h1 = document.querySelector("#header h1");
console.log(h1);

h1.onmouseover = function () {
  h1.style.color = "red";
};

h1.onmouseout = () => {
  h1.style.color = "black";
};

h1.addEventListener("click", () => {
  alert("H1 Pressed");
});

//* EXAMPLE- (addEventListener())
//* ===========================================================

document.getElementById("btn").addEventListener("click", function () {
  const input = document.querySelector("#input");
  //   if (!input.value) {
  //     alert("Please enter a text");
  //   } else {
  //     alert(`You have entered ${input.value}`);
  //   }
  !input.value
    ? alert("Please enter a text")
    : alert(`You have entered ${input.value}`);

    input.value = "" // deger girildikten sonra icerigi sifirlamak icin
});
