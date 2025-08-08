const db = require("../db");

async function adicionarCadastro(event, nome, email, numero, senha, perfil) {
  if (!perfil) 
    perfil = 'user';
    const resultado = await db.query(
      "INSERT INTO public.usuarios(nome, email, numero, senha, perfil) VALUES ($1,  $2, $3, $4, $5)",
      [nome, email, numero, senha, perfil]
    );
    return resultado.rows;

}

module.exports = {
  adicionarCadastro,
};
