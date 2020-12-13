let img = new Image();
img.src = './assets/img/orange.svg';

const createFood = (objCanvas, food) => {

    const { _configScreen, context } = objCanvas;

    const { px } = _configScreen;

    context.drawImage(img, food.x, food.y, px, px);

};

export default createFood;