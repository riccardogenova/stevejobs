<!-- @format -->

# JavaScript (JS)

## Cos'è JavaScript

JavaScript è un linguaggio di programmazione ampiamente utilizzato per aggiungere interattività e dinamicità alle pagine web. È uno dei tre pilastri fondamentali del web insieme all'HTML (HyperText Markup Language) e al CSS (Cascading Style Sheets). JavaScript è un linguaggio di scripting adatto per la programmazione client-side e server-side.

## Storia di JavaScript

- **Origini**: JavaScript è stato sviluppato da Brendan Eich presso Netscape Communications Corporation. La prima versione di JavaScript è stata rilasciata nel 1995, con l'intento di aggiungere funzionalità di scripting interattivo alle pagine web.
- **Standardizzazione**: Nel 1997, JavaScript è diventato uno standard internazionale con l'adozione del nome ECMAScript. ECMAScript è il nome ufficiale dello standard su cui si basa JavaScript.
- **Crescita e sviluppo**: Nel corso degli anni, JavaScript ha subito molte evoluzioni e miglioramenti. Nuove funzionalità sono state aggiunte con l'introduzione di nuove versioni di ECMAScript, come ES5, ES6 (conosciuto anche come ES2015), ES7, e così via.

## Utilizzo di JavaScript nel web

- **Interattività**: JavaScript è ampiamente utilizzato per aggiungere interattività alle pagine web. Con JavaScript, è possibile creare elementi dinamici come pulsanti, moduli, animazioni, giochi e altro ancora.
- **Manipolazione del DOM**: JavaScript consente di manipolare il Document Object Model (DOM), consentendo agli sviluppatori di modificare la struttura, il contenuto e lo stile delle pagine web in risposta alle azioni degli utenti.
- **Validazione dei dati**: JavaScript può essere utilizzato per validare i dati inseriti dagli utenti nei moduli web, garantendo che siano inseriti correttamente prima di essere inviati al server.
- **Comunicazione asincrona**: Con XMLHttpRequest (XHR) o l'API Fetch, JavaScript consente di effettuare richieste HTTP asincrone al server e aggiornare dinamicamente le parti di una pagina web senza dover ricaricare l'intera pagina.
- **Framework e librerie**: Esistono numerosi framework e librerie JavaScript (come React, Angular, Vue.js) che semplificano lo sviluppo di applicazioni web complesse, consentendo agli sviluppatori di creare applicazioni moderne e performanti.

In sintesi, JavaScript è uno strumento essenziale per gli sviluppatori web per creare esperienze interattive e dinamiche sul web. È diventato uno dei linguaggi di programmazione più diffusi e influenti nel campo dello sviluppo web.

## Differenza tra JavaScript lato server e lato client

La principale differenza tra JavaScript lato server (Server-Side JavaScript, SSJS) e JavaScript lato client (Client-Side JavaScript, CSJS) sta nel contesto in cui viene eseguito il codice.

### JavaScript lato server (SSJS)

- Esecuzione: In ambiente lato server, il codice JavaScript viene eseguito su un server che utilizza un'infrastruttura server come Node.js, Deno, o altri framework e piattaforme server.
- Utilizzo: Viene utilizzato per gestire la logica di backend di un'applicazione web, come l'elaborazione dei dati, l'accesso al database, la gestione delle richieste HTTP, la generazione di pagine HTML dinamiche, ecc.
- Esempi: Creazione di API RESTful, rendering di pagine HTML server-side, esecuzione di task di elaborazione dei dati sul server, autenticazione e autorizzazione utente, interazione con database.

### JavaScript lato client (CSJS)

- Esecuzione: In ambiente lato client, il codice JavaScript viene eseguito sul browser web del client.
- Utilizzo: Viene utilizzato per aggiungere interattività e dinamicità alle pagine web, manipolare il DOM (Document Object Model), gestire eventi utente, inviare richieste AJAX, creare effetti visivi e animazioni, ecc.
- Esempi: Validazione dei moduli di input, aggiornamento dinamico del contenuto della pagina, manipolazione del DOM, reattività dell'interfaccia utente, chiamate API client-side.

## JavaScript interno, esterno, inline

- **Interno (Inline)** \
  Il codice JavaScript viene inserito direttamente nel tag `<script>` all'interno del documento HTML.
  Questo metodo è utile per piccoli script o per script specifici solo per quella pagina.\
  Esempio:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Inline</title>
</head>
<body>
    <h1>JavaScript Inline</h1>
    <script>
        // Codice JavaScript inline
        console.log("Questo è un messaggio di log inline");
    </script>
</body>
</html>
```

- **Esterno** \
  Il codice JavaScript è contenuto in un file esterno con estensione `.js`.
  Il file JavaScript può essere collegato al documento HTML utilizzando l'attributo src del tag `<script>`. Questo metodo è consigliato per script più grandi o riutilizzabili.
  Esempio:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Esterno</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>JavaScript Esterno</h1>
</body>
</html>
```

```JavaScript
// Contenuto di script.js
console.log("Questo è un messaggio di log esterno");
```

- **Esterno (Inline)**\
  Il codice JavaScript viene inserito direttamente nel tag `<script>` all'interno del documento HTML, ma l'intero script è contenuto all'interno di un attributo `src`. Questo metodo può essere utile quando si desidera evitare la modifica di file esterni o quando si utilizza un processo di generazione automatica per l'inclusione del codice. Esempio:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Esterno Inline</title>
    <script src="data:text/javascript;base64,Y29uc29sZS5sb2coIlF1ZXN0byBlc3Rlcm9zIik7"></script>
</head>
<body>
    <h1>JavaScript Esterno Inline</h1>
</body>
</html>
```

In questo esempio, il codice JavaScript `console.log("Questo è un messaggio di log esterno inline")`; è convertito in formato Base64 e inserito come valore dell'attributo `src` del tag `<script>`.
