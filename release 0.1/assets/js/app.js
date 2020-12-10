import Conf from './config/config.js';
import draw from './draw.js';


// Refencio o html
const canvas = document.querySelector('.tela');
const ctx = canvas.getContext('2d');

// Defino o tamanho do grid
const col = 20;
const row = 20;
const square = 20;

// Altero o tamanho do canvas
ctx.canvas.width = col * square;
ctx.canvas.height = row * square;



// Recupero as variaveis para o funcionamento do game
let { speed, speedX, speedY, positionX, positionY, maxPiece, qntPiece, appleX, appleY, trail, tail } = Conf;



setInterval(game, 120);


function game() {

    positionX += speedX;
    positionY += speedY;

    if (positionX < 0) {
        positionX = qntPiece - 1;
    }

    if (positionX > qntPiece - 1) {
        positionX = 0
    }

    if (positionY < 0) {
        positionY = qntPiece - 1;
    }

    if (positionY > qntPiece - 1) {
        positionY = 0
    }


    draw('#ababab', [0, 0, canvas.width, canvas.height]);

    ctx.fillStyle = 'green';
    for (let i = 0; i < trail.length; i++) {
        
        draw('green', [trail[i].x * maxPiece, trail[i].y * maxPiece, maxPiece, maxPiece]);

        if (trail[i].x == positionX && trail[i].y == positionY) {
            speedX = speedY = 0;
            tail = 5;
        }

    }


    if (appleX == positionX && appleY == positionY) {
        tail++;
        appleX = Math.floor(Math.random() * qntPiece);
        appleY = Math.floor(Math.random() * qntPiece);
    }


    draw('red',[appleX * maxPiece, appleY * maxPiece, maxPiece, maxPiece]);

    trail.push({ x: positionX, y: positionY })
    while (trail.length > tail) {
        trail.shift();
    }

};

const keyListener = (event) => {
    if(!event.key) return;

    console.log('O teclado está sendo escultado');
    console.log(`A tecla: ${event.key} foi digitada`);

    controller(event.key)
}

document.addEventListener('keydown', keyListener)


function controller(key){
    switch (key) {
        case 'ArrowLeft': //Left
            speedX = -speed;
            speedY = 0;
            break;

        case 'ArrowUp': // Up
            speedX = 0;
            speedY = -speed;
            break;

        case 'ArrowRight': //Right
            speedX = speed;
            speedY = 0;
            break;

        case 'ArrowDown':// Dow
            speedX = 0;
            speedY = speed;
            break;

        default:
            break;
    }
}

