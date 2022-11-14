/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine.
Javascript - JS*/

let n;
let arr = [];

for (i = 0; i < 6; i++) {
    n = parseInt(prompt('Inserisci un numero'));
    if(n % 2 != 0){
        arr.push(n);
    }
}

console.log('I numeri dispari sono: ' + arr);