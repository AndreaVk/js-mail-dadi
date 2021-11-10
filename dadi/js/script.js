let user;
let pc;
user = Math.floor(Math.random() * 6) + 1;
console.log("il dato dell'utente ha come risultato: " + user);

pc = Math.floor(Math.random() * 6) + 1;
console.log("il dato del pc ha come risultato: " + pc);

if (user > pc) {
alert("User Win!");
console.log("L'utente ha vinto");
} else if (user < pc) {
alert("Pc win!");
console.log("Il Pc ha vinto");
} else if ((user = pc)) {
alert("Pareggio");
console.log("Pareggio");
}