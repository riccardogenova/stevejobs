let numberDisplay = document.getElementById('number');
let increaseBtn = document.getElementById('increaseBtn');
let decreaseBtn = document.getElementById('decreaseBtn');
let intervalId;
let number = 0;
let sensitivity = 200;
let intervalTime = 500;

function increaseNumber() {
    number++;
    updateNumberDisplay();
}

function decreaseNumber() {
    number--;
    updateNumberDisplay();
}

function updateNumberDisplay() {
    numberDisplay.textContent = number;
}

function startIncreasing() {
    increaseNumber(); // Incrementa il numero immediatamente quando viene premuto il pulsante
    intervalId = setInterval(function() {
        increaseNumber();
        sensitivity -= 2; // Riduci la sensibilità ad ogni chiamata
        clearInterval(intervalId); // Interrompi l'intervallo corrente
        intervalTime = sensitivity; // Imposta il nuovo intervallo di tempo in base alla sensibilità
        startIncreasing(); // Avvia un nuovo intervallo con la nuova sensibilità
    }, intervalTime);
}

function startDecreasing() {
    decreaseNumber(); // Decrementa il numero immediatamente quando viene premuto il pulsante
    intervalId = setInterval(function() {
        decreaseNumber();
        sensitivity -= 2; // Riduci la sensibilità ad ogni chiamata
        clearInterval(intervalId); // Interrompi l'intervallo corrente
        intervalTime = sensitivity; // Imposta il nuovo intervallo di tempo in base alla sensibilità
        startDecreasing(); // Avvia un nuovo intervallo con la nuova sensibilità
    }, intervalTime);
}

function stop() {
    clearInterval(intervalId);
    sensitivity = 200; // Resetta la sensibilità
}

increaseBtn.addEventListener('mousedown', function(event) {
    startIncreasing();
    event.preventDefault(); // Previeni il comportamento predefinito del pulsante per evitare la selezione del testo
});

decreaseBtn.addEventListener('mousedown', function(event) {
    startDecreasing();
    event.preventDefault(); // Previeni il comportamento predefinito del pulsante per evitare la selezione del testo
});

document.addEventListener('mouseup', stop);
