const gridContainer = document.getElementById('drawhere');


for (let i=0; i<16; i++) {
    for (let k=0; k<16; k++) {
        const square = document.createElement('div');
        gridContainer.appendChild(square);
    }
}

const anydiv = document.querySelectorAll("#drawhere div");

anydiv.forEach(function(elem) {
    elem.addEventListener("mouseover", function(){
        elem.style.backgroundColor='gray';
    });
});
