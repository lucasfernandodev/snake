import createScreen from './screen.js';
import _configScreen from './functions/screen/config.js'
import engine from './engine.js';


const creatCanvas = createScreen('.screen', _configScreen);
const context = creatCanvas.ctx;


const jogo = engine({_configScreen, context})
jogo.inital();

const newGamer = document.querySelector('.newGame');
newGamer.addEventListener('click', () => {
  
    jogo.start();

});