const container = document.getElementById("grid-container");
const clearButton = document.getElementById("btnClear");
const sizeButton = document.getElementById("btnSize");
const grayscaleButton = document.getElementById("btnGrayscale");
const rainbowButton = document.getElementById("btnRainbow");

let size = 16; /*Default size of the grid*/
let numberOfGridBoxes = size * size;
let colorScheme = 1; /*Defaultne grayscale schema*/

clearButton.addEventListener("click", clearGrid);
sizeButton.addEventListener("click", askSize);
grayscaleButton.addEventListener("click", setGrayscale); /* */
rainbowButton.addEventListener("click", setRainbow);

createGrid(size, size);

function createGrid(rows, cols) {
    numberOfGridBoxes = rows * cols;
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    sizeButton.textContent = "Size " + size + " x " + size;

    for (let c = 0; c < numberOfGridBoxes; c++){
        let cell = document.createElement("div");
        cell.id = c;
        /*cell.textContent = cell.id;*/
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
        let cellToClear = document.getElementById(i);
        container.removeChild(cellToClear);
    }
    createGrid(size, size);
}

function askSize(){
    desiredSize = prompt("Enter the length of the row / column:", 16);
    if (isNaN(desiredSize)){
        alert("Only numbers accepted");
    }
    else if(desiredSize == 0){
        alert("Minimal size is 1");
    }
    else{
        size = desiredSize;
        clearGrid();
    }
}

function setGrayscale(){
    colorScheme = 1;
    grayscaleButton.style.setProperty("border", "3px solid red");
    grayscaleButton.style.setProperty("box-shadow", "2px 2px 5px red");
    rainbowButton.style.setProperty("border", "0px solid red");
    rainbowButton.style.setProperty("box-shadow", "0px 0px 0px red");
}

function setRainbow() {
    colorScheme = 2;
    grayscaleButton.style.setProperty("border", "0px solid red");
    grayscaleButton.style.setProperty("box-shadow", "0px 0px 0px red");
    rainbowButton.style.setProperty("border", "3px solid red");
    rainbowButton.style.setProperty("box-shadow", "2px 2px 5px red");
}
