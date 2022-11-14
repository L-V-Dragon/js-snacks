/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
Javascript - JS*/

let par1 = prompt("Inserisci una parola");
let par2 = prompt("Inserisci un'altra parola");

if(par1.length<par2.length){
    console.log(par1 + par2);
} else if(par2.length<par1.length){
    console.log(par2 + par1);
} else if(par1.length == par2.length){
    console.log(par1 + "Ha la stessa lunghezza di " + par2);
} else{
    console.log("Errore");
}