let container = document.querySelector('.container')

function createGrid(rows, columns , sizeOfSquare) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("squareDiv");
    
            squareDiv.style.left = j * sizeOfSquare + "px";
            squareDiv.style.top = i * sizeOfSquare + "px";
    
            container.appendChild(squareDiv);
            container.style.width = (sizeOfSquare * rows).toString() + 'px';
        }
    }
}

createGrid(16, 16, 30);

