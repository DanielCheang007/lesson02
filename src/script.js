const ROWS = 6;
const COLUMNS = 6;
const CELL_LENGTH = ROWS * COLUMNS;

const MATCHS = 2;
const MAX_NUM = CELL_LENGTH / MATCHS;

const MEMORY_TIME = 3; // seconds

const CANVAS = document.querySelector("#canvas");

const { width: WIDTH, height: HEIGHT } = CANVAS.getBoundingClientRect();

const CELL_WIDTH = WIDTH / COLUMNS;
const CELL_HEIGHT = HEIGHT / ROWS;

const CELLS = []

for(let i = 0; i < CELL_LENGTH; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.width = `${CELL_WIDTH}px`
  cell.style.height = `${CELL_HEIGHT}px`
  
  CELLS.push(cell)
  CANVAS.append(cell);
}

const COPY = [...CELLS];
for(let i = 0; i < MAX_NUM; i++) {
  for(let j = 0; j < MATCHS; j++) {
    let idx = Math.random() * COPY.length
    const cell = COPY.splice(idx, 1)[0]
    cell.innerHTML = i
  }
}

let MATCHED = []
CELLS.forEach(cell => {
  cell.addEventListener("click", () => {
    cell.classList.remove("hide")
    
    MATCHED.push(cell)
    
    if(MATCHED.length === 0) {
      // MATCHED.push(cell)
    } else if(cell.innerHTML === MATCHED[0].innerHTML) {
      // MATCHED.push(cell)
    } else {
      // MATCHED.push(cell)
      MATCHED.forEach(cell => cell.classList.add("hide"))
      MATCHED = []
    }
  })
})


setTimeout(() => {
  CELLS.forEach(cell => cell.classList.add("hide"))
}, MEMORY_TIME * 1000);
