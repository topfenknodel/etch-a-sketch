const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('grid');
}

const cells = document.querySelectorAll('.grid');

cells.forEach(cell => cell.addEventListener('mouseover', changeColor));

function changeColor() {
    this.classList.add('color');
    console.log(this);
}