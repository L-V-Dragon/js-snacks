let numeroUtente = prompt("Inserire un numero da 0 a 10");


let numeroBanco = Math.floor(Math.random() * 10) + 1;


console.log("Il computer ha estratto il numero: " + numeroBanco);


if(numeroUtente == numeroBanco){
    console.log("HAI VINTO!!");
} else {
    console.log("HAI PERSO!!");
}