const db = require('../db');

async function BuscarVenda() {
    const resultado = await db.query(`
        SELECT 
    vendas.codvenda,
    vendas.codcliente,
    clientes.nome AS nome_cliente,
    vendas.codproduto,
    produtos.nome AS nome_produto,
    vendas.codusuario,
    usuarios.nome AS nome_usuario,
    vendas.status,
    vendas.valortotal,
    vendas.data
FROM vendas
JOIN clientes ON vendas.codcliente = clientes.codcliente
JOIN produtos ON vendas.codproduto = produtos.codproduto
JOIN usuarios ON vendas.codusuario = usuarios.codusuario
ORDER BY vendas.codvenda;

        `);
    return resultado.rows;
}

async function deletarVenda(event, codvenda) {
    event.preventDefault();
   const resultado = await db.query('DELETE FROM vendas WHERE codvenda = $1', [codvenda]);
    return resultado.rows;
}

async function atualizarVenda(event, codvenda, codcliente, codproduto, codusuario, status, valortotal, data) {

    const resultado =await db.query(  'UPDATE vendas SET codcliente = $7, codproduto = $2, codusuario = $3, status = $4, valortotal = $5, data = $6 WHERE codvenda = $1',
        [codcliente, codproduto, codusuario, status, valortotal, data, codvenda]);
    return resultado.rows;
}

async function adicionarVenda(event, codcliente, codproduto, codusuario, status, valortotal, data) {
    console.log("Adicionando venda:", codcliente, codproduto, codusuario, status, valortotal, data);
   const resultado =  await db.query('INSERT INTO vendas (codcliente, codproduto, codusuario, status, valortotal, data) VALUES ($1, $2, $3, $4, $5, $6)',
        [codcliente, codproduto, codusuario, status, valortotal, data]);
    return resultado.rows;
}

module.exports = {
    BuscarVenda,
    deletarVenda,
    atualizarVenda,
    adicionarVenda
};