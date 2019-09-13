/*jshint esversion:6 */
/*

Lógico

$and	Associa cláusulas de consulta a uma lógica ANDretorna todos os documentos que correspondem às condições de ambas as cláusulas.
$not	Inverte o efeito de uma expressão de consulta e retorna documentos que não correspondem à expressão de consulta.
$nor	Associa cláusulas de consulta a uma lógica NORretorna todos os documentos que falham em corresponder às duas cláusulas.
$or	Associa cláusulas de consulta a uma lógica ORretorna todos os documentos que correspondem às condições de qualquer uma das cláusulas.
*/
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