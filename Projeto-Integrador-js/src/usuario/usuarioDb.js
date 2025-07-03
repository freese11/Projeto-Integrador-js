const db = require('../db');

async function buscarUsuario() {
   const resultado = await db.query('SELECT * FROM usuarios ');
    return resultado.rows;
}

module.exports = {
   buscarUsuario
};