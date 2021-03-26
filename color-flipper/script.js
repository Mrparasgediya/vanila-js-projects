const main = document.querySelector("main");
const bgColorName = document.querySelector(".bg-color");
const button = document.querySelector(".button");
const colorTypes = document.querySelectorAll(".navbar-nav__item");

let currentColorType = "simple";
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

init();

colorTypes.forEach((colorType) =>
  colorType.addEventListener("click", (e) => {
    currentColorType = e.target.textContent.toLowerCase();
    colorTypes.forEach((item) =>
      item.classList.remove("navbar-nav__item--active")
    );
    e.target.classList.add("navbar-nav__item--active");
  })
);

function getNewHex() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`.toUpperCase();
}

function getNewColor() {
  if (currentColorType === "simple") {
    return colors[Math.floor(Math.random() * 4)];
  }
  return getNewHex();
}

button.addEventListener("click", () => {
  const newColor = getNewColor();
  // change bg color
  main.style.backgroundColor = newColor;
  // change bg text
  bgColorName.textContent = newColor;
});

function init() {
  // change bg color
  main.style.backgroundColor = "#F1f5f8";
  // change bg text
  bgColorName.textContent = "#F1f5f8";
}
