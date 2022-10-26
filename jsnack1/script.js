`use strict`

/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const firstWord = prompt("Scrivi la prima parola");
console.log(firstWord);

const secondWord = prompt("scrivi la seconda parola");
console.log(secondWord);

if ( firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord)
} else if (secondWord.length > firstWord.length) {
    console.log(firstWord, secondWord)
} else {
    alert("le parole sono della stessa lunghezza")
    console.log(firstWord, secondWord)
}