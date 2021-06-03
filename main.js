const container = document.getElementById("grid-container");
const clearButton = document.getElementById("btnClear");
const sizeButton = document.getElementById("btnSize");
const grascaleButton = document.getElementById("btnGrayscale");
const rainbowButton = document.getElementById("btnRainbow");

let numberOfGridBoxes;
let size = 16; /*Default size of the grid*/
let colorScheme = 1; /*Defaultne grayscale schema*/

clearButton.addEventListener("click", clearGrid);
sizeButton.addEventListener("click", askSize);
grascaleButton.addEventListener("click", setGrayscale); /* */
rainbowButton.addEventListener("click", setRainbow);

createGrid(size, size);

function createGrid(rows, cols) {
    numberOfGridBoxes = rows * cols;
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    sizeButton.textContent = "Size " + size + " x " + size;

    for (let c = 0; c < numberOfGridBoxes; c++){
        let cell = document.createElement("div");
        cell.id = ("cell" + c);
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", function() {changeColor(cell)});
    }
}

function changeColor(activeGridSquare) {
    if(colorScheme === 1){
        activeGridSquare.className = "grayscale";
    }
    else if(colorScheme === 2){
        activeGridSquare.className = "rainbow";
    }
}

function clearGrid(){
    for (let i = 0; i < numberOfGridBoxes; i++){
        let cellToClear = document.getElementById("cell" + i);
        cellToClear.className = "grid-item";
    }
}

function askSize(){
    size = prompt("Enter the length of the row / column:", 16);
    if (isNaN(size)){
        alert("Only numbers accepted");
    }
    else{
        clearGrid();
        createGrid(size, size);
    }
}

function setGrayscale(){
    colorScheme = 1;
}

function setRainbow() {
    colorScheme = 2;
}