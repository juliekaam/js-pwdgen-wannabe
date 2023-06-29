/*Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
Infine scrivi sulla console nomecognomecolorepreferito21
BONUS:
Al posto del 21 finale, chiedete all'utente 2 numeri e concatenate al posto del 21 finale, il primo numero diviso il secondo.
Mostrare la password generata sulla vostra pagina HTML sbizzarrendosi con il layout e volendo potete usare Bootstrap
Fare un layout responsive
CONSIGLIO: Osservate il comportamento di let e var come si comporta sul codice. Mi raccomando alla fine USATE SEMPRE LET!*/ 

//dichiarazione delle variabile
let nome= prompt("Qual'è il tuo nome?");
let surname= prompt("Qual'è il tuo cognome?");
let favoriteColor= prompt("Qual'è il tuo colore preferito?");
const number=21;

let password=( nome+surname+favoriteColor+number) ;
   

// stampo informazione la password a console

console.log("la tua password è: " +password);
