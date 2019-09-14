/*jshint esversion:6 */
/*
/*
Skip = Pula x resultados
Limit = Limita os resultados em X

A função limit () no MongoDB é usada para especificar o número máximo de resultados a serem retornados. Apenas um parâmetro é necessário para esta função. Para retornar o número do resultado desejado.

Às vezes, é necessário retornar um certo número de resultados após um certo número de documentos. O skip () pode fazer este trabalho.

*/
//retorna apartir do 2
db.produtos.find({}).skip(2).pretty();

//retorna apenas 2
db.produtos.find({}, {cdProdutos:1, nmProdutos:1}).limit(2).pretty();

//retorna apartir do 5 e pega apenas 2
db.produtos.find({}, {cdProdutos:1, nmProdutos:1}).skip(5).limit(2).pretty();
