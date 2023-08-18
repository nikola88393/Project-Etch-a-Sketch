function drawGrid(number = 16){
    const grid = document.querySelector('.gridContainer');
    let counter = 0;
    for(let i = 1; i <= number; i++){
        const newLine = document.createElement('p');
        for(let j = 1; j <= number; j++){
            const gridElement = document.createElement('div');
            gridElement.classList = 'gridElement';
            gridElement.style.border = "1px solid black";
            newLine.appendChild(gridElement);

        }
        grid.appendChild(newLine);
    }
}
function changeColor(){
    const colors = document.querySelectorAll('.colorContainer button');
    colors.forEach(element => {
        element.addEventListener('click', () => {
            const color = element.classList;
            draw(color);
        })
    })
}

function draw(color = 'black'){
    const gridElement = document.querySelectorAll('.gridContainer div');
    gridElement.forEach(element => {
        element.addEventListener('mouseenter', () =>{
            element.style.backgroundColor = color;
        })
    });   
}


function changeSize(){
    
}

// function clearGrid(){
//     const grid = document.querySelector('.gridcontainer');
//     grid.innerHTML="";
// }

function reset(){
    const reset = document.querySelector('.reset');
    const gridElement = document.querySelectorAll('.gridContainer div');
    reset.addEventListener('click', () => {
        gridElement.forEach(element => {
            element.style.backgroundColor = 'white';
        });
    })
}

drawGrid(32);
changeColor();
reset();
clearGrid();
