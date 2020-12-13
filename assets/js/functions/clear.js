export default function clear (objCanvas){
    const {_configScreen, context} = objCanvas;
    const {canvasWidth, canvasHeight } = _configScreen;

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "rgb(255,255,255)";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
}