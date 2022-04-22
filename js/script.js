let order = [];
let clickedOrder = [];
let score = 0;

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

// generate random color order
let shuffleOrder = () => {
    let colorOrder = math.Floor(Math.random() * 4)
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// lights next color
let lightColor = (element, number) => {
    number = number * 500;

    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// check if clicked color order is the same as the generated color order
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Your score: ${score}\nYou got it! Starting next level.`);
        nextLevel();
    }
}

// when player click
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// return color
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// incrase game difficulty
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// game over funciton
let gameOver = () => {
    alert(`Score: ${score}.\nYou lose!\nClick OK to restart game.`)
    order = [];
    clickedOrder = [];

    playGame();
}

// start game
let playGame = () => {
    alert('Welcome to Genesis! Starting new game!');
    score = 0;

    nextLevel();
}

green.onClick = () => click(0);
red.onClick = () => click(1);
yellow.onClick = () => click(2);
blue.onClick = () => click(3);

playGame();