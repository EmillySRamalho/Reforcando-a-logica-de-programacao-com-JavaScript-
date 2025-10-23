/* Escreva um programa para calcular a multa de um motorista que ultrapassou o limite de velocidade.
*/

const prompt = require("prompt-sync")();

let velocidade = Number(prompt("Qual é a velocidade atual do carro (em km/h)? "));

if (velocidade > 80) {
    let excesso = velocidade - 80;
    let multa = excesso * 5;
    console.log("Você foi multado! O valor da multa é R$ " + multa.toFixed(2));
} else {
    console.log("Parabéns, você está dentro do limite de velocidade!");
}
