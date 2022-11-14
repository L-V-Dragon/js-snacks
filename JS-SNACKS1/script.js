//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

let num1 = prompt("Inserisci un numero");
let num2 = prompt("Inserisci un altro numero");

if(num1>num2){
    console.log("Il numero più grande è: " + num1);
} else if(num2>num1){
    console.log("Il numero più grande è: " + num2);
} else if(num1 == num2){
    console.log("I numeri sono uguali");
} else{
    console.log("Errore");
}