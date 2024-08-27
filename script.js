let container = document.querySelector('.container')
let size;

function getSize() {
    size = prompt('Size of grid (e.g "Type 16 for 16x16 grid)"');
    while (isNaN(size)) {
        size = prompt('Size of grid (e.g "Type 16 for 16x16 grid)"');
    }
    if (size <= 0) {
        size = 1
    } else if (size >= 100) {
        size = 100
    }
}

function createGrid(rows, columns) {
    const sizeOfSquare = (500/rows).toString()
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.addEventListener('mouseover', () => {
                squareDiv.style.backgroundColor = 'blue';
            })
            squareDiv.classList.add("squareDiv");
    
            squareDiv.style.left = j * sizeOfSquare + "px";
            squareDiv.style.top = i * sizeOfSquare + "px";
            squareDiv.style.height = sizeOfSquare + "px";
            squareDiv.style.width = sizeOfSquare + "px";
    
            container.appendChild(squareDiv);
            container.style.width = "500px";
            container.style.height = "500px";
        }
    }
}

getSize()
createGrid(size, size);