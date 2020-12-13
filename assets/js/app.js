// - TEM QUE TER OPÇOES
// -- PODE-SE ALTERAR O ESTADO DA PAREDE DE TELEPORT PARA FECHADO (ONDE A COBRINHA BATE E VOLTA)
// - EVITAR QUE AS FRUTINHAS NASCEM NO CORPO DA COBRINHA
// EVITAR QUE A COBRINHA FIQUE MAIOR QUE O CANVAS
// ADICIONAR PONTUAÇÕES
// TER 3 NIVEIS
// ADICIONAR START/STOP

// import snakeAnimation from "./snakeAnimation.js";
import createScreen from './functions/tela/createScreen.js';
import _configScreen from './functions/tela/configScreen.js'
import engine from './engine.js';

const canvas = document.querySelector('.tela');

const creatCanvas = createScreen('.screen', _configScreen);
const context = creatCanvas.ctx;


const jogo = engine({_configScreen, context})
jogo.inital();

const newGamer = document.querySelector('.newGame');
newGamer.addEventListener('click', () => {
  
    jogo.start();


    // const retorno = jogo.start({})
    console.log('casa')

})

// const gameInit = motor()
