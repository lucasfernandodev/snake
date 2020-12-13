export default function screenInitial(objCanvas) {

    
    const {_configScreen, context} = objCanvas;
    const {px, canvasWidth, canvasHeight } = _configScreen;


    context.fillStyle = "hsl(148, 71%, 64%)";
    context.fillRect(0, 0, canvasWidth, canvasHeight);


    const drawSnakeLogo = () => {

        // 0 = transparent, 2 = preto, 4 = verde claro,  6 = verde escuro, 8 = rosa

        // imagem em formato de matriz
        const snakeLogo = [
            [0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 4, 4, 4, 4, 4, 2, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 4, 4, 4, 4, 4, 4, 2, 0, 0, 0, 0],
            [0, 0, 2, 4, 2, 4, 4, 4, 2, 4, 2, 0, 0, 0, 0],
            [0, 0, 2, 4, 2, 4, 4, 4, 2, 4, 6, 2, 0, 0, 0],
            [0, 0, 2, 8, 4, 4, 4, 4, 4, 8, 6, 2, 0, 0, 0],
            [0, 0, 0, 2, 6, 6, 6, 6, 6, 6, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
            [0, 0, 2, 2, 4, 4, 2, 4, 4, 6, 2, 2, 0, 0, 0],
            [0, 2, 4, 4, 4, 2, 4, 4, 4, 6, 2, 6, 2, 0, 0],
            [2, 4, 4, 2, 6, 6, 6, 6, 6, 2, 4, 6, 6, 2, 0],
            [2, 6, 4, 4, 2, 2, 2, 2, 2, 4, 4, 6, 2, 6, 2],
            [2, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 2, 6, 2],
            [0, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 6, 2],
            [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 0]
        ];

        const colors = {
            black: '#0a0a0a',
            pink: 'pink',
            white: 'rgb(255,255,255)',
            lightgreen: 'hsl(148, 71%, 46%)',
            green: 'rgb(32, 171, 107)',
        }

        // Calculo para posicionar a imagem no centro do canvas
        const centerX = Math.round((canvasWidth - snakeLogo[0].length) / 4);
        const centerY = Math.round((canvasHeight - snakeLogo.length) / 4);

        // desenha a imagem
        for (let i = 0; i < snakeLogo.length; i++) {
            const linha = snakeLogo[i];

            for (let c = 0; c < linha.length; c++) {

                if (linha[c] != 0) {

                    if (linha[c] == 2) {
                        context.fillStyle = colors.black;
                        context.fillRect(centerX + (c * px), centerY + (i * px), px, px);
                    } else {

                        if (linha[c] == 4) {
                            context.fillStyle = colors.lightgreen;
                            context.fillRect(centerX + (c * px), centerY + (i * px), px, px);
                        } else {
                            if (linha[c] == 6) {
                                context.fillStyle = colors.green;
                                context.fillRect(centerX + (c * px), centerY + (i * px), px, px);
                            } else {
                                if (linha[c] == 8) {
                                    context.fillStyle = colors.pink;
                                    context.fillRect(centerX + (c * px), centerY + (i * px), px, px);
                                } else {
                                    context.fillStyle = colors.white;
                                    context.fillRect(centerX + (c * px), centerY + (i * px), px, px);
                                }
                            }
                        }

                    }
                }
            }
        }

    }

    drawSnakeLogo()

}