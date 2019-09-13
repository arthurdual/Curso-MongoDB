/*jshint esversion:6 */
/*
Lógico
$not	Inverte o efeito de uma expressão de consulta e retorna documentos que não correspondem à expressão de consulta.
$not
Sintaxe :{ field: { $not: { <operator-expression> } } }
$notexecuta uma NOToperação lógica no especificado <operator-expression>e seleciona os documentos que não correspondem <operator-expression>. Isso inclui documentos que não contêm o field.
Considere a seguinte consulta:
*/
db.inventory.find( { price: { $not: { $gt: 1.99 } } } );
/*
Esta consulta selecionará todos os documentos da inventorycoleção em que:

o pricevalor do campo é menor ou igual a 1.99 ou
o pricecampo não existe
{ $not: { $gt: 1.99 } }é diferente do $lte operador. retorna apenas os documentos em que o campo existe e seu valor é menor ou igual a .{ $lte: 1.99 }price1.99

Lembre-se de que o $notoperador afeta apenas outros operadores e não pode verificar campos e documentos independentemente. Portanto, use o $notoperador para disjunções lógicas e o $neoperador para testar diretamente o conteúdo dos campos.*/
/*
//Comportamento 
$note tipos de dados 
A operação do $not operador é consistente com o comportamento de outros operadores, mas pode gerar resultados inesperados com alguns tipos de dados, como matrizes.

$note expressões regulares 
$notO operador pode executar NOToperação lógica em:

objetos de expressão regular (ie /pattern/)

Por exemplo, a consulta a seguir seleciona todos os documentos da inventorycoleção em que o itemvalor do campo não começa com a letra p.
*/
db.inventory.find( { item: { $not: /^p.*/ } } );
/*
$regex expressão do operador (Iniciando no MongoDB 4.0.7)
Por exemplo, a consulta a seguir seleciona todos os documentos da inventorycoleção em que o itemvalor do campo não começa com a letra p.
*/
db.inventory.find( { item: { $not: { $regex: "^p.*" } } } );
db.inventory.find( { item: { $not: { $regex: /^p.*/ } } } );
/*
objetos de expressão regular da linguagem do driver
Por exemplo, a seguinte consulta PyMongo usa o re.compile()método Python para compilar uma expressão regular:
*/
import re
for noMatch in db.inventory.find( { "item": { "$not": re.compile("^p.*") } } ):
    print noMatch