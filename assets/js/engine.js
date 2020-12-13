import criarLogo from './functions/tela/criarLogo.js';
import clearScreen from './functions/tela/clearScreen.js';
import screenEnd from './functions/tela/screenEnd.js';

export default function engine(objCanvas, input) {

    const { _configScreen, context } = objCanvas;

    const { col, row, px, canvasWidth, canvasHeight } = _configScreen;
    console.log(context)

    let score = 0;

    let img = new Image();
    img.src = './assets/img/orange.svg';

    let end;


    function inital() {
        criarLogo(objCanvas);
    }

    function clear() {
        clearScreen(objCanvas)
    }


    var direction;

    let snake = [];
    snake[0] = {
        x: 8 * 30,
        y: 8 * 30
    }

    let food = {
        x: Math.floor(Math.random() * px) * px,
        y: Math.floor(Math.random() * px) * px
    }


    document.addEventListener('keydown', update)

    function criarBg() {
        context.fillStyle = "rgba(2550,255,255,0.5)";
        context.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    function criarSnake() {
        for (let i = 0; i < snake.length; i++) {
            context.fillStyle = "#20bf6b";
            context.fillRect(snake[i].x, snake[i].y, px - 1, px - 1);
        }
    }

    function desenhaFruta() {
        context.drawImage(img, food.x, food.y, px, px);
        console.log(img)

    }

    function moveSnake(key) {
        const moveAccepted = [
            'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'
        ]

        for (let i = 0; i < moveAccepted.length; i++) {
            if (key === moveAccepted[i]) {
                direction = key
            }
        }
    }

    function listenerKeiboard(key) {
        if (!key) return;
        if (snake[0].y < 0 || snake[0].y >= canvasHeight || snake[0].x < 0 || snake[0].x >= canvasWidth) return;
        moveSnake(key);
    }

    function update(event) {
        event.preventDefault();

        listenerKeiboard(event.key);
    }

    let gamerover;

    function teste(){
        clear();



        for (let i = 1; i < snake.length; i++) {


            if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
                // return clearInterval(start);
                snake.length = 0;
                snake[0] = {
                    x: 8 * px,
                    y: 8 * px
                }
                direction = 0;
                gamerover = true

                clearInterval(end)
                clear();
                screenEnd(objCanvas, score)
            }

        }

        if(gamerover == true){
            gamerover = false
            return
        };



        if (snake[0].y < 0 && direction == 'ArrowUp') {
            console.log('fire', snake[0].y)
            snake[0].y = canvasHeight;
            console.log('fire', snake[0].y)
        }

        if (snake[0].x >= canvasWidth && direction == 'ArrowRight') {
            snake[0].x = 0
        }

        if (snake[0].y >= canvasHeight && direction == 'ArrowDown') {
            snake[0].y = 0;
        }

        if (snake[0].x < 0 && direction == 'ArrowLeft') {
            snake[0].x = canvasWidth
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
        console.log(`A posição Y da cobra é: ${snakeY} e a posição y da fruta e ${food.y}]`);
        if(snakeX == food.x && snakeY == food.y){
            score++;
            console.log(score)
        }


        if (snakeX != food.x || snakeY != food.y) {
            snake.pop()
            if (snake.length > 10) {
                snake = snake.slice(0, -1)

            }

        } else {
            food.x = Math.floor(Math.random() * col) * px;
            food.y = Math.floor(Math.random() * row) * px;
        }




        const sheadSnake = {
            x: snakeX,
            y: snakeY
        }

        snake.unshift(sheadSnake);
        console.log('end ta perto')


    }

    function start() {
        
        end = setInterval(() => {
            teste()
        }, 100);
        end
        console.log('fire firido')
    }


    return {
        inital,
        start
    }
};

// const canvas = document.querySelector('.screen');
// const context = canvas.getContext('2d');
// const px = 30;


// let img = new Image();
// img.src = './assets/img/orange.svg';

// canvasWidth = 15 * 30;
// canvasHeight = 15 * 30;







// setInterval(() => {
//     motor();
// }, 100);

