/*
Delete
Excluir operações 
As operações de exclusão removem documentos de uma coleção. O MongoDB fornece os seguintes métodos para excluir documentos de uma coleção:

db.collection.deleteOne() Novo na versão 3.2
db.collection.deleteMany() Novo na versão 3.2
No MongoDB, as operações de exclusão têm como destino uma única coleção . Todas as operações de gravação no MongoDB são atômicas no nível de um único documento.

Você pode especificar critérios ou filtros que identificam os documentos a serem removidos. Esses filtros usam a mesma sintaxe que as operações de leitura.

Os componentes de uma operação deleteMany do MongoDB.

db.collection.remove( ) 

*/


try {
   db.orders.deleteOne(
       { "_id" : ObjectId("563237a41a4d68582c2509da") },
       { w : "majority", wtimeout : 100 }
   );
} catch (e) {
   print (e);
}

try {
   db.orders.deleteMany(
       { "client" : "Crude Traders Inc." },
       { w : "majority", wtimeout : 100 }
   );
} catch (e) {
   print (e);
}
/*
Remover todos os documentos de uma coleção 
Para remover todos os documentos em uma coleção, chame o removemétodo com um documento de consulta vazio {}. A operação a seguir exclui todos os documentos da coleção do BIOS :
*/
db . bios . remover (  {  }  );


/*
Remover todos os documentos que correspondam a uma condição 
Para remover os documentos que correspondem a um critério de exclusão, chame o remove()método com o <query> parâmetro:

A operação a seguir remove todos os documentos da coleção productsonde qtyé maior que 20:
*/
db.produtos.remove (  {  qty :  {  $gt:20  }  }  );