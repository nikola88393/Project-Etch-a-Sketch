function drawGrid(number = 8){
    const grid = document.querySelector('.gridContainer');
    let counter = 0;
    for(let i = 1; i <= number; i++){
        const newLine = document.createElement('p');
        for(let j = 1; j <= number; j++){
            const gridElement = document.createElement('div');
            gridElement.classList = `${++counter}`;
            gridElement.style.border = "1px solid black";
            newLine.appendChild(gridElement);

        }
        grid.appendChild(newLine);
    }
}

drawGrid();