const controls = document.querySelector("#controls");
const controlsLine = document.querySelector("#controls-line");
const grayImage = document.querySelector("#gray");

controls.oninput = (e) => {
  grayImage.style.width = `${e.target.value}%`;
  controlsLine.style.left = `${e.target.value}%`;
};
