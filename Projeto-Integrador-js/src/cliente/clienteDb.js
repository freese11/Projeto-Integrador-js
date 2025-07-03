const db = require('../db');

async function BuscarClientes() {
    const resultado = await db.query('SELECT * FROM clientes');
    return resultado.rows;
}

async function adicionarCliente(event, nome, email, telefone) {
    const resultado = await db.query(
        'INSERT INTO clientes (nome, email, telefone) VALUES ($1, $2, $3)',
        [nome, email, telefone]
    );
    return resultado.rows;
}

async function atualizarCliente(event, codcliente, nome, email, telefone) {
    const resultado = await db.query(
        'UPDATE clientes SET nome = $2, email = $3, telefone = $4 WHERE codcliente = $1',
        [codcliente, nome, email, telefone]
    );
    return resultado.rows;
}

async function deletarCliente(event, codcliente) {
    const resultado = await db.query(
        'DELETE FROM clientes WHERE codcliente = $1',
        [codcliente]
    );
    return resultado.rows;
}

module.exports = {
    BuscarClientes,
    adicionarCliente,
    atualizarCliente,
    deletarCliente
};