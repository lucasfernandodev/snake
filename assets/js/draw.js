import ctx from './config/ctx.js';

const draw = (color, [x, y, width, height]) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width - 1, height - 1);
}

export default draw;