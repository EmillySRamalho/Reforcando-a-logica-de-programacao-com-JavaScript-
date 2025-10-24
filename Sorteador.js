/*Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.*/

const prompt = require("prompt-sync")();

let numeroSorteado = Math.floor(Math.random() * 5) + 1;
let palpite = Number(prompt("Tente adivinhar o número que o computador sorteou (entre 1 e 5): "));  

if (palpite === numeroSorteado) {
    console.log("Parabéns! Você acertou o número sorteado.");
} else {
    console.log(`Que pena! O número sorteado foi ${numeroSorteado}.`);
}
