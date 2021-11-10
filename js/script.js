//=====ESERCIZIO MAIL


// Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.


// richiedo la mail all'utente 
const mailUtente = prompt("Inserisci la tua mail");

const CorrectMail = ["alessandro02@gmail.com", "mircovitali@hotmail.it", "samu97@gmail.it"];
let verify = false;

for (let i = 0; i < CorrectMail.length; i++) {
    if (CorrectMail[i] == mailUtente) {
        verify = true;
    }
}

// //mando un alert per dare all'utente l'esito
if (verify) {
    alert('Accesso consentito');
}

if (verify){
    document.getElementById('risposta').innerHTML = 'La mail è corretta';
} else {
    document.getElementById('risposta').innerHTML = 'La mail non è corretta';
    alert('Accesso Negato');
}



