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