let nomiConsentiti = ["Grazia", "Bryan", "Emanuele", "Alessio", "Andrea"];
let nomePresente = false;
let nomeInserito = false;


let nome = prompt("Inserisca il suo nome:");
let nomeMinuscolo = nome.toLocaleLowerCase();

if(nomeInserito = true){
    for (let i = 0; i < nomiConsentiti.length; i++){

        let nomeLetto = nomiConsentiti[i];

        if (nomeLetto == nomeMinuscolo){
            nomePresente = true;
            break;
        }
        if(!nomePresente){
            console.log("Non è invitato alla festa.");
        } else {
            console.log("Il suo nome è presente nella lista. Benvenuto!");
        }
    
    }
}