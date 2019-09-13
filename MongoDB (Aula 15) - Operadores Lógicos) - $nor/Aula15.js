/*jshint esversion:6 */
/*
Lógico
$nor
$norexecuta uma NORoperação lógica em uma matriz de uma ou mais expressões de consulta e seleciona os documentos que falham em todas as expressões de consulta na matriz. O $norpossui a seguinte sintaxe:

{  $ nor :  [  {  < expressão1 >  },  {  < expressão2 >  },  ...   {  < expressãoN >  }*/
/*
Exemplos 
$norConsulta com duas expressões 
Considere a seguinte consulta que usa apenas o $noroperador:

{ $nor: [ { <expression1> }, { <expression2> }, ...  { <expressionN> } ] }

Esta consulta retornará todos os documentos que:

contém o pricecampo cujo valor não é igual 1.99 ae contém o salecampo cujo valor não é igual a true ou
conter o pricecampo cujo valor é não igual 1.99 , mas que não contêm o salecampo ou
que não conter o pricecampo , mas conter o sale campo cujo valor não é igual a true ou
que não contêm o pricecampo e que não contêm o salecampo
*//*
$nore comparações adicionais 
Considere a seguinte consulta:
*/
db.inventory.find( { $nor: [ { price: 1.99 }, { qty: { $lt: 20 } }, { sale: true } ] } )
/*
Esta consulta selecionará todos os documentos da inventorycoleção em que:

o pricevalor do campo não é igual 1.99 e
o qtyvalor do campo não é menor que 20 e
o salevalor do campo não é igual atrue
incluindo os documentos que não contêm esses campos.

A exceção ao retornar documentos que não contêm o campo na $norexpressão é quando o $noroperador é usado com ele $exists.*/
/*
$nore $exists
Compare isso com a seguinte consulta, que usa o $noroperador com o $existsoperador:
*/

db.inventory.find( { $nor: [ { price: 1.99 }, { price: { $exists: false } },
    { sale: true }, { sale: { $exists: false } } ] } )

/*
Esta consulta retornará todos os documentos que:

contém o pricecampo cujo valor não é igual 1.99 ae contém o salecampo cujo valor não é igual a true*/