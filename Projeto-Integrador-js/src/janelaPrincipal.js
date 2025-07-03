const { BrowserWindow } = require('electron')
const path = require('path')

let janelaLogin;
let janelaPrincipal;
let janelaPrincipalUser;

function createMainWindow() {
    janelaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
        icon : path.join(__dirname, 'img', 'escudoVermelho.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    janelaPrincipal.loadFile('./src/index.html');

    janelaPrincipal.on('closed', () => {
        janelaPrincipal = null;
    });
janelaLogin.close();    

    return janelaPrincipal;
}


function createMainWindowUser() {
    janelaPrincipalUser = new BrowserWindow({
        width: 800,
        height: 600,
        icon : path.join(__dirname, 'img', 'escudoVermelho.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    janelaPrincipalUser.loadFile('./src/index.html');

    janelaPrincipalUser.on('closed', () => {
        janelaPrincipalUser = null;
    });
janelaLogin.close();    

    return janelaPrincipalUser;
}
function getJanelaPrincipalUser() {
    return janelaPrincipalUser;
}

function getJanelaPrincipal() {
    return janelaPrincipal;
}

function createLoginWindon() {
    janelaLogin = new BrowserWindow({
        width: 500,
        height: 400,
        icon : path.join(__dirname, 'img', 'escudoVermelho.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }

    })
    janelaLogin.loadFile('./src/login/login.html')
}

function getJanelaLogin(){
    return janelaLogin;

}

module.exports = {
    createMainWindow,
    getJanelaPrincipal,
    createLoginWindon,
    createMainWindowUser,
    getJanelaPrincipalUser,
    getJanelaLogin,
}