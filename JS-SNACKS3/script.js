let n;
let somma = 0;
let media;

for (i = 0; i < 10; i++) {
    n = parseInt(prompt('Inserisci un numero'));
    somma += n;
}

media = somma / i;
console.log('la media è ' + media);