`use strict`

/* Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari */

const listNumber = [1, 6, 4, 8, 10];
console.log(listNumber);

i = 0;
let sum = 0;

while( i <listNumber.length){
    if(i % 2 == 1){
        sum = sum + listNumber[i];
    }
    i++;
}
console.log(`${sum}`);


