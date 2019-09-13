/*jshint esversion:6 */
/*
$ne
seleciona os documentos em que o valor de field não é igual ao especificado value. Isso inclui documentos que não contêm o field.

Para comparação de diferentes valores do tipo BSON, consulte a ordem de comparação do BSON especificada .

Considere o seguinte exemplo:

db . inventário . find (  {  qty :  {  $ ne :  20  }  }  )
Esta consulta selecionará todos os documentos da inventorycoleção em que o qtyvalor do campo não é igual 20, incluindo os documentos que não contêm o qtycampo.

Considere o exemplo a seguir, que usa o $ne operador com um campo em um documento incorporado:

db . inventário . update (  {  "carrier.state" :  {  $ ne :  "NY"  }  },  {  $ set :  {  qty :  20  }  }  )
Esta update()operação definirá o qtyvalor do campo nos documentos que contêm o documento incorporado carriercujo statevalor do campo não é igual a "NY" ou onde o statecampo ou o carrierdocumento incorporado não existe.

O operador de desigualdade não$ne é muito seletivo, pois muitas vezes corresponde a uma grande parte do índice. Como resultado, em muitos casos, uma consulta com um índice pode ter um desempenho melhor do que uma consulta que deve digitalizar todos os documentos em uma coleção. Veja também Query Selectivity .$ne$ne*/