GRID = initGrid(20, 20);

// const blue = "#48a";
// const green = "#152";
// const orange = "#f51";
// const yellow = "#fa0";
// const brown = "#a52";

const colRan = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];


function randomNumber(min,max){
    let result = Math.random();
    return Math.round(result * (max - min) + min);
}

function randomColor(){
    return "#" + colRan[randomNumber(0,15)] + colRan[randomNumber(0,15)] + colRan[randomNumber(0,15)];
}

function square(){
    const x = randomNumber(0, 19);
    const y = randomNumber(0, 19);
    GRID[x][y].style.background = randomColor();
}

square();

setInterval(square, 10);