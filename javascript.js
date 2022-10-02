const gridContainer = document.getElementById('drawhere');


for (let i=0; i<16; i++) {
    for (let k=0; k<16; k++) {
        const square = document.createElement('div');
        gridContainer.appendChild(square);
    }
}

const anydiv = document.querySelectorAll("#drawhere div");

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



