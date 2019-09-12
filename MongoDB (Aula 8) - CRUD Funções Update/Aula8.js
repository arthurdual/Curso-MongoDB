/*jshint esversion:6 */
/*
Crud
Update
Operações de atualização 
As operações de atualização modificam documentos existentes em uma coleção . O MongoDB fornece os seguintes métodos para atualizar documentos de uma coleção:

db.collection.updateOne() Novo na versão 3.2
db.collection.updateMany() Novo na versão 3.2
db.collection.replaceOne() Novo na versão 3.2
No MongoDB, as operações de atualização têm como alvo uma única coleção. Todas as operações de gravação no MongoDB são atômicas no nível de um único documento.

Você pode especificar critérios ou filtros que identificam os documentos a serem atualizados. Esses filtros usam a mesma sintaxe que as operações de leitura.
*/
//db.collection.updateOne(); 
try {
    db.restaurant.updateOne(
       { "name" : "Central Perk Cafe" },
       { $set: { "violations" : 3 } }
    );
 } catch (e) {
    print(e);
 }

//db.collection.updateMany();
 try {
    db.restaurant.updateMany(
       { violations: { $gt: 4 } },
       { $set: { "Review" : true } }
    );
 } catch (e) {
    print(e);
 }
//db.collection.replaceOne() 
//Substitui um único documento dentro da coleção com base no filtro.
 try {
    db.restaurant.replaceOne(
       { "name" : "Central Perk Cafe" },
       { "name" : "Central Pork Cafe", "Borough" : "Manhattan" }
    );
 } catch (e){
    print(e);
 }