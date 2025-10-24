/*Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/

const prompt = require("prompt-sync")();

console.log("Bem-vindo ao jogo Pedra-Papel-Tesoura!");

let jogador = prompt("Escolha Pedra, Papel ou Tesoura: ").toLowerCase();
const opcoes = ["pedra", "papel", "tesoura"];
let computador = opcoes[Math.floor(Math.random() * opcoes.length)];

if (jogador === computador) {
    console.log("Empate!");
} else if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
) {
    console.log("Você ganhou!");
} else {
    console.log("Você perdeu!");
}
