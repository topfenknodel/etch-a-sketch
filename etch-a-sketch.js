const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('grid');
}

const cells = document.querySelectorAll('.grid');
cells.forEach(cell => cell.addEventListener('mouseover', randomColor));

//function changeColor() {
//    this.classList.add('color');
//    console.log(this);
//}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = 0.9;

    let color = "rgba(" + r + "," + g + "," + b + "," + a + ")";

    this.style.backgroundColor = color;
}

const clButton = document.querySelector('#clear');
clButton.addEventListener('click', clearGrid);

function clearGrid() {
    const els = document.querySelectorAll('.grid');
    els.forEach(el => el.style.backgroundColor = "transparent");
}

const nButton = document.querySelector('#new');
nButton.addEventListener('click', newGrid);

function newGrid() {
    let size = prompt("Squares per side:", "Between 2 - 25");
    if (size < 2) size = 2;
    else if (size > 25) size = 25;

    const els = document.querySelectorAll('.grid');
    els.forEach(el => container.removeChild(el));

    for(let i = 0; i < size * size; i++) {
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('grid');
        let gridColumns = "repeat(" + size + "," + "1fr)" ;
        let gridRows = "repeat(" + size +  "," + "1fr)" ;
        container.style.gridTemplateColumns = gridColumns;
        container.style.gridTemplateRows = gridRows;
    }

    const squares = document.querySelectorAll('.grid');
    squares.forEach(square => square.addEventListener('mouseover', randomColor));
}