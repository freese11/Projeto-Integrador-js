const { BrowserWindow } = require('electron')
const path = require('path')
const { getJanelaPrincipal, getJanelaPrincipalUser, createLoginWindon, getJanelaLogin } = require('./janelaPrincipal')

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
let mainWindow2 = getJanelaPrincipalUser(); // Obtém a janela principal do usuário
    mainWindow = mainWindow || mainWindow2; // Prioriza a janela do usuário,
    if (mainWindow) {
        criarJanelaModal(mainWindow, './src/venda/venda.html');
    } else {
        console.error("Janela principal não encontrada.");
    }
}


function modalAbrirProduto(event) {
   let mainWindow2 = getJanelaPrincipalUser(); // Obtém a janela principal do usuário
    let mainWindow = getJanelaPrincipal(); // Obtém a janela principal existente
    mainWindow = mainWindow || mainWindow2; // Prioriza a janela do usuário, se existir
    if (mainWindow) {
        criarJanelaModal(mainWindow, './src/produto/produto.html');
    } else {
        console.warn('Não foi possível abrir a modal: Janela principal não encontrada.');
    }
}
function modalAbrirCliente(event) {
    let mainWindow2 = getJanelaPrincipalUser(); // Obtém a janela principal do
    let mainWindow = getJanelaPrincipal(); // Obtém a janela principal existente
    mainWindow = mainWindow || mainWindow2; // Prioriza a janela do usuário,
    if (mainWindow) {
        criarJanelaModal(mainWindow, './src/cliente/cliente.html');
    } else {
        console.warn('Não foi possível abrir a modal: Janela principal não encontrada.');
    }
}


function modalAbrirCadastro(event){
    let windowLogin = getJanelaLogin(); // Obtém a janela principal existente
    if (windowLogin) {
        criarJanelaModal(windowLogin, './src/cadastro/cadastro.html');
    } else {
        console.warn('Não foi possível abrir a modal: Janela principal não encontrada.');
    }
}
function modalAbrirCliente(event) {
    let mainWindow2 = getJanelaPrincipalUser(); // Obtém a janela principal do
    let mainWindow = getJanelaPrincipal(); // Obtém a janela principal existente
    mainWindow = mainWindow || mainWindow2; // Prioriza a janela do usuário,
    if (mainWindow) {
        criarJanelaModal(mainWindow, './src/cliente/cliente.html');
    } else {
        console.warn('Não foi possível abrir a modal: Janela principal não encontrada.');
    }
}



module.exports = {
    criarJanelaModal,
    modalAbrirVenda,
    modalAbrirProduto,
    modalAbrirCliente,
    modalAbrirCadastro
};