const container = document.querySelector('#container');
const gridSizeBtn = document.createElement('button');
const body = document.querySelector('body');
body.insertBefore(gridSizeBtn, container);
gridSizeBtn.textContent = 'select grid size'

const defaultSize = 16;

let gridSzie = defaultSize;

createGrid(defaultSize);
function createGrid(gridSize) {
  for(let i = 0; i < gridSize*gridSize; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid-item');
    container.appendChild(grid);
    grid.style.width = `${100/gridSize}%`
    grid.style.height = `${100/gridSize}%`
    grid.addEventListener('mouseenter', () => {
      grid.style.backgroundColor = 'pink';
    })
  }
}

function deleteGrid() {
  container.innerHTML = '';
}

gridSizeBtn.addEventListener('click', () => {
  const gridSize = prompt('select the number of squares per side (max: 100)', '')
  if(gridSize > 0 && gridSize <= 100) {
    deleteGrid();
    createGrid(gridSize)
  }
})