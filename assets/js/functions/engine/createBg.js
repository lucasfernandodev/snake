const createBg = (objCanvas) => {

    const { _configScreen, context } = objCanvas;

    const {canvasWidth, canvasHeight } = _configScreen;

    context.fillStyle = "rgb(255,255,255)";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
}

export default createBg;