const container = document.getElementById("grid-container");
let numberOfGridBoxes;

function createGrid(rows, cols) {
    numberOfGridBoxes = rows * cols;
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);

    for (let c=0; c<(numberOfGridBoxes); c++){
        let cell = document.createElement("div");
        cell.id = ("cell" + c); /* Dam kazdemu elementu IDcko abych ho potom podle ID mohl najit a zmenit mu barvu */
        cell.innerText = c; /* Pozdeji smazat, ted je to tu jen pro orientaci */
        container.appendChild(cell).className = "grid-item";
        console.log(cell.id + " TOTO JE IDECKO");
        cell.addEventListener("mouseover", function() {changeColor(cell)});
    }
}

createGrid(16, 16);

function changeColor(activeGridSquare) {
    activeGridSquare.style.backgroundColor = "yellow";
} 