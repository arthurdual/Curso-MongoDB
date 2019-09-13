/*jshint esversion:6 */
/*
$eq
Novo na versão 3.0.

Especifica a condição de igualdade. O $eqoperador corresponde aos documentos em que o valor de um campo é igual ao valor especificado.

{  < campo >:  {  $ eq :  < valor >  }  }
A $eqexpressão é equivalente a .{ field: <value> }
*/
/*
Igual a um valor especificado 
O exemplo a seguir consulta a inventorycoleção para selecionar todos os documentos onde o valor do qtycampo é igual 20:

db . inventário . find (  {  qty :  {  $ eq :  20  }  }  )
A consulta é equivalente a:

db . inventário . find (  {  qty :  20  }  )
Ambas as consultas correspondem aos seguintes documentos:

{  _id :  2 ,  item :  {  nome :  "cd" ,  código :  "123"  },  qty :  20 ,  tags :  [  "B"  ]  } 
{  _id :  5 ,  item :  {  nome :  "mn" ,  código :  " 000 "  },  quantidade :  20 ,  tags :  [  [  " A " ,  " B "  ],  " C " ]  }
Campo no documento incorporado é igual a um valor 
O exemplo a seguir consulta a inventorycoleção para selecionar todos os documentos em que o valor do namecampo no item documento é igual "ab". Para especificar uma condição em um campo em um documento incorporado, use a notação de ponto .

db . inventário . find (  {  "item.name" :  {  $ eq :  "ab"  }  }  )
A consulta é equivalente a:

db . inventário . find (  {  "item.name" :  "ab"  }  )
Ambas as consultas correspondem ao seguinte documento:

{  _id :  1 ,  item :  {  name :  "ab" ,  código :  "123"  },  qty :  15 ,  tags :  [  "A" ,  "B" ,  "C"  ]  }
VEJA TAMBÉM

Consultar documentos incorporados

Elemento de matriz é igual a um valor 
O exemplo a seguir consulta a inventorycoleção para selecionar todos os documentos em que a tagsmatriz contém um elemento com o valor "B" [1] :

db . inventário . find (  {  tags :  {  $ eq :  "B"  }  }  ))
A consulta é equivalente a:

db . inventário . find (  {  tags :  "B"  }  )
Ambas as consultas correspondem aos seguintes documentos:

{  _id :  1 ,  item :  {  name :  "ab" ,  código :  "123"  },  qty :  15 ,  tags :  [  "A" ,  "B" ,  "C"  ]  } 
{  _id :  2 ,  item :  {  name :  "cd" ,  código :  "123"  },  qtd :  20 ,  tags :  [  "B" ]  } 
{ _id :  3 ,  item :  {  name :  "ij" ,  código :  "456"  },  qty :  25 ,  tags :  [  "A" ,  "B"  ]  } 
{  _id :  4 ,  item :  {  name :  "xy" ,  código :  "456"  },  qtd . :  30 ,  tags :  [  "B" ,  "A"  ]  }
VEJA TAMBÉM

$elemMatch, Matrizes de consulta

[1]	A consulta também corresponderá aos documentos em que o valor do tagscampo é a sequência "B".
Igual a um valor de matriz 
O exemplo a seguir consulta a inventorycoleção para selecionar todos os documentos em que a tagsmatriz é igual exatamente à matriz especificada ou a tagsmatriz contém um elemento que é igual à matriz .[ "A", "B" ]

db . inventário . find (  {  tags :  {  $ eq :  [  "A" ,  "B"  ]  }  }  ))
A consulta é equivalente a:

db . inventário . find (  {  tags :  [  "A" ,  "B"  ]  }  ))
Ambas as consultas correspondem aos seguintes documentos:

{  _id :  3 ,  item :  {  name :  "ij" ,  código :  "456"  },  qty :  25 ,  tags :  [  "A" ,  "B"  ]  } 
{  _id :  5 ,  item :  {  name :  "mn" ,  código :  "000"  },  qty :  20 ,  tags :  [  [  "A" ,  "B"  ], "C" ]  }*/
