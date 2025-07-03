const { contextBridge, ipcRenderer } = require("electron");

function registrarDialogAlert(mensagem){
    ipcRenderer.invoke("dialog-alert", mensagem)
}
function registrarDialogConfirm(mensagem){
    ipcRenderer.invoke("dialog-confirm", mensagem)
}

// função de cadastro
function adicionarCadastro(nome, email, numero, senha, perfil) {
  ipcRenderer.invoke("cadastro-usuario", nome, email, numero, senha, perfil);
}
function abrirJanelaCadastro() {
  return ipcRenderer.send("abrir-cadastro");
}

// Funções de Cliente
function BuscarClientes() {
  return ipcRenderer.invoke("buscar-clientes");
}
function adicionarCliente(nome, email, telefone) {
  return ipcRenderer.invoke("adicionar-cliente", nome, email, telefone);
}

function atualizarCliente(codcliente, nome, email, telefone) {
  return ipcRenderer.invoke(
    "atualizar-cliente",
    codcliente,
    nome,
    email,
    telefone
  );
}

function deletarCliente(codcliente) {
  return ipcRenderer.invoke("deletar-cliente", codcliente);
}

// Funções de Produto
function buscarProdutos() {
  return ipcRenderer.invoke("buscar-produtos");
}

function adicionarProduto(
  codproduto,
  marca,
  valor,
  estoque,
  tipo,
  cor,
  nome,
  ativoInativo,
  tamanho
) {
  return ipcRenderer.invoke(
    "adicionar-produto",
    codproduto,
    marca,
    valor,
    estoque,
    tipo,
    cor,
    nome,
    ativoInativo,
    tamanho
  );
}

function atualizarProduto(
  codproduto,
  marca,
  valor,
  estoque,
  tipo,
  cor,
  nome,
  ativoInativo,
  tamanho
) {
  return ipcRenderer.invoke(
    "atualizar-produto",
    codproduto,
    marca,
    valor,
    estoque,
    tipo,
    cor,
    nome,
    ativoInativo,
    tamanho
  );
}

function deletarProduto(codproduto) {
  return ipcRenderer.invoke("deletar-produto", codproduto);
}

// Funções de Usuário
function buscarUsuario() {
  return ipcRenderer.invoke("buscar-usuario");
}

// Funções de Venda
function BuscarVenda() {
  return ipcRenderer.invoke("buscar-venda");
}

function deletarVenda(codvenda) {
  return ipcRenderer.invoke("deletar-venda", codvenda);
}

function atualizarVenda(
  codvenda,
  codcliente,
  codproduto,
  codusuario,
  status,
  valortotal,
  data
) {
  return ipcRenderer.invoke(
    "atualizar-venda",
    codvenda,
    codcliente,
    codproduto,
    codusuario,
    status,
    valortotal,
    data
  );
}

function adicionarVenda(
  codcliente,
  codproduto,
  codusuario,
  status,
  valortotal,
  data
) {
  return ipcRenderer.invoke(
    "adicionar-venda",
    codcliente,
    codproduto,
    codusuario,
    status,
    valortotal,
    data
  );
}

// Função para abrir janela de venda
function abrirVenda() {
  return ipcRenderer.send("abrir-venda");
}

function abrirProduto() {
  return ipcRenderer.send("abrir-produto");
}

function abrirCliente() {
  return ipcRenderer.send("abrir-cliente");
}

function validarLogin(usuario, senha) {
  return ipcRenderer.invoke("validar-login", usuario, senha);
}
function abrirJanelaPrincipal() {
  return ipcRenderer.send("abrir-menu");
}

// Expondo todas as funções de uma vez só (EVITA sobrescrever)
contextBridge.exposeInMainWorld("api", {
  //api de cadastro
  adicionarCadastro,
  abrirJanelaCadastro,

  BuscarClientes: BuscarClientes,
  adicionarCliente,
  atualizarCliente,
  deletarCliente,
  abrirCliente: abrirCliente,

  buscarProdutos: buscarProdutos,
  adicionarProduto: adicionarProduto,
  atualizarProduto: atualizarProduto,
  deletarProduto: deletarProduto,

  buscarUsuario: buscarUsuario,
  abrirVenda: abrirVenda,
  BuscarVenda: BuscarVenda,
  adicionarVenda: adicionarVenda,
  atualizarVenda: atualizarVenda,
  deletarVenda: deletarVenda,

  abrirJanelaPrincipal: abrirJanelaPrincipal,
  validarLogin,
  registrarDialogAlert,
  registrarDialogConfirm,
  abrirProduto: abrirProduto,
});
