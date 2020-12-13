const createScreen = (idScreen, config) => {

    const canvas = document.querySelector(`${idScreen}`);
    const ctx = canvas.getContext('2d');

    const {col, row, px} = config;
    console.log(canvas)
    
    canvas.width = col * px;
    canvas.height = row * px;

    return {
        ctx
    };
}

export default createScreen;