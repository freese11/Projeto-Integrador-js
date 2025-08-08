const modalNome = document.getElementById("nome");
const modalEmail = document.getElementById("email");
const modalSenha = document.getElementById("senha");
const modalNumero = document.getElementById("numero");
const botao = document.getElementById("btn-add");


botao.addEventListener("click", adicionarUser);


async function adicionarUser() {
  const nome = modalNome.value;
  const email = modalEmail.value;
  const senha = modalSenha.value;
  const numero = modalNumero.value;
  if (!nome || !email || !senha || !numero) {
    await window.api.registrarDialogAlert("Insira todas as informações");
  } else {
    await window.api.adicionarCadastro(nome, email, numero, senha);
    await window.api.registrarDialogAlert(`Cadastro realizado com sucesso!`);
    console.log(`usuario ${nome} inserido com sucesso.`)
  }
}
