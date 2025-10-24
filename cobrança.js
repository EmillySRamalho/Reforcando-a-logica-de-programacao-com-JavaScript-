/*Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

const prompt = require("prompt-sync")();

let distancia = Number(prompt("Qual é a distância da viagem em Km? "));
let valorCobrado;

if (distancia <= 200) {
    valorCobrado = distancia * 0.50;
} else {
    valorCobrado = distancia * 0.45;
}
console.log("O preço da passagem é R$ " + valorCobrado.toFixed(2));