/*jshint esversion:6 */
/*
*/
show collections

//cria collecton produtos
db.produtos.find()
db.clientes.insertOne({
    cdCliente: 1,
    mnCliente: "Bruno",
    inAtivo: 1
});
db.clientes.find().pretty()

//cria collecton vendas
db.vendas.insertOne({
    cdCliente: 1,
    produtos: [
        {cdProduto: 1},
        {cdProduto: 2},
        {cdProduto: 3},
        {cdProduto: 4},
        {cdProduto: 5}
    ]
});

db.vendas.find().pretty()
db.vendas.find({cdProdutos:1}).pretty()

/*Pt 2*/
db.clientes.find().pretty()
db.clientes.findOne()
db.clientes.findOne({}, {inAtivo: 0})

var cliente = db.clientes.findOne({}, {inAtivo: 0})

db.produtos.find().pretty()

//retorna colections com o codigo de produto menor que 2 ($lte = letter than 2)
db.produtos.find({cdProduto: {$lte:2}}).pretty()

//retorna colections com o codigo de produto menor que 2 esem o campo qualidade 
db.produtos.find({cdProduto: {$lte:2}}, {qualidade: 0 }).pretty()


//armazena o find  que colections com o codigo de produto menor que 2 esem o campo qualidade na variavel produtos
var produtos = db.produtos.find({cdProduto: {$lte:2}}, {qualidade: 0 }).pretty()

db.vendas.find().pretty()
//tabela relaciona os finds armazenados nas variaveis cliente e produtos 
db.vendas.insertOne({
    cliente: cliente,
    produtos: produtos
});




