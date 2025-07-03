const db = require('../db');

async function buscarProdutos() {
    const resultado = await db.query('SELECT * FROM produtos ');
    return resultado.rows;
    
}

async function deletarProduto(event, codproduto) {
    event.preventDefault();
    const resultado = await db.query('DELETE FROM produtos WHERE codproduto = $1', [codproduto]);
    return resultado.rows;
}

async function atualizarProduto(event, codproduto, marca, valor, estoque, tipo, cor, nome, ativo_inativo, tamanho) {
    const resultado = await db.query(
        'UPDATE produtos SET marca = $2, valor = $3, estoque = $4, tipo = $5, cor = $6, nome = $7, "ativo_inativo" = $8, tamanho = $9 WHERE codproduto = $1',
        [codproduto, marca, valor, estoque, tipo, cor, nome, ativo_inativo, tamanho]
    );
    return resultado.rows;
}
async function adicionarProduto(event, marca, valor, estoque, tipo, cor, nome, ativo_inativo, tamanho) {
    const resultado = await db.query(
        `INSERT INTO produtos (marca, valor, estoque, tipo, cor, nome, ativo_inativo, tamanho)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [marca, valor, estoque, tipo, cor, nome, ativo_inativo, tamanho]
    );
    return resultado.rows;
}


module.exports = {
    buscarProdutos,
    deletarProduto,
    atualizarProduto,
    adicionarProduto
};