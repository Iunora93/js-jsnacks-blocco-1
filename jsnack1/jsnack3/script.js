`use strict`

const listName = ["eleonora", "Edoardo", "Guenda", "Macho"];

const checkName = prompt("inserisci il tuo nome");
console.log(checkName);

for (let i = 0; i < listName.length; i++) {
    checkName === listName[i];
    if( checkName === listName ) {
        alert("hai l'accesso")
    } else if ( listName !== checkName ) {
        alert("non hai l'accesso")
    }
} 

