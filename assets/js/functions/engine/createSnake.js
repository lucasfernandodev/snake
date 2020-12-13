const createSnake = (objCanvas, snake) => {

    const { _configScreen, context } = objCanvas;

    const { px } = _configScreen;

    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "#20bf6b";
        context.fillRect(snake[i].x, snake[i].y, px - 1, px - 1);
    }
}

export default createSnake;
