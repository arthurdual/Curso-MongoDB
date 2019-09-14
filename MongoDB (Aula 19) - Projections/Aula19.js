/*jshint esversion:6 */
/*
Projections
O $operador posicional limita o conteúdo de um <array>dos resultados da consulta para conter apenas o primeiro elemento correspondente ao documento de consulta. Para especificar um elemento da matriz a ser atualizado, consulte o operador posicional $ para obter atualizações .

Use $no documento de projeção do find()método ou do findOne()método quando você precisar apenas de um elemento de matriz específico nos documentos selecionados.

Consulte o operador de agregação $filterpara retornar uma matriz apenas com os elementos que correspondem à condição especificada.
*/
db.produtos.find();
//retorna apenas os campos cdProduto enmProduto
db.produtos.find({},{cdProduto:1,nmProduto: 1});
//fará nao aparcer o campo qualidade
db.produtos.find({},{qualidade: 0});

/*
Para especificar critérios em vários campos de documentos dentro dessa matriz, use o $elemMatchoperador de consulta. A consulta a seguir retorna o primeiro documento dentro de uma gradesmatriz que tem meanmaior que 70 e grademaior que 90.
*/
db.students.find( { grades: { $elemMatch: {
    mean: { $gt: 70 },
    grade: { $gt:90 }
  } } },
{ "grades.$": 1 } );
