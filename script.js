let container = document.getElementById("container");

function createStartGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    container.appendChild(item);
  }
  container.style.gridTemplateColumns = `repeat(16, 6.25%)`;
  container.style.gridTemplateRows = `repeat(16, 6.25%)`;
  itemColor();
}

createStartGrid();
itemColor();

function createGrid(number, percent) {
  number = prompt("Enter grid size");
  percent = 100 / number;
  if (number > 100) {
    alert("TOO MUCH");
    createStartGrid();
  } else {
    for (let i = 0; i < number * number; i++) {
      const item = document.createElement("div");
      item.classList.add("item");
      container.appendChild(item);
    }
    container.style.gridTemplateColumns = `repeat(${number}, ${percent}%)`;
    container.style.gridTemplateRows = `repeat(${number}, ${percent}%)`;
    itemColor();
  }

}

let item = document.querySelectorAll(".item");

function reset() {
  document
    .querySelectorAll(".item")
    .forEach((e) => e.parentNode.removeChild(e));
}

function itemColor() {
  var cls = document.querySelectorAll('.item');
  Array.from(cls).forEach(function (v) {
    v.addEventListener("mouseenter", function () {
      this.style.background = "black";
    });
  });
}




let newGrid = document.getElementById("new-grid");
newGrid.addEventListener("click", reset);
newGrid.addEventListener("click", createGrid);