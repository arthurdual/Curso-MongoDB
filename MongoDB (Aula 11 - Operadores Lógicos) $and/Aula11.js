/*jshint esversion:6 */
/*

Lógico

$and	Associa cláusulas de consulta a uma lógica ANDretorna todos os documentos que correspondem às condições de ambas as cláusulas.
$not	Inverte o efeito de uma expressão de consulta e retorna documentos que não correspondem à expressão de consulta.
$nor	Associa cláusulas de consulta a uma lógica NORretorna todos os documentos que falham em corresponder às duas cláusulas.
$or	Associa cláusulas de consulta a uma lógica ORretorna todos os documentos que correspondem às condições de qualquer uma das cláusulas.
*/
//AND
db.inventory.find( {
   $and : [
       { $or : [ { price : 0.99 }, { price : 1.99 } ] },
       { $or : [ { sale : true }, { qty : { $lt : 20 } } ] }
   ]
} );
/*
Esta consulta selecionará todos os documentos em que:
o price valor do campo é igual a 0.99ou 1.99, e
o sale valor do campo é igual a true ou o qty valor do campo é menor que 20.
Esta consulta não pode ser construída usando uma ANDoperação implícita , porque usa o $oroperador mais de uma vez.*/


//OR
db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } );
/*
Essa consulta selecionará todos os documentos da inventorycoleção em que o quantityvalor do campo é menor 20 ou o pricevalor do campo é igual 10.
*/

//NOR
db.inventory.find( { $nor: [ { price: 1.99 }, { sale: true } ]  } )
/*
Esta consulta retornará todos os documentos que:
contém o pricecampo cujo valor não é igual 1.99 ae contém o salecampo cujo valor não é igual a true ou
conter o pricecampo cujo valor é não igual 1.99 , mas que não contêm o salecampo ou
que não conter o pricecampo , mas conter o sale campo cujo valor não é igual a true ou
que não contêm o pricecampo e que não contêm o salecampo
*/


//NOT
db.inventory.find( { price: { $not: { $gt: 1.99 } } } )
/*
Esta consulta selecionará todos os documentos da inventorycoleção em que:

o pricevalor do campo é menor ou igual a 1.99 ou
o pricecampo não existe
{ $not: { $gt: 1.99 } }é diferente do $lte operador. retorna apenas os documentos em que o campo existe e seu valor é menor ou igual a .{ $lte: 1.99 }price1.99

Lembre-se de que o $notoperador afeta apenas outros operadores e não pode verificar campos e documentos independentemente. Portanto, use o $notoperador para disjunções lógicas e o $neoperador para testar diretamente o conteúdo dos campos.
*/