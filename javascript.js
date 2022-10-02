const gridContainer = document.getElementById('drawhere');
const DEFAULT_SIZE = 16;


for (let i=0; i<16; i++) {
    for (let k=0; k<16; k++) {
        const square = document.createElement('div');
        square.style.width= '50px';
        square.style.height= '50px';
        gridContainer.appendChild(square);
    }
}


const anydiv = document.querySelectorAll("#drawhere div");
const grid = document.getElementById('drawhere');

let downCheck=false;
document.body.onmousedown = () => (downCheck = true);
document.body.onmouseup = () => (downCheck = false);

anydiv.forEach(function(elem) {
    elem.addEventListener('mouseover', changeColor);
    elem.addEventListener('mousedown', changeColor);
});

function changeColor(e) {
    //e.target.style.backgroundColor='gray';

   if (e.type==='mouseover' && downCheck) {
        e.target.style.backgroundColor='gray';
   }
    
}

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
    let sizenr = 800/size;
    let sizenrstring = sizenr.toString();
    let sizeStringPx = sizenrstring.concat("", 'px');
    for (let i=0; i< size*size; i++) {
        const square = document.createElement('div');
        square.style.width= sizeStringPx;
        square.style.height= sizeStringPx;
        gridContainer.appendChild(square);
    }

    const anydiv = document.querySelectorAll("#drawhere div");

    anydiv.forEach(function(elem) {
        elem.addEventListener('mouseover', changeColor);
        elem.addEventListener('mousedown', changeColor);
    });
  }

  const clear = document.getElementById('clear');
  clear.addEventListener('click', clearCanvas);

  function clearCanvas() {
    const anydiv = document.querySelectorAll("#drawhere div");

    anydiv.forEach(function(elem) {
        elem.style.backgroundColor='rgb(209, 207, 207)';
    });
  }