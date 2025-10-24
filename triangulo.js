/*Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.*/

const prompt = require("prompt-sync")();

let lado1 = Number(prompt("Digite o comprimento do primeiro segmento de reta: "));
let lado2 = Number(prompt("Digite o comprimento do segundo segmento de reta: "));
let lado3 = Number(prompt("Digite o comprimento do terceiro segmento de reta: "));  

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    console.log("Os segmentos podem formar um triângulo.");
} else {
    console.log("Os segmentos não podem formar um triângulo.");
}