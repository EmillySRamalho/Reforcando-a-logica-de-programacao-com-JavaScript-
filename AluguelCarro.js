/*Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

const prompt = require("prompt-sync")();

let tipoCarro = prompt("Digite o tipo de carro alugado (popular/luxo): ").toLowerCase();
let diasAluguel = Number(prompt("Digite a quantidade de dias de aluguel: "));
let kmPercorridos = Number(prompt("Digite a quantidade de Km percorridos: "));  

let custoDiario = 0;
let custoKm = 0;    

if (tipoCarro === "popular") {
    custoDiario = 90;
    if (kmPercorridos <= 100) {
        custoKm = 0.20;
    } else {
        custoKm = 0.10;
    }   
} else if (tipoCarro === "luxo") {
    custoDiario = 150;
    if (kmPercorridos <= 200) {
        custoKm = 0.30;
    } else {
        custoKm = 0.25;
    }
}

let total = (custoDiario * diasAluguel) + (custoKm * kmPercorridos);
console.log(`O total a ser pago é R$ ${total.toFixed(2)}`);
