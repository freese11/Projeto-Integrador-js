const db = require('../db');

async function validarLogin(event, email, senha) {

    const resultado = await db.query('SELECT * FROM usuarios where email = $1 and senha = $2', [email, senha])

    if (resultado.rows.length > 0) {
        return resultado.rows[0]; // Retorna o usuário encontrado
    }
    return false
}



module.exports = {
    validarLogin     
    
}