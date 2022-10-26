`use strict`

/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

const number = Number(prompt("inserisci un numero"));
console.log(number);

const numberS = Number(prompt("inserisci un numero"));
console.log(numberS);

const lastNumber = Number(prompt("inserisci un numero"));
console.log(lastNumber);

let result = number + numberS + lastNumber;
console.log(result);

/* let amount = 0;

for (let i = 0; i < 3; i++) {
    const number = Number(prompt("inserisci un numero"));
    console.log(number);
    amount = amount + number;
}
console.log(`Totale: $(amount)`); */