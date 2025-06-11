const {BrowserWindow} = require('electron')
const path = require('path')


let janelaPrincipal;

function createMainWindow() {
     janelaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
 
    janelaPrincipal.loadFile('./src/index.html');

    janelaPrincipal.on('closed', () => {
        janelaPrincipal = null;
    });

    return janelaPrincipal;
}


function getJanelaPrincipal(){
    return janelaPrincipal;
}


module.exports = {
    createMainWindow,
    getJanelaPrincipal
};