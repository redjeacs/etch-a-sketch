const container = document.querySelector('#container');

function createGrid() {
  for(let i = 0; i < 16*16; i++) {
    const grid = document.createElement('div');
    container.appendChild(grid);
  }
}