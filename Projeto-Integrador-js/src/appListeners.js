const { contextBridge, ipcRenderer, ipcMain } = require('electron');

const {createMainWindow,createMainWindowUser} = require('./janelaPrincipal');


const {
    atualizarVenda,
    BuscarVenda,
    deletarVenda,
    adicionarVenda,
    
} = require('./venda/vendaDb');

const {
    buscarProdutos,
    adicionarProduto,
    atualizarProduto,
    deletarProduto

} = require('./produto/produtoDb');

const {
 buscarUsuario
} = require ('./usuario/usuarioDb')


const {
    validarLogin
}= require('./login/loginDB');

const {
modalAbrirVenda,
    modalAbrirProduto,
    modalAbrirCliente,
    modalAbrirCadastro
} = require('./janelaModal');

const {
    mostrarAlert,
    mostrarConfirm
} = require('./dialog/dialog')

const {
    adicionarCadastro
} = require('./cadastro/cadastroDb')

function registrarJanelaDialog(){
    ipcMain.handle("dialog-alert", mostrarAlert),
    ipcMain.handle("dialog-confirm", mostrarConfirm)
}



function registrarJanelas(){
    ipcMain.on("abrir-cadastro", modalAbrirCadastro),
    ipcMain.on('abrir-venda',modalAbrirVenda),
    ipcMain.on('abrir-produto',modalAbrirProduto),
    ipcMain.on('abrir-menu',createMainWindow),
    ipcMain.on('abrir-menu-user',createMainWindowUser);
    ipcMain.on('abrir-cliente',modalAbrirCliente);
}

//function de cadastro
function registrarCadastro(){
    ipcMain.handle('cadastro-usuario', adicionarCadastro);
}


function registrarLoginHandler(){
    ipcMain.handle('validar-login',validarLogin);
}


function registrarUsuarioHandler(){
    ipcMain.handle('buscar-usuario',buscarUsuario)
 

}

function registrarProdutoHandler() {
    ipcMain.handle('buscar-produtos', buscarProdutos);
    ipcMain.handle('adicionar-produto', adicionarProduto);
    ipcMain.handle('atualizar-produto', atualizarProduto);
    ipcMain.handle('deletar-produto', deletarProduto);
}

const {
    BuscarClientes,
    adicionarCliente,
    atualizarCliente,
    deletarCliente
} = require('./cliente/clienteDb');

function registrarClienteHandler() {
    ipcMain.handle('buscar-clientes', BuscarClientes);
    ipcMain.handle('adicionar-cliente', adicionarCliente);
    ipcMain.handle('atualizar-cliente', atualizarCliente);
    ipcMain.handle('deletar-cliente', deletarCliente);
    
}

function registrarVendaHandler() {
    ipcMain.handle('buscar-venda',BuscarVenda);
    ipcMain.handle('deletar-venda', deletarVenda);
    ipcMain.handle('atualizar-venda', atualizarVenda);
    ipcMain.handle('adicionar-venda', adicionarVenda);

}



function registrarTodos() {
    registrarCadastro();
    registrarUsuarioHandler();
    registrarClienteHandler();
    registrarVendaHandler();
    registrarProdutoHandler();
    registrarLoginHandler();
    registrarJanelas();
    registrarJanelaDialog();
}

module.exports = {
    registrarTodos
};