const email =document.getElementById('email')
const senha =document.getElementById('senha')
const btn_acessar =document.getElementById('acessar')
const msg = document.getElementById('msg')

btn_acessar.addEventListener('click',validarLogin)
async function validarLogin() {
    const retorno = await window.api.validarLogin(email.value.toLowerCase(), senha.value);
    console.log(retorno.perfil);
    if (retorno && retorno.perfil == 'adm') {
      localStorage.setItem('perfil', retorno.perfil)
      msg.textContent = 'deu bom'
      msg.style.color = 'green'
      await window.api.abrirJanelaPrincipal()
      console.log(retorno.perfil)
  }

  else if(retorno && retorno.perfil == 'user'){
      localStorage.setItem('perfil', retorno.perfil)
      msg.textContent = 'deu bom, user'
      await window.api.abrirJanelaPrincipal()
      console.log(retorno.perfil)
  }

}