/** @format */

function Aggiungi_Task(descrizione) {
  const nuovoId = idCounter++;
  const nuovaAttivita = new Todo(nuovoId, 'Da fare', descrizione);
  vettore_vuoto.push(nuovaAttivita);
}

function Rimuovi_Task(id) {
  const index = vettore_vuoto.findIndex(attivita => attivita.id === id);
  if (index !== -1) {
    vettore_vuoto.splice(index, 1);
  } else {
    console.log(`Nessuna attività trovata con ID ${id}`);
  }
}

function Update_Task(id, nuovaDescrizione) {
  const attivitaDaAggiornare = vettore_vuoto.find(attivita => attivita.id === id);

  if (attivitaDaAggiornare) {
    attivitaDaAggiornare.descrizione = nuovaDescrizione;
    console.log(`Attività con ID ${id} aggiornata con la nuova descrizione`);
  } else {
    console.log(`Nessuna attività trovata con ID ${id}`);
  }
}

//------------------------------------------------------------------------------------------------

class Todo {
  constructor(id, status, descrizione) {
    this.id = id;
    this.status = status;
    this.descrizione = descrizione;
  }
}

let vettore_vuoto = [];
let idCounter = 1;

//------------------------------------------------------------------------------------------------

Aggiungi_Task('Prendere carta vetrata'); // Aggiungi Task
Aggiungi_Task('Fare la spesa');
Aggiungi_Task('Salutare il vicino');

console.log('Ecco tutte le Task giornaliere:');
console.log(vettore_vuoto);

Rimuovi_Task(1); //Rimuovi Task

console.log('Dopo la rimozione:');
console.log(vettore_vuoto);

Update_Task(3, 'Buttare spazzatura'); //Update Task

console.log("Dopo l'update:");
console.log(vettore_vuoto);
