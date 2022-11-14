let n;
let arr = [];

for (i = 0; i < 6; i++) {
    n = parseInt(prompt('Inserisci un numero'));
    if(n % 2 != 0){
        arr.push(n);
    }
}

console.log('I numeri dispari sono: ' + arr);