# Css
***CSS***, acronimo di *Cascading Style Sheets*, è un linguaggio di stile utilizzato per definire l'aspetto e la formattazione di documenti HTML, XML e XHTML. In sostanza, mentre l'HTML fornisce la struttura e il contenuto di una pagina web, il CSS viene utilizzato per controllarne l'aspetto visivo, come il colore del testo, il tipo di carattere, il layout della pagina, le dimensioni degli elementi e molto altro ancora.

Con CSS, è possibile applicare stili e layout coerenti a un'intera serie di pagine web, consentendo ai progettisti e agli sviluppatori di separare il contenuto di una pagina dalla sua presentazione visiva. Questo approccio migliora la manutenibilità del codice e la flessibilità nel cambiare l'aspetto di un sito web senza dover modificare ogni singola pagina.

Ecco alcuni concetti chiave di CSS:

**Selettore**: In CSS, i selettori vengono utilizzati per identificare gli elementi HTML a cui si desidera applicare uno stile. I selettori possono essere basati su elementi (come p per i paragrafi), classi (come .classe), ID (come #id), attributi e molti altri.

**Proprietà**: Le proprietà CSS definiscono gli stili che si desidera applicare agli elementi selezionati. Ad esempio, color, font-size, background-color sono tutte proprietà CSS.

**Valore**: Ogni proprietà CSS ha un valore associato che specifica come dovrebbe apparire l'elemento selezionato. Ad esempio, per la proprietà color, il valore potrebbe essere un nome di colore (come "red") o un valore esadecimale (#FF0000).

**Regola CSS**: Una regola CSS è composta da un selettore e da uno o più blocchi di dichiarazioni di stile. Ad esempio:

    p {
    color: blue;
    font-size: 16px;
    }                       

In questo esempio, tutte le istanze del tag < p > avranno il testo di colore blu e dimensione del carattere di 16 pixel.

**Cascata**: Il termine "cascata" in Cascading Style Sheets si riferisce all'ordine di priorità con cui vengono applicati gli stili. Ciò significa che, se più regole CSS si applicano allo stesso elemento, il browser seguirà un certo ordine per decidere quale regola deve essere applicata. I fattori che influenzano la cascata includono l'ordine delle regole nel foglio di stile, la specificità dei selettori e l'ereditarietà delle proprietà.

**Box model**: Il modello di box in CSS rappresenta la struttura di ogni elemento HTML come un insieme di scatole rettangolari. Ogni scatola ha margini, bordi, padding e il contenuto dell'elemento stesso. La gestione corretta del box model è essenziale per controllare il layout e la formattazione della pagina web.

**Media Queries**: Le media queries consentono di applicare regole di stile in base alle caratteristiche del dispositivo utilizzato per visualizzare la pagina, come la larghezza dello schermo o l'orientamento del dispositivo. Ciò rende possibile creare layout responsivi che si adattano a diverse dimensioni di schermo.