const tabelaCliente = document.getElementById("tabelaTableDados");
const modalCodcliente = document.getElementById("ModalCodcliente");
const modalNome = document.getElementById("ModalNome");
const modalEmail = document.getElementById("ModalEmail");
const modalTelefone = document.getElementById("ModalTelefone");

const botaoSalvarCliente = document.getElementById("btn-salvar");
const botaoExcluirCliente = document.getElementById("btn-excluir");
const botaoLimparCliente = document.getElementById("btn-limpar");

botaoExcluirCliente.addEventListener("click", excluirCliente);
botaoSalvarCliente.addEventListener("click", salvarCliente);
botaoLimparCliente.addEventListener("click", limparCliente);

function mostrarDetalhesCliente(codcliente, nome, email, telefone) {
    modalCodcliente.value = codcliente;
    modalNome.value = nome;
    modalEmail.value = email;
    modalTelefone.value = telefone;
}

async function excluirCliente() {
    const codcliente = modalCodcliente.value;
    await window.api.deletarCliente(codcliente);
    mostrarDetalhesCliente("", "", "", "");
    carregarClientes();
}

async function atualizarCliente() {
    const codcliente = modalCodcliente.value;
    const nome = modalNome.value;
    const email = modalEmail.value;
    const telefone = modalTelefone.value;

    await window.api.atualizarCliente(codcliente, nome, email, telefone);
    carregarClientes();
}

async function adicionarCliente() {
    const nome = modalNome.value;
    const email = modalEmail.value;
    const telefone = modalTelefone.value;

    await window.api.adicionarCliente(nome, email, telefone);
    carregarClientes();
}

function limparCliente() {
    modalCodcliente.value = "";
    modalNome.value = "";
    modalEmail.value = "";
    modalTelefone.value = "";
}

function salvarCliente() {
    const codcliente = modalCodcliente.value;
    if (codcliente) {
        atualizarCliente();
    } else {
        adicionarCliente();
    }
}

async function carregarClientes() {
    const listaCliente = await window.api.BuscarClientes();
    tabelaCliente.innerHTML = "";

    if (listaCliente.length> 0) {
        listaCliente.forEach(criarLinhaCliente);
    } else {
        tabelaCliente.textContent = "Nenhum cliente encontrado.";
    }
    let clienteNaoPode = localStorage.getItem("perfil");
    if (clienteNaoPode !== 'adm') {
        botaoExcluirCliente.disabled = true;
        botaoSalvarCliente.disabled = true;
    }
    lucide.createIcons();
}

function criarLinhaCliente(cliente) {
    const linha = document.createElement("tr");

    const celulaCodcliente = document.createElement("td");
    celulaCodcliente.textContent = cliente.codcliente;
    linha.appendChild(celulaCodcliente);

    const celulaNome = document.createElement("td");
    celulaNome.textContent = cliente.nome;
    linha.appendChild(celulaNome);

    const celulaEmail = document.createElement("td");
    celulaEmail.textContent = cliente.email;
    linha.appendChild(celulaEmail);

    const celulaTelefone = document.createElement("td");
    celulaTelefone.textContent = cliente.telefone;
    linha.appendChild(celulaTelefone);

    const celulaBotao = document.createElement("td");
    const botao = document.createElement("button");
    botao.textContent = "Editar";
    botao.addEventListener("click", () => {
        mostrarDetalhesCliente(cliente.codcliente, cliente.nome, cliente.email, cliente.telefone);
    });
    celulaBotao.appendChild(botao);
    linha.appendChild(celulaBotao);

    tabelaCliente.appendChild(linha);
}

carregarClientes();