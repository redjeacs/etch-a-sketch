const container = document.querySelector('#container');

createGrid();
function createGrid() {
  for(let i = 0; i < 16*16; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid-item');
    grid.textContent = 'grid';
    container.appendChild(grid);
  }
}

let grid = document.querySelector('grid-item');

grid.addEventListener('mouseenter', () => {
  grid.style.backgroundColor = 'pink';
})