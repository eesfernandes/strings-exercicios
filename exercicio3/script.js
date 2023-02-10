// a) - Crie a const para a frase aqui
const minhaFrase = (`Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"`);
console.log(minhaFrase)
console.log(`-------------------------------------------------------------`)

// b) - Trocando verde por rosa e azul por laranja com o metodo replace()
const trocarCores = minhaFrase.replace('verde', 'rosa').replace('azul', 'laranja');
console.log(trocarCores)
console.log(`-------------------------------------------------------------`)

// c) - Verifica se as alterações de cores foram feitas (obs: exercicio menciona erroneamente verde ao inves de rosa)
const incluiVerde = trocarCores.includes('verde')
console.log(`Inclui verde: ${incluiVerde}`)

const incluiLaranja = trocarCores.includes('laranja')
console.log(`Inclui laranja: ${incluiLaranja}`)
console.log(`-------------------------------------------------------------`)

// Extra) - Fazendo a palavra "mas não deixe o gato sair" ficar em maiúsco
const fraseMaiusc = trocarCores.replace('mas não deixe o gato sair','mas não deixe o gato sair'.toUpperCase())
console.log(fraseMaiusc)