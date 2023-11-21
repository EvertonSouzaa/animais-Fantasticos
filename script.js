const listaAnimais = document.querySelector(".animais-lista");
const animais = listaAnimais.offsetTop;
const imgs = document.querySelectorAll("img");
const img = document.querySelector("img");

let i = 0;

imgs.forEach((item, index, array) => {
  // console.log(item);
});

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(this.getAttribute("href"));
  console.log(event.currentTarget);
}

function handleKeyboard(event) {
  if (event.key === "f") {
    document.body.classList.toggle("azul");
  }
}

window.addEventListener("keydown", handleKeyboard);
