// - TEM QUE TER OPÇOES
// -- OPDE-SE ALTERAR O ESTADO DA PAREDE DE TELEPORT PARA FECHADO (ONDE A COBRINHA ABTE E VOLTA)
// - EVITAR QUE AS FRUTIMJAS NASÇÃO NO CORPO DA COBRINHA
// EVITAR QUE A COBRINHA FIQUE MAIOR QUE O CANVAS
// ADICIONAR PONTUAÇÕES
// TER 3 NIVEIS
// ADICIONAR START/STOP

const canvas = document.querySelector('.screen');
const ctx = canvas.getContext('2d');
const px = 30;

canvas.width = 15 * 30;
canvas.height = 15 * 30;



var direction;

let snake = [];
snake[0] = {
    x: 8 * 30,
    y: 8 * 30
}

let food = {
    x: Math.floor(Math.random() * 15) * px,
    y: Math.floor(Math.random() * 15) * px
}


document.addEventListener('keydown', update)

function criarBg() {
    ctx.fillStyle = "rgba(2550,255,255,0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function criarSnake() {
    for (i = 0; i < snake.length; i++) {
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y, px -1, px -1);
    }
}

function desenhaFruta(){
    ctx.fillStyle = "orange";
    ctx.fillRect(food.x, food.y, px, px);
}

function moveSnake(key){
    const moveAccepted = [
        'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'
    ]
    
    for(let i = 0; i < moveAccepted.length; i++){
        if(key === moveAccepted[i]){
            direction = key
        }
    }
}

function listenerKeiboard(key){
    if(!key) return ;
    if(snake[0].y < 0 || snake[0].y >= canvas.height || snake[0].x < 0 || snake[0].x >= canvas.width) return;
    moveSnake(key);
}

function update(event){
    event.preventDefault();

    listenerKeiboard(event.key);
}




setInterval(() => {
    motor();
}, 100);

function motor() {


    // for(let i = 1; i < snake.length;i++){
    //     if(snake[0].x === snake[i].x && snake[0].y === snake[i].y){
    //         clearInterval(motor);
    //         alert('Gamer Over :/');
    //         // state.engine = 'stop'
    //     }
    // }

    // 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'


    if(snake[0].y < 0 && direction == 'ArrowUp'){
        console.log('fire',snake[0].y)
        snake[0].y = canvas.width;
        console.log('fire',snake[0].y)
    }

    if(snake[0].x >= canvas.width && direction == 'ArrowRight'){
        snake[0].x = 0
    }

    if(snake[0].y >= canvas.height && direction == 'ArrowDown'){
        snake[0].y = 0;
    }

    if(snake[0].x < 0 && direction == 'ArrowLeft'){
        snake[0].x = (15 * px);
    }






    criarBg()
    criarSnake()
    desenhaFruta()
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    

    if (direction == 'ArrowUp') snakeY -= px;
    if (direction == 'ArrowRight') snakeX += px;
    if (direction == 'ArrowDown') snakeY += px;
    if (direction == 'ArrowLeft') snakeX -= px;


    if(snakeX != food.x || snakeY != food.y){
        snake.pop()
        if(snake.length > 10){
            snake = snake.slice(0, -1)
        }
    }else{
        food.x = Math.floor(Math.random() * 15) * px;
        food.y = Math.floor(Math.random() * 15) * px;
    }


    const sheadSnake = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(sheadSnake);
    console.log(snake.length);


}

const gameInit = motor()
