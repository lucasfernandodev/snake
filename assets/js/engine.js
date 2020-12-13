import screenInitial from './functions/screen/screenInitial.js';
import clear from './functions/clear.js';
import screenEnd from './functions/screen/screenEnd.js';

import createBg from './functions/engine/createBg.js';
import createSnake from './functions/engine/createSnake.js';
import createFood from './functions/engine/createFood.js';

export default function engine(objCanvas, input) {
    document.addEventListener('keydown', listenerKeiboard)
    const { _configScreen, context } = objCanvas;

    const { col, row, px, canvasWidth, canvasHeight } = _configScreen;
    console.log(context)

    let score = 0;
    let loop;
    let direction;
    let gamerover;

    let snake = [];

    snake[0] = {
        x: 8 * 30,
        y: 8 * 30
    }

    let food = {
        x: Math.floor(Math.random() * col) * px,
        y: Math.floor(Math.random() * row) * px,
    };




    function inital() {
        screenInitial(objCanvas);
    }


    function listenerKeiboard(event) {
        event.preventDefault();

        if (!event.key) return;
        if (snake[0].y < 0 || snake[0].y >= canvasHeight || snake[0].x < 0 || snake[0].x >= canvasWidth) return;
        setDirectionSnakeMove(event.key);
    }

    function setDirectionSnakeMove(key) {
        const moveAccepted = [
            'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'
        ]

        for (let i = 0; i < moveAccepted.length; i++) {
            if (key === moveAccepted[i]) {
                direction = key
            }
        }
    }

    function didThePlayeDie() {
        for (let i = 1; i < snake.length; i++) {

            if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
                let salveScore = score;

                score = 0;
                snake.length = 0;
                direction = 0;
                gamerover = true
                snake[0] = {
                    x: 8 * px,
                    y: 8 * px
                }


                clearInterval(loop)
                clear(objCanvas);
                screenEnd(objCanvas, salveScore)
            };

        };
    }

    function teleportsWhenItReachesTheWall() {

        if (snake[0].y < 0 && direction == 'ArrowUp') {
            snake[0].y = canvasHeight;
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
    }


    function teste() {



        didThePlayeDie()

        if (gamerover == true) return 'playedie';

        teleportsWhenItReachesTheWall();

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        createBg(objCanvas);

        createSnake(objCanvas, snake);

        createFood(objCanvas, food);




        if (direction == 'ArrowUp') snakeY -= px;
        if (direction == 'ArrowRight') snakeX += px;
        if (direction == 'ArrowDown') snakeY += px;
        if (direction == 'ArrowLeft') snakeX -= px;



        if (snakeX == food.x && snakeY == food.y) {
            score++;
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

    }

    function start() {

        loop = setInterval(() => {
            const retorno = teste();
            if(retorno == 'playedie'){
                gamerover = false
            }
        }, 100);

        loop
    }


    return {
        inital,
        start
    }
};