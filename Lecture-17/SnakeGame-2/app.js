const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';

const cs = 67;
const W = 1200;
const H = 735;
let food = null;
let score = 0;



const snake = {
    
    // Initial lenght of snake
    init_len: 5,

    // default direction
    direction: 'right',

    // cells array containing {x,y} for each cell in a snake
    cells: [],
    
    createSnake: function () {
        for (let i = 0; i < this.init_len; i++){
            this.cells.push({
                x: i,
                y:0
            })
        }
    },

    drawSnake: function () {
        for (let cell of this.cells) {
            pen.fillRect(cell.x*cs, cell.y*cs, cs-2, cs-2);
        }
    },
    updateSnake: function () {
        let headX = this.cells[this.cells.length - 1].x;
        let headY = this.cells[this.cells.length - 1].y;
        
        let nextX;
        let nextY;


        if (headX === food.x && headY === food.y) {
            food = getRandomFood();
            score++;
        } else {
            this.cells.shift();
        }
       

        if (this.direction === 'left') {
            nextX = headX - 1;
            nextY = headY;

            if (nextX * cs < 0) {
               
                clearInterval(id);
                pen.fillStyle = 'lightgreen';
                pen.fillText("Game Over", 50, 100);
                console.log("Game Over")
               
            }
          

        }
        else if (this.direction === 'up') {
            nextX = headX;
            nextY = headY - 1;
            if (nextY * cs < 0) {
               
                clearInterval(id);
                pen.fillStyle = 'lightgreen';
                pen.fillText("Game Over", 50, 100);
                console.log("Game Over")
               
            }
        }
        else if (this.direction === 'down') {
            nextX = headX;
            nextY = headY + 1;
            if (nextY * cs >= H) {
                clearInterval(id);
                pen.fillStyle = 'lightgreen';
                pen.fillText("Game Over", 50, 100);
                console.log("Game Over")
              
            }
        } else {
            nextX = headX + 1;
            nextY = headY

            if (nextX * cs >= W) {
               
                clearInterval(id);
                pen.fillStyle = 'lightgreen';
                pen.fillText("Game Over", 50, 100);
                console.log("Game Over")
               
            }
    
        }

        // remove the cell from the tail of snake

      

        this.cells.push({
            x: nextX,
            y:nextY
        })

    }
}


// init

function init() {
    snake.createSnake();

    food = getRandomFood();
    pen.font = '40px serif';
    pen.fillStyle = 'lightgreen';
    pen.fillText(`${score}`, 50, 50);
    function keyPressed(e) {
        
        if (e.key === 'ArrowLeft') {
            snake.direction = 'left';
        }
        else if (e.key === 'ArrowDown') {
            snake.direction = 'down';
        }
        else if (e.key === 'ArrowUp') {
            snake.direction = 'up';
        } else {
            snake.direction = 'right';
        }
        console.log(snake.direction);

    }


    document.addEventListener('keydown', keyPressed);
}


// Draw
function draw() {
    pen.clearRect(0, 0, W, H);
    pen.font = '40px sans-serif';
    pen.fillStyle = 'lightgreen';
    pen.fillText(`Score ${score}`, 50, 50);
    pen.fillStyle = 'red';
    pen.fillRect(food.x*cs, food.y*cs, cs, cs);
    pen.fillStyle = 'yellow';
    snake.drawSnake();
}

// update
function update() {
    snake.updateSnake();
}

// Game Loop
function gameLoop() {
    console.log("INSIDE GAME LOOP")
    draw();
    update();
   
}


function getRandomFood() {
    const foodX = Math.floor(Math.random() * (W - cs) / cs);
    const foodY = Math.floor(Math.random() * (H - cs) / cs);

    const food = {
        x: foodX,
        y:foodY
    }

    return food;
}


// start the game and initialise it
init();


const id = setInterval(gameLoop, 150);