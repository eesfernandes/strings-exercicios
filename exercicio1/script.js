function comidaFavorita (){
    const nome = prompt(`Qual o seu nome? `);
    const comida1 = prompt(`Qual a sua 1° comida favorita? `);
    const comida2 = prompt(`Qual a sua 2° comida favorita? `);
    const comida3 = prompt(`Qual a sua 3° comida favorita? `);
    console.log(`Estas são as comidas favoritas de ${nome}: ${comida1}, ${comida2}, ${comida3}`)
}
comidaFavorita()