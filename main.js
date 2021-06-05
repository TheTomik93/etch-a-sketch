const container = document.getElementById("grid-container");
const clearButton = document.getElementById("btnClear");
const sizeButton = document.getElementById("btnSize");
const grayscaleButton = document.getElementById("btnGrayscale");
const rainbowButton = document.getElementById("btnRainbow");

let size = 16; /* Default size of the grid */
let numberOfGridBoxes = size * size;
let colorScheme = 1; /* Default color-scheme: 1 - grayscale, 2 - rainbow */

clearButton.addEventListener("click", clearGrid);
sizeButton.addEventListener("click", askSize);
grayscaleButton.addEventListener("click", setGrayscale);
rainbowButton.addEventListener("click", setRainbow);

createGrid(size, size); /* Initial grid with default size */

function createGrid(rows, cols) {
    numberOfGridBoxes = rows * cols;
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    sizeButton.textContent = "Size " + size + " x " + size;

    for (let c = 0; c < numberOfGridBoxes; c++){
        let cell = document.createElement("div");
        cell.id = c;
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", function() {changeColor(cell)});
    }
}

function changeColor(activeGridSquare) {
    if(colorScheme === 1){
        if (activeGridSquare.classList.contains("change")) {

            let currentOpacity = Number(activeGridSquare.style.backgroundColor.slice(-4, -1));

            if(currentOpacity == 0.8) {
                activeGridSquare.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.2})`;
            }
            else if (currentOpacity < 0.8) {
                activeGridSquare.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.2})`;
            }
        }
        else {
            activeGridSquare.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';  
            activeGridSquare.classList.add("change");
        }
    }
    else if(colorScheme === 2){
        activeGridSquare.classList.remove('change');
        activeGridSquare.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 45%)`;
    } 
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

function clearGrid(){
    for (let i = 0; i < numberOfGridBoxes; i++){
        let cellToClear = document.getElementById(i);
        container.removeChild(cellToClear);
    }
    createGrid(size, size);
}

function setGrayscale(){
    colorScheme = 1;
    grayscaleButton.style.setProperty("border", "3px solid red");
    grayscaleButton.style.setProperty("box-shadow", "2px 2px 5px red");
    grayscaleButton.style.setProperty("transform", "scale(1.05)");
    rainbowButton.style.setProperty("border", "0px solid red");
    rainbowButton.style.setProperty("box-shadow", "0px 0px 0px red");
    rainbowButton.style.setProperty("transform", "scale(1)");
}

function setRainbow() {
    colorScheme = 2;
    grayscaleButton.style.setProperty("border", "0px solid red");
    grayscaleButton.style.setProperty("box-shadow", "0px 0px 0px red");
    grayscaleButton.style.setProperty("transform", "scale(1)");
    rainbowButton.style.setProperty("border", "3px solid red");
    rainbowButton.style.setProperty("box-shadow", "2px 2px 5px red");
    rainbowButton.style.setProperty("transform", "scale(1.05)");
}