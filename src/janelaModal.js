const { BrowserWindow } = require('electron')
const path = require('path')
const { getJanelaPrincipal } = require('./janelaPrincipal')

function criarJanelaModal(telaPai,arquivohtml) {
    const janela = new BrowserWindow({
        width: 800,
        height: 600,
        
        modal: true,
        parent: telaPai,


        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }

    })

    janela.loadFile(arquivohtml)

    return janela;
}

function modalAbrirVenda() {
let mainWindow = getJanelaPrincipal();
    if (mainWindow) {
        criarJanelaModal(mainWindow, './src/venda/venda.html');
    } else {
        console.error("Janela principal não encontrada.");
    }
}

module.exports = {
    criarJanelaModal,
    modalAbrirVenda
};