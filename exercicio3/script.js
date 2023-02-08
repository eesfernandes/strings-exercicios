// a) - Crie a const para a frase aqui
const minhaFrase = (`Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"`);

// b) - Trocando verde por rosa e azul por laranja com o metodo replace()
const trocarCores = minhaFrase.replace('verde', 'rosa').replace('azul', 'laranja');

// c) - Verifica se as alterações de cores foram feitas (obs: exercicio menciona erroneamente verde ao inves de rosa)
console.log(`Frase original: ${minhaFrase}

Frase modificada: ${trocarCores}`);

// Extra) - Fazendo a palavra "mas não deixe o gato sair" ficar em maiúsco
const fraseMaiusc = trocarCores.replaceAll('mas não deixe o gato sair','mas não deixe o gato sair'.toUpperCase())
console.log(fraseMaiusc)