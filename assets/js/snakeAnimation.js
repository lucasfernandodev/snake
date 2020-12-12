export default function snakeAnimation() {

    const canvas = document.querySelector('.screen');
    const ctx = canvas.getContext('2d');
    const px = 15;

    canvas.width = 30 * 15;
    canvas.height = 30 * 15;


    ctx.fillStyle = " hsl(148, 71%, 64%)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


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
        const centerX = Math.round((canvas.width - snakeLogo[0].length) / 4);
        const centerY = Math.round((canvas.height - snakeLogo.length) / 4);

        // desenha a imagem
        for (let i = 0; i < snakeLogo.length; i++) {
            const linha = snakeLogo[i];

            for (let c = 0; c < linha.length; c++) {

                if (linha[c] != 0) {

                    if (linha[c] == 2) {
                        ctx.fillStyle = colors.black;
                        ctx.fillRect(centerX + (c * px), centerY + (i * px), px, px);
                    } else {

                        if (linha[c] == 4) {
                            ctx.fillStyle = colors.lightgreen;
                            ctx.fillRect(centerX + (c * px), centerY + (i * px), px, px);
                        } else {
                            if (linha[c] == 6) {
                                ctx.fillStyle = colors.green;
                                ctx.fillRect(centerX + (c * px), centerY + (i * px), px, px);
                            } else {
                                if (linha[c] == 8) {
                                    ctx.fillStyle = colors.pink;
                                    ctx.fillRect(centerX + (c * px), centerY + (i * px), px, px);
                                } else {
                                    ctx.fillStyle = colors.white;
                                    ctx.fillRect(centerX + (c * px), centerY + (i * px), px, px);
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