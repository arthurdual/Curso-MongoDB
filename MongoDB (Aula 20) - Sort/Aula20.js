/*jshint esversion:6 */
/*
$sort
Classifica todos os documentos de entrada e os retorna ao pipeline em ordem classificada.

O $sortestágio tem a seguinte forma de protótipo:

{  $ sort :  {  < campo1 >:  < ordem de classificação  > , < campo2 >: < ordem de classificação > ... } }   
  
$sortpega um documento que especifica os campos a serem classificados e a respectiva ordem de classificação. pode ter um dos seguintes valores:<sort order>

1 para especificar a ordem crescente.
-1 para especificar a ordem decrescente.
{ $meta: "textScore" }para classificar pelos textScore metadados computados em ordem decrescente. Consulte Classificação de metadados para um exemplo.

*/
//retorna cdProduto em ordem decrescente sort({cdProduto: -1})
db.produos.find({}, {}).sort({cdProduto: -1}).pretty();

//retorna qualidade em ordem decrescente sort({qualidade: -1})
db.produos.find({}, {}).sort({qualidade: -1}).pretty();


//retorna qualidade em ordem decrescente e cdProduto em ordem crescente .sort({qualidade: -1, cdProduto: 1})
db.produos.find({}, {}).sort({qualidade: -1, cdProduto: 1}).pretty();

//retorna apenasas collections qualidade em ordem decrescente e cdProduto em ordem crescente .sort({qualidade: -1, cdProduto: 1})
db.produos.find({}, {cdProduto: 1, mnProduto: 1 }).sort({qualidade: -1, cdProduto: 1}).pretty();
