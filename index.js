const container = document.querySelector('#container');
const gridSize = document.createElement('button');

createGrid();
function createGrid() {
  for(let i = 0; i < 16*16; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid-item');
    grid.textContent = 'grid';
    container.appendChild(grid);
    grid.addEventListener('mouseenter', () => {
      grid.style.backgroundColor = 'pink';
    })
  }
}