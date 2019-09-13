/*jshint esversion:6 */
/*

Operadores de consulta de comparação ¶
Para comparação de diferentes valores do tipo BSON, consulte a ordem de comparação do BSON especificada .

Nome	Descrição
$eq	Corresponde a valores iguais a um valor especificado.
$gt	Corresponde a valores maiores que um valor especificado.
$gte	Corresponde a valores maiores ou iguais a um valor especificado.
$in	Corresponde a qualquer um dos valores especificados em uma matriz.
$lt	Corresponde a valores inferiores a um valor especificado.
$lte	Corresponde a valores menores ou iguais a um valor especificado.
$ne	Corresponde a todos os valores que não são iguais a um valor especificado.
$nin	Corresponde a nenhum dos valores especificados em uma matriz.

*/
db.produtos.find($and : [{preço: {$gte: 2.3}, {preco: {$lte: 9.55}}}]).pretty();