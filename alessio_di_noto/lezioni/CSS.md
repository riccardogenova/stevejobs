# Cosa è CSS

CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per definire l'aspetto e la formattazione di documenti HTML e XML. È ampiamente utilizzato nel web per controllare l'aspetto di pagine web e contenuti online.

1. **Selezione degli elementi**: CSS consente di selezionare gli elementi HTML che si desidera stilizzare. Gli elementi possono essere selezionati in base al loro tipo (ad esempio, paragrafi, intestazioni, link), alla loro classe o all'ID assegnato, o anche in base alla loro posizione nel documento.

2. **Proprietà e valori**: Una volta selezionati gli elementi, è possibile specificare le proprietà di stile che si desidera applicare loro. Queste proprietà possono includere caratteristiche come colore, dimensione del testo, spaziatura, sfondo e molto altro ancora. Ogni proprietà ha un valore associato che definisce l'aspetto specifico che si desidera applicare.

3. **Selezione cascata**: Il termine "cascata" in CSS si riferisce alla priorità con cui vengono applicati gli stili. Le regole CSS possono essere definite in diversi luoghi, come all'interno del documento stesso, in fogli di stile esterni o tramite stili inline direttamente sugli elementi HTML. Quando più regole confliggono per lo stesso elemento, viene utilizzata una serie di criteri per determinare quale stile prevarrà. L'elemento che si trova più in "basso" ha priorità su quello in alto, l'ultima regola ha precedenza su quella precedente

4. **Specificità**: La specificità è un concetto importante in CSS che determina quale regola viene applicata quando più regole si sovrappongono. Le regole più specifiche hanno la precedenza su quelle meno specifiche.

5. **Ereditarietà**: Molte proprietà CSS vengono ereditate dagli elementi figlio dagli elementi genitore. Ciò significa che se un'immagine ha una dimensione del testo di 12px e si trova all'interno di un div con una dimensione del testo di 16px, l'immagine erediterà quella dimensione del testo a meno che non venga specificato diversamente.

6. **Media queries**: CSS permette anche di adattare lo stile di una pagina in base alle caratteristiche del dispositivo o del medium di visualizzazione utilizzato. Le media queries consentono di applicare determinati stili solo quando sono soddisfatte determinate condizioni, come la larghezza dello schermo o il tipo di dispositivo.

In breve, CSS è composto da regole che definiscono come gli elementi HTML devono essere visualizzati. Queste regole comprendono selezioni degli elementi, proprietà di stile e valori, e sono applicate in base alla cascata, alla specificità e all'ereditarietà.

Un foglio di stile non è altro che un insieme di regole accompagnate, volendo, da qualche nota di commento e da una o più @-rule. Dal momento che commenti e @-rule sono elementi opzionali e facoltativi, andiamo innanzitutto a spiegare cos'è e com'è fatta una regola, ovvero l'elemento fondamentale di un CSS.

# Regole

La struttura di una regola CSS è composta da due blocchi principali:

    - il selettore;
    - il blocco delle dichiarazioni.

- Il selettore serve a definire la parte del documento cui verrà applicata la regola. I selettori possono essere di diverso tipo e a queste tipologie dedicheremo una sezione specifica della guida. Per il momento sia chiara la funzione che essi svolgono.

- Il blocco delle dichiarazioni è delimitato rispetto al selettore e alle altre regole da due parentesi graffe, la prima di apertura e la seconda di chiusura. Al suo interno possono trovare posto più dichiarazioni. Una dichiarazione è composta da una coppia:

  - proprietà;
  - valore.

**La proprietà** definisce un aspetto dell'elemento/selettore da modificare (margini, colore di sfondo, larghezza, etc) secondo il valore espresso. Proprietà e valore devono essere separati dai due punti. Le dichiarazioni vanno invece separate con un punto e virgola. Non è obbligatorio, ma è buona norma mettere il punto e virgola anche dopo l'ultima dichiarazione del blocco.

**Una limitazione** fondamentale da rispettare è questa: per ogni dichiarazione non è possibile indicare più di una proprietà, mentre è spesso possibile specificare più valori. Questa regola è pertanto errata:

body {color background: black;}

Mentre questa è perfettamente valida e plausibile:

p {font: 12px Verdana, arial;}

Gli spazi bianchi lasciati all'interno di una regola non influiscono sul risultato. Il consiglio, anzi, è di lasciare sempre uno spazio tra le varie parti per una migliore leggibilità.

# CSS OM

L'OM (Object Model) di CSS è un'interfaccia di programmazione che permette ai linguaggi di scripting, come JavaScript, di interagire con le regole di stile CSS di una pagina web. Essenzialmente, consente ai programmatori di manipolare dinamicamente lo stile di un documento HTML utilizzando codice JavaScript.

L'OM di CSS offre metodi e proprietà per selezionare gli elementi HTML e applicare o modificare le regole CSS associate a essi. Questo permette di creare esperienze web dinamiche e interattive, ad esempio modificando lo stile di un elemento in risposta a eventi utente, animazioni o altre azioni dello script.

Alcuni concetti chiave dell'OM di CSS includono:

    - Selezione degli elementi: È possibile selezionare gli elementi HTML utilizzando metodi come document.getElementById, document.getElementsByClassName, document.querySelector, ecc.

    - Accesso alle regole CSS: Una volta selezionati gli elementi, è possibile accedere alle regole CSS associate utilizzando la proprietà style dell'elemento.

    - Aggiunta, modifica e rimozione di regole CSS: È possibile aggiungere nuove regole CSS, modificare quelle esistenti o rimuoverle completamente utilizzando le proprietà e i metodi dell'OM di CSS.

    - Manipolazione dinamica dello stile: L'OM di CSS consente di modificare lo stile degli elementi HTML in tempo reale, consentendo di creare effetti visivi, animazioni e layout dinamici.

Ecco un esempio di come potrebbe essere utilizzato l'OM di CSS in JavaScript:

// Seleziona un elemento HTML
var elemento = document.getElementById("mioElemento");

// Aggiunge una nuova regola CSS all'elemento
elemento.style.color = "red";

// Modifica una regola CSS esistente
elemento.style.fontSize = "20px";

// Rimuove una regola CSS
elemento.style.removeProperty("color");

In questo esempio, elemento.style rappresenta l'OM di CSS per l'elemento selezionato, che consente di accedere e modificare le regole CSS associate a quell'elemento tramite JavaScript
