// Texto original
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// a) - Removendo espaço no final da frase com o metodo trim()
const removeEspaco = minhaString.trim();

// b) - Texto antes e depois de manipular a string
console.log(`Total de caracteres no texto original: ${minhaString.length}
Total de caracteres removendo espaços no final do texo: ${removeEspaco.length}`);

// c) - Substituir os espaços ________ por "sticioso" com o metodo replace()
const novaMinhaString = minhaString.replace('________', 'sticioso')
console.log(novaMinhaString)



