<!-- @format -->

# CSS

## cos'e'?

_Il CSS, acronimo di Cascading Style Sheets (fogli di stile in cascata), è un linguaggio di stile utilizzato per definire l'aspetto e la formattazione di un documento HTML o XML. In altre parole, mentre l'HTML fornisce la struttura di base del contenuto di una pagina web, il CSS determina come quel contenuto deve essere presentato agli utenti, incluso il layout, i colori, i tipi di carattere e altri aspetti visivi._

_Il CSS funziona associando regole di stile a elementi specifici del documento HTML. Queste regole possono essere definite all'interno del documento stesso o in file esterni, che vengono poi collegati al documento HTML utilizzando apposite dichiarazioni._

_Grazie al CSS, è possibile mantenere la separazione tra la struttura del contenuto e la sua presentazione, consentendo agli sviluppatori di apportare modifiche di stile in modo rapido e efficiente, senza dover modificare direttamente il contenuto HTML._

## Alcune parole chiavi:

_Ecco alcune parole chiave importanti relative al CSS:_

1. _**Selettore**: Un selettore CSS è un pattern che viene utilizzato per selezionare gli elementi HTML ai quali si desidera applicare uno stile._

2. _**Proprietà**: Le proprietà CSS sono gli attributi che definiscono l'aspetto degli elementi selezionati. Ad esempio, la proprietà `color` definisce il colore del testo._

3. _**Valore**: I valori CSS sono specifiche istanze di proprietà, che determinano l'aspetto effettivo degli elementi. Ad esempio, `"red"` potrebbe essere un valore per la proprietà `color`._

4. _**Regola CSS**: Una regola CSS è composta da un selettore e un insieme di dichiarazioni di stile che definiscono come gli elementi selezionati dovrebbero essere visualizzati._

5. _**Dichiarazione CSS**: Una dichiarazione CSS è costituita da una proprietà e dal suo valore, separati da due punti e terminati da un punto e virgola. Ad esempio: `color: blue;`._

6. _**Foglio di stile esterno**: Un file CSS esterno è un file separato contenente regole di stile che possono essere collegati a un documento HTML tramite un elemento `<link>` o importati utilizzando la direttiva `@import`._

7. _**Classi e ID**: Classi e ID sono attributi utilizzati per identificare specifici elementi HTML in modo da poter applicare regole di stile specifiche._

8. _**Pseudo-classi e Pseudo-elementi**: Le pseudo-classi e i pseudo-elementi consentono di applicare stili a elementi HTML in situazioni specifiche, come quando un elemento è in uno stato particolare o quando è il primo figlio di un altro elemento._

9. _**Box Model**: Il modello a caselle (box model) in CSS definisce il layout e il design degli elementi HTML in termini di contenitore (box) che contiene il contenuto, il padding, il bordo e il margine._

10. _**Cascata**: La cascata (cascading) in CSS si riferisce al processo di risoluzione dei conflitti quando più regole di stile si applicano allo stesso elemento. La cascata segue un ordine di specificità e di posizione nel codice._

11. _**Struttura ad albero di un documento**
    Un altro concetto fondamentale è quello della struttura ad albero di un
    documento. Il meccanismo fondamentale dei CSS è infatti l'**ereditarietà**. Esso fa sì che molte
    proprietà impostate per un elemento siano automaticamente ereditate dai suoi discendenti:Il documento è in buona sostanza una perfetta forma di gerarchia ordinata in cui tutti gli elementi
    hanno tra di loro una relazione del tipo genitore-figlio_
    _ *Un elemento si dice genitore (parent) quando contiene altri elementi.*_
    _Si dice figlio (child) quando
    è racchiuso in un altro elemento._

## le Pseudo-Classi:

_Le pseudo-classi sono selezionatori che consentono di applicare stili a un elemento HTML in base a uno stato particolare che non può essere rappresentato dai selettori classici. Ad esempio, è possibile applicare uno stile a un link quando l'utente ci passa sopra con il mouse, quando viene cliccato, o quando il link è stato già visitato. Alcuni esempi di pseudo-classi comuni includono :hover, :active, :visited, :focus, :first-child, :last-child, :nth-child, etc._

## gli Pseudo-Elementi

_Gli pseudo-elementi consentono di creare elementi virtuali che non esistono nel markup HTML, ma che possono essere selezionati e stilizzati tramite CSS. Ad esempio, è possibile creare un'ombra intorno a un elemento senza dover aggiungere un elemento HTML aggiuntivo. I pseudo-elementi sono preceduti da due punti ::. Alcuni esempi di pseudo-elementi comuni includono ::before, ::after, ::first-line, ::first-letter, etc._

## concetto di Cascata

_Il concetto di cascata in CSS si riferisce all'ordine di priorità e alla risoluzione dei conflitti quando più regole di stile si applicano allo stesso elemento. Le regole CSS possono provenire da diverse fonti, come fogli di stile esterni, fogli di stile incorporati, dichiarazioni CSS inline e l'ereditarietà. Quando più regole si applicano allo stesso elemento, vengono utilizzate diverse considerazioni per determinare quale regola deve prevalere. Queste considerazioni includono la specificità delle regole, l'ordine di dichiarazione nel codice e l'importanza delle regole. La cascata assicura che gli stili vengano applicati in modo coerente e prevedibile, consentendo agli sviluppatori di gestire la complessità dello stile delle pagine web._

## cos'e' il DOM?

_Il DOM, acronimo di Document Object Model (Modello ad Oggetti del Documento) è una rappresentazione del documento web che il browser può utilizzare per interpretare e manipolare il contenuto, la struttura e lo stile di una pagina web._

_Il DOM organizza il contenuto del documento web in un albero di oggetti, dove ogni nodo dell'albero rappresenta un elemento del documento, come tag HTML, attributi, testo, ecc. Questi nodi possono essere manipolati tramite scripting, come JavaScript, per aggiungere, rimuovere o modificare dinamicamente gli elementi e il loro contenuto._

_Il DOM è cruciale per lo sviluppo web dinamico e interattivo, poiché consente agli sviluppatori di creare pagine web che rispondono agli input degli utenti e che possono essere aggiornate dinamicamente senza dover ricaricare l'intera pagina._

## cos'e' il CSSOM?

_"CSSOM" (CSS Object Model), è una rappresentazione degli stili CSS di un documento HTML o XML, anch'essa organizzata come un albero di oggetti. Il CSSOM è utilizzato dai browser web per calcolare e applicare gli stili CSS ai nodi del DOM, consentendo così la presentazione visiva dei contenuti web._

## stylesheet e alternate styleseet:

_Uno "stylesheet" è un file che contiene regole di stile CSS (Cascading Style Sheets) che vengono applicate a un documento HTML per definire l'aspetto e la formattazione dei suoi elementi. Il termine "stylesheet" è comunemente utilizzato per riferirsi a un file CSS esterno che viene collegato a un documento HTML utilizzando l'elemento <link> o la direttiva @import._

_Gli "alternate stylesheet", invece, sono versioni alternative di un stylesheet che possono essere applicate al documento HTML in modo dinamico dall'utente. Questo permette agli utenti di selezionare tra diverse presentazioni o temi per una pagina web, fornendo una maggiore flessibilità nell'esperienza di navigazione._

_Nel contesto HTML, gli "alternate stylesheet" sono definiti utilizzando l'elemento <link> con l'attributo rel impostato su "alternate stylesheet" e specificando il tipo MIME del documento (type="text/css")._
