export default function screenEnd(objCanvas, score){
    const { _configScreen, context } = objCanvas;

    const { col, row, px, canvasWidth, canvasHeight } = _configScreen;
    console.log(context)

    // const centerX = Math.round(canvasWidth / 4);
    // const centerY = Math.round((canvasHeight - 50) / 2);

    context.fillStyle = "hsl(0, 100%, 65%)";
    context.font = '78px VT323';
    context.textAlign="center";
    context.textBaseline="center";
    context.fillText('Gamer over', (canvasWidth / 2), ((canvasHeight + 28) / 2));

    context.fillStyle = "hsl(0, 100%, 65%)";
    context.font = '42px VT323';
    context.fillText(`${score} Pontos`, (canvasWidth / 2), (canvasHeight / 2)  - 40);

};