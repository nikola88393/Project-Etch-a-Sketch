
function drawGrid(number = 16){
    const grid = document.querySelector('.gridContainer');
    let counter = 0;
    for(let i = 1; i <= number; i++){
        const newLine = document.createElement('p');
        for(let j = 1; j <= number; j++){
            const gridElement = document.createElement('div');
            gridElement.classList = 'gridElement';
            newLine.appendChild(gridElement);

        }
        grid.appendChild(newLine);
    }
    reset();
}

function toggleGrid(){
    const toggle = document.querySelector('.toggleGrid');
    const grid = document.querySelectorAll('.gridContainer div');
    toggle.addEventListener("click", () => {
        grid.forEach(element => {
            if (!Toggle) {
                element.style.border = 'none';
            } else {
                element.style.border = "1px dotted black";
            }
        })
        Toggle = !Toggle; 
    })
}

function randomColor (){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`;
}

function changeSize(){
    const buttons = document.querySelectorAll('.setSizeButtons');
    const grid = document.querySelector('.gridContainer');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let size = prompt("Enter the new size of the grid: ");
            if(size === "" || isNaN(size) || parseInt(size) <= 0){
                alert("Invalid input!");
                return;
            }
            else  if (size === null){
                return;
            }
            grid.innerHTML = "";
            drawGrid(Number(size));
        })
    })
    reset();
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

function rainbowColor(){
    const rainbow = document.querySelector('.rainbow');
    rainbow.addEventListener('click', () => {
        const gridElement = document.querySelectorAll('.gridContainer div');
        gridElement.forEach(element => {
        element.addEventListener('mouseenter', () =>{
            element.style.backgroundColor = randomColor();
        })
    }); 
    })
}

function eraser(){
    const eraser = document.querySelector('.eraser');
    eraser.addEventListener('click', () => {
        const gridElement = document.querySelectorAll('.gridContainer div');
        gridElement.forEach(element => {
            element.addEventListener('mouseenter', () =>{
                element.style.backgroundColor = 'white';
            })
        });
    })
       
}

function draw(color='black'){
    const gridElement = document.querySelectorAll('.gridContainer div');
    gridElement.forEach(element => {
            element.addEventListener('mouseenter', () =>{
                element.style.backgroundColor = color;
            })

        });  
    toggleGrid();

}

function reset(){
    const reset = document.querySelector('.reset');
    const gridElement = document.querySelectorAll('.gridContainer div');
    reset.addEventListener('click', () => {
        gridElement.forEach(element => {
            element.style.backgroundColor = 'white';
        });
    })
}
let Toggle = false;



drawGrid();
changeColor();
rainbowColor();
changeSize();
eraser();
reset();
toggleGrid();
