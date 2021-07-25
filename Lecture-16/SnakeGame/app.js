const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';


pen.fillRect(50, 100, 100, 100);


// init

function init() {
    
}

function draw() {
    
}

function update() {
    
}

function gameLoop() {
    console.log("INSIDE GAME LOOP")
    update();
    draw();
}

init();


const id = setInterval(gameLoop, 150);