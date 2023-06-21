// const h1 = document.getElementById("size");
// var x = window.innerWidth;
// var y = window.innerHeight;
// h1.innerText = `Width: ${x} and Height: ${y}`;

const output = document.querySelector("#size");

function updateSize() {
  output.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}

updateSize();
window.addEventListener("resize", updateSize);
