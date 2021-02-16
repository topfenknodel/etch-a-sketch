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
    cells.forEach(cell => cell.style.backgroundColor = "transparent");
}

