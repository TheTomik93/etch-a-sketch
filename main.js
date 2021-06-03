const container = document.getElementById("grid-container");
let numberOfGridBoxes;

createGrid(64, 64);

function createGrid(rows, cols) {
    numberOfGridBoxes = rows * cols;
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for (let c=0; c<(numberOfGridBoxes); c++){
        let cell = document.createElement("div");
        cell.id = ("cell" + c);
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", function() {changeColor(cell)});
    }
}
function changeColor(activeGridSquare) {
    activeGridSquare.classList.add("hovered1");
} 