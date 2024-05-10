<!-- @format -->

# CSS

## Cos'è

**CSS**, _Cascading Scale Sheets_, è il linguaggio di programmazione principale per definire l'aspetto e le formattazioni delle pagine web. Spesso affiancato ad HTML, che costituisce lo "scheletro" di una pagina web, Css permette di controllarne l'aspetto visivo, includendo elementi come layout, colori, tipografia, dimensioni e posizioni degli elementi, e molto altro ancora. È uno strumento fondamentale per la progettazione web moderna, consentendo una separazione chiara tra la struttura (HTML) e la presentazione (CSS) di una pagina web.

## Caratteristiche

- **Separazione di contenuti**, CSS permette di modificare l'aspetto di un sito web senza dover alterare il codice HTML. Questo rende il codice più pulito, organizzato e facile da mantenere;

- **Riutilizzabilità**: Le regole CSS possono essere applicate a più elementi di una pagina o addirittura a interi siti web, garantendo coerenza e risparmiando tempo;

- **Esperienza utente** : CSS può creare un'esperienza utente più piacevole e coinvolgente, aumentando la fruibilità e il tempo di permanenza sul sito.

## Come funziona

In primo luogo, _css agisce direttamente sul codice HTML già strutturato_; è quindi raro che venga utilizzato da solo, piuttosto che venire applicato allo scheletro HTML già esistente.
Il CSS funziona attraverso un sistema di **regole e sezioni**. Le regole _definiscono le proprietà da applicare agli elementi HTML_, come il colore di sfondo, il tipo di carattere, la dimensione del testo e la posizione. Le sezioni, invece, _raggruppano le regole per organizzarle e darle un senso di coerenza_.

Il primo passo è incorporare il codice CSS al codice HTML, che si può fare o da un file esterno, colegando in seguito il file .css tramite un < link >, oppure scrivendo direttamente i comandi nell'head dell'html, racchiusi tra i tag < style >.

In seguito il browser analizza le regole CSS e le organizza in base alla loro specificità: la regola più specifica per un determinato elemento ha la precedenza. Nel caso in cui si verifichino _conflitti tra regole_, questi vengono gestiti usando la **cascata** (da qui il nome "Cascading Style Sheets"): essa garantisce che _le regole più specifiche abbiano la precedenza su quelle più generiche_. In caso di conflitti, la regola con la selezione più precisa e un maggior numero di selettori vince.

Le proprietà CSS definite vengono infine applicate agli elementi HTML corrispondenti: Il layout di pagina, i colori, i font e tutti gli aspetti visivi prendono forma.

### Esempio regole di CSS

Selezione degli elementi:

- **h1 { color: red; }** -> Colora tutti i titoli h1 in rosso.
- **.testo-centrato { text-align: center; }** -> Centra il testo all'interno degli elementi con classe "testo-centrato".
- **#pulsante { background-color: blue; }** -> Imposta lo sfondo blu per l'elemento con id "pulsante".

Proprietà CSS:

- **color, font-family, font-size, background-color, padding, border, text-align** sono solo alcuni esempi delle numerose proprietà CSS che definiscono l'aspetto degli elementi.

Combinazione di regole:

- È possibile combinare regole più specifiche per ottenere stili precisi. Ad esempio, si può definire uno stile per tutti i paragrafi e uno stile diverso per i paragrafi all'interno di una sezione specifica.

### Esempio selettori di CSS

I selettori CSS sono come i fari di un sito web: illuminano gli elementi HTML a cui si applicano gli stili, _definendo quale parte del contenuto deve essere formattata_.

- **Selettore per tag**: Seleziona tutti gli elementi di un tipo specifico, come < p >, < h1 > o < img >. Esempio: p { color: red; } - Colora tutti i paragrafi in rosso.
- **Selettore per id**: Seleziona un elemento univoco grazie al suo id univoco. Esempio: #header { background-color: blue; } - Imposta lo sfondo blu per l'elemento con id "header".
- **Selettore per classe**: Seleziona tutti gli elementi con una specifica classe CSS. Esempio: .testo-centrato { text-align: center; } - Centra il testo negli elementi con classe "testo-centrato".
- **Selettore per attributo**: Seleziona gli elementi in base al valore di un attributo HTML. Esempio: a[ href ] { color: green; } - Colora di verde tutti i link.

## Esempio codice CSS

**h1 {** _SELETTORE (Seleziona tutti gli elementi h1)_

**color: #FF0000;** _REGOLA (Imposta il colore del testo rosso)_

**font-family: Arial, sans-serif;** _REGOLA (Imposta il font Arial o un font sans-serif)_

**font-size: 24px;** _REGOLA (Imposta la dimensione del testo a 24 pixel)_

**}**

**.testo-centrato {** _SELETTORE (Seleziona tutti i paragrafi con la classe "testo-centrato")_

**text-align: center;** _REGOLA(Centra il testo all'interno del paragrafo)_

**}**

**#pulsante {** _SELETTORE (Seleziona l'elemento con id "pulsante")_

**background-color: #0000FF;** _REGOLA (Imposta il colore di sfondo blu)_

**padding: 10px 20px;** _REGOLA (Aggiunge spazio intorno al testo del pulsante)_

**border: 2px solid #FFFFFF;** _REGOLA (Aggiunge un bordo bianco)_

**}**
