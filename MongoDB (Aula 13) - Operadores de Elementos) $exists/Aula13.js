/*jshint esversion:6 */
//$exists comparador de elemento
/*
método pretty () no MongoDB:
O método pretty () é usado principalmente para exibir o resultado em um formato mais fácil de ler. Neste tutorial, mostrarei como usar ométodo pretty () e como os dadossão exibidoscom e sem o uso de pretty () e como são os dados. A sintaxe dométodo pretty () é a seguinte:

db.collection. find ( ) . pretty  ( )
Se chamarmos o método find em uma coleção, ele mostrará todos os documentos disponíveis nessa coleção. Opcionalmente, podemos passar uma consulta para esse método.
*/

/*
A consulta a seguir especifica o predicado da consulta :a: { $exists: true }

db . registros . find (  {  a :  { $exists: true }  }  )
Os resultados consistem nos documentos que contêm o campo a, incluindo o documento cujo campo a contém um valor nulo:

A consulta a seguir especifica o predicado da consulta :b: { $exists: false }

db . registros . find (  {  b :  {  $ existe :  false  }  }  )
Os resultados consistem nos documentos que não contêm o campo b:
*/

//retorna collections que nao tenha o atributo qualidade
db.produtos.find({qualidade:{$exists: false}}).pretty();
//retorna collections que tenha o atributo qualidade
db.produtos.find({qualidade:{$exists: true}}).pretty();