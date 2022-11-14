/*Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero. Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso. Javascript - JS*/

let numeroUtente = prompt("Inserire un numero da 0 a 10");


let numeroBanco = Math.floor(Math.random() * 10) + 1;


console.log("Il computer ha estratto il numero: " + numeroBanco);


if(numeroUtente == numeroBanco){
    console.log("HAI VINTO!!");
} else {
    console.log("HAI PERSO!!");
}