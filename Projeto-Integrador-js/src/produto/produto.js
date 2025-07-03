

const tabelaProduto =  document.getElementById("tabelaTableDados");
const ModalCodproduto = document.getElementById("ModalCodproduto");
const ModalMarca = document.getElementById("ModalMarca");
const ModalValor= document.getElementById("ModalValor");
const Modal = document.getElementById("ModalValor");
const ModalEstoque = document.getElementById("ModalEstoque");
const ModalTipo = document.getElementById("ModalTipo");
const ModalCor = document.getElementById("ModalCor");
const modalNome = document.getElementById("ModalNome");
const modalAtivoInativo = document.getElementById("ModalAtivoInativo");
const modalTamanho = document.getElementById("ModalTamanho");
//botao


const botaoSalvaProduto = document.getElementById("btn-salvar");
const botaoExcluirProduto = document.getElementById("btn-excluir");
const botaoLimparProduto = document.getElementById("btn-limpar");

//eventos
botaoExcluirProduto.addEventListener("click", excluirProduto);
botaoSalvaProduto.addEventListener("click", salvarProduto);
botaoLimparProduto.addEventListener("click", limparProduto);


function mostrarDetalhesProduto(codproduto, marca, valor,  estoque, tipo, cor, nome, ativo_inativo, tamanho) {
    ModalCodproduto.textContent = codproduto;
    ModalMarca.textContent = marca;
    ModalValor.textContent = valor;
    ModalEstoque.textContent = estoque;
    ModalTipo.textContent = tipo;
    ModalCor.textContent = cor;
    modalNome.textContent = nome;
    modalAtivoInativo.textContent = ativo_inativo;
    modalTamanho.textContent = tamanho;
}

async function excluirProduto() {
    const codproduto = ModalCodproduto.value;
    const resultado = await window.api.deletarProduto(codproduto);
  console.log(resultado)
    mostrarDetalhesProduto("", "", "", "", "", "", "", "", "", "");
    carregarProdutos();
}

async function atualizarProduto() {
    const codproduto = ModalCodproduto.value;
    const marca = ModalMarca.value;
    const valor = ModalValor.value;
    const estoque = ModalEstoque.value;
    const tipo = ModalTipo.value;
    const cor = ModalCor.value;
    const nome = modalNome.value;
    const ativo_inativo = modalAtivoInativo.value;
    const tamanho = modalTamanho.value;

  const retorno =  await window.api.atualizarProduto(codproduto, marca, valor, estoque, tipo, cor, nome, ativo_inativo, tamanho);
   console.log(retorno)
  carregarProdutos();
}async function adicionarProduto() {
    const marca = ModalMarca.value;
    const valor = ModalValor.value;
    const estoque = ModalEstoque.value;
    const tipo = ModalTipo.value;
    const cor = ModalCor.value;
    const nome = modalNome.value;
    const ativo_inativo = modalAtivoInativo.value;
    const tamanho = modalTamanho.value;

    const retorno = await window.api.adicionarProduto(
        marca, valor, estoque, tipo, cor, nome, ativo_inativo, tamanho
    );
    console.log(retorno);
    carregarProdutos();
}

function limparProduto() {
    ModalCodproduto.value = "";
    ModalMarca.value = "";
    ModalValor.value = "";
    ModalEstoque.value = "";
    ModalTipo.value = "";
    ModalCor.value = "";
    modalNome.value = "";
    modalAtivoInativo.value = "";
    modalTamanho.value = "";
}
function salvarProduto() {
    const codproduto = ModalCodproduto.value;
    if (codproduto) {
        atualizarProduto();
    } else {
        adicionarProduto(); // agora sem passar codproduto
    }
}
async function carregarProdutos() {
  
    const listaProduto = await window.api.buscarProdutos();
    tabelaProduto.innerHTML = ""; 

if (listaProduto.length > 0) {
        listaProduto.forEach(criarLinhaProduto);
    } else {
        tabelaProduto.textContent = "Nenhum produto encontrado.";
    }
    let clienteNaoPode = localStorage.getItem("perfil");
    if (clienteNaoPode !== 'adm') {
        botaoExcluirProduto.disabled = true;
        botaoSalvaProduto.disabled = true;
    }

    lucide.createIcons();
    };
    
function criarLinhaProduto(produto) {
    const linha = document.createElement("tr");

const celulaCodproduto = document.createElement("td");
    celulaCodproduto.textContent = produto.codproduto;
    linha.appendChild(celulaCodproduto);

    // nome
    const celulanome = document.createElement("td");
    celulanome.textContent = produto.nome;
    linha.appendChild(celulanome);

    // tipo
    const celulaTipo = document.createElement("td");
    celulaTipo.textContent = produto.tipo;
    linha.appendChild(celulaTipo);

    // valor
    const celulaPreco = document.createElement("td");
    celulaPreco.textContent = produto.valor;
    linha.appendChild(celulaPreco);

    // marca
    const celulaMarca = document.createElement("td");
    celulaMarca.textContent = produto.marca;
    linha.appendChild(celulaMarca);

    // estoque
    const celulaEstoque = document.createElement("td");
    celulaEstoque.textContent = produto.estoque;
    linha.appendChild(celulaEstoque);

    // cor
    const celulaCor = document.createElement("td");
    celulaCor.textContent = produto.cor;
    linha.appendChild(celulaCor);

    // ativo/inativo
    const celulaAtivoInativo = document.createElement("td");
    celulaAtivoInativo.textContent = produto.ativo_inativo;
    linha.appendChild(celulaAtivoInativo);

    // tamanho
    const celulaTamanho = document.createElement("td");
    celulaTamanho.textContent = produto.tamanho;
    linha.appendChild(celulaTamanho);

    // botão de editar (já existente)
    const celulaBotao = document.createElement("td");
    const botao = document.createElement("button");
    botao.textContent = "Editar";
    botao.addEventListener("click", function () {
        mostrarDetalhesProduto(
            produto.codproduto,
            produto.marca,
            produto.valor,
            produto.estoque,
            produto.tipo,
            produto.cor,
            produto.nome,
            produto.ativo_inativo,
            produto.tamanho
        );
    });

    celulaBotao.appendChild(botao);
    linha.appendChild(celulaBotao);

    tabelaProduto.appendChild(linha);
}

function mostrarDetalhesProduto(codproduto, marca, valor, estoque, tipo, cor, nome, ativo_inativo, tamanho) {
    ModalCodproduto.value = codproduto;
    ModalMarca.value = marca;
    ModalValor.value = valor;
    ModalEstoque.value = estoque;
    ModalTipo.value = tipo;
    ModalCor.value = cor;
    modalNome.value = nome;
    modalAtivoInativo.value = ativo_inativo;
    modalTamanho.value = tamanho;
}
carregarProdutos();
