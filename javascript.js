const gridContainer = document.getElementById('drawhere');
const DEFAULT_SIZE = 16;

//create default grid
for (let i = 0; i < 16; i++) {
  for (let k = 0; k < 16; k++) {
    const square = document.createElement('div');
    square.style.width = '50px';
    square.style.height = '50px';
    gridContainer.appendChild(square);
  }
}

const anydiv = document.querySelectorAll("#drawhere div");
const grid = document.getElementById('drawhere');

//set drawing properties and add listeners 
let downCheck = false;
document.body.onmousedown = () => (downCheck = true);
document.body.onmouseup = () => (downCheck = false);

anydiv.forEach(function (elem) {
  elem.addEventListener('mouseover', changeColor);
  elem.addEventListener('mousedown', changeColor);
});

//mode variables
const modeRetro = 'retro';
const modeEraser = 'eraser';
const modeRainbow = 'rainbow';
let currentMode = 'retro';

//in order to find a random rgb
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

//changecolor function
function changeColor(e) {
  if (e.type === 'mouseover' && downCheck) {
    if (currentMode === modeRetro) {
      e.target.style.backgroundColor = 'gray';
    } else if (currentMode === modeEraser) {
      e.target.style.backgroundColor = 'rgb(209, 207, 207)';
    } else if (currentMode === modeRainbow) {
      let randomR = randomBetween(0, 255);
      let randomG = randomBetween(0, 255);
      let randomB = randomBetween(0, 255);
      const rgb = `rgb(${randomR},${randomG},${randomB})`;
      e.target.style.backgroundColor = rgb;
    }
  }
}

//slider and its functions
var slider = document.getElementById("myRange");
var output = document.getElementById("sizeValue");
slider.onmousemove = (e) => updateSizeValue(e.target.value);
slider.onchange = (e) => changeSize(e.target.value);

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}

function updateSizeValue(value) {
  output.innerHTML = `${value} x ${value}`;
}

function reloadGrid() {
  clearGrid()
  setupGrid(currentSize)
}

let currentSize = DEFAULT_SIZE;
function setCurrentSize(newSize) {
  currentSize = newSize;
}

function clearGrid() {
  grid.innerHTML = '';
}

function setupGrid(size) {
  let sizenr = 800 / size;
  let sizenrstring = sizenr.toString();
  let sizeStringPx = sizenrstring.concat("", 'px');
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.style.width = sizeStringPx;
    square.style.height = sizeStringPx;
    gridContainer.appendChild(square);
  }

  const anydiv = document.querySelectorAll("#drawhere div");
  anydiv.forEach(function (elem) {
    elem.addEventListener('mouseover', changeColor);
    elem.addEventListener('mousedown', changeColor);
  });
}

//clear button
const clear = document.getElementById('clear');
clear.addEventListener('click', clearCanvas);

function clearCanvas() {
  const anydiv = document.querySelectorAll("#drawhere div");
  anydiv.forEach(function (elem) {
    elem.style.backgroundColor = 'rgb(209, 207, 207)';
  });
}

//retro button
const retroBtn = document.getElementById('retro');
retroBtn.addEventListener('click', setRetro);

anydiv.forEach(function (elem) {
  elem.addEventListener('mouseover', changeColor);
  elem.addEventListener('mousedown', changeColor);
});

function setRetro() {
  currentMode = modeRetro;
}

//eraser button
const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', setEraser);

anydiv.forEach(function (elem) {
  elem.addEventListener('mouseover', changeColor);
  elem.addEventListener('mousedown', changeColor);
});

function setEraser() {
  currentMode = modeEraser;
}

//rainbow button
const rainbowBtn = document.getElementById('rainbow');
rainbowBtn.addEventListener('click', setRainbow);

anydiv.forEach(function (elem) {
  elem.addEventListener('mouseover', changeColor);
  elem.addEventListener('mousedown', changeColor);
});

function setRainbow() {
  currentMode = modeRainbow;
}
