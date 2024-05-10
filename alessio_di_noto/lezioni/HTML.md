# Cosa è l'HTML

HTML è l'acronimo di HyperText Markup Language ("Linguaggio di contrassegno per gli Ipertesti") e non è un linguaggio di programmazione. Si tratta invece di un linguaggio di markup (di 'contrassegno' o 'di marcatura'), che permette di indicare come disporre gli elementi all'interno di una pagina.
Queste indicazioni vengono date attraverso degli appositi marcatori, detti tag ('etichette'), che hanno la caratteristica di essere inclusi tra parentesi angolari (ad es, <img> è il segnaposto di un'immagine).

# Pagina HTML

Con HTML quindi indichiamo, attraverso i tag, quali elementi dovranno apparire su uno schermo e come essi debbano essere disposti. Tutte queste indicazioni sono contenute in un documento HTML, spesso detto `Pagina HTML`. Una pagina HTML è rappresentata da un file di testo, ovvero un file che possiamo modificare con programmi come notepad e in genere hanno un nome che finisce con l'estensione .html.

# Linguaggio Dichiarativo

HTML non possiede i costrutti propri della programmazione, come i meccanismi "condizionali", che consentono di reagire in modo diverso a seconda del verificarsi di una condizione ("in questa situazione fai questo, in quest'altra fai quest'altro"), o i costrutti iterativi ("ripeti questa azione, finché non succede questo").
Si parla in questo caso di `linguaggio dichiarativo`, che serve appunto ad indicare cosa deve apparire sullo schermo (testi, immagini, suoni, etc.), dove e in che sequenza. Nel caso di linguaggi in cui specifichiamo algoritmi precisi con "strutture di controllo", come C, C++, Java, o anche PHP e JavaScript, parliamo di "linguaggi imperativi".

# HTML5, Web e mobile

La versione di HTML che esamineremo è quella più attuale: HTML 5, che è anche la versione che nasce appositamente per uscire dal solo ambito Web e diventare piattaforma per la creazione di applicazioni, anche desktop e mobile.

La specifica HTML5 infatti si compone della definizione di:

- una sintassi per il markup più efficace e adatta alle esigenze più moderne, con l'introduzione di specifici controlli per i form o degli attributi "data-" da arricchire i tag di informazioni specifiche;

- una serie di API che consentono di gestire, a livello approfondito aspetti come network, multimedia, e hardware dei dispositivi. In altre parole dalla gestione del video e dell'audio al monitoraggio delle batterie di un device.

Questo sviluppo dello standard ha dato il via alla generazione delle cosiddette App mobile ibride, che sfruttano sia HTML5, per creare app che si possono distribuire, come quelle native, sui marketplace dei dispositivi più comuni (come Google Play per Android ad esempio).

# Link e ipertesti

La potenza di Internet consiste nell'essere un insieme esteso di contenuti connessi tra loro. Il linguaggio HTML e i link sono alla base di questo meccanismo che consente di muoversi rapidamente tra testi, immagini, video, applicazioni e quant'altro creando percorsi i propri percorsi di navigazione in totale autonomia.

# Elementi e tag in HTML

In una pagina HTML tutti gli elementi sono connotati da tag (letteralmente "etichette"). Si tratta di marcatori che evidenziano non tanto l'aspetto, quanto il senso, il ruolo, o l'organizzazione che vogliamo assegnare ai contenuti. Ad esempio se indichiamo un titolo con <h1> per noi le parole in quel titolo rappresentano il tema principale della pagina, al di là del modo in cui saranno visualizzate.

- Questa visione "semantica" degli elementi è fondamentale, ci aiuta a non perdere di vista il fatto che una pagina deve essere un luogo ordinato di informazioni, soprattutto sul Web. Se pensiamo ad esempio al classico contesto delle ricerche online, risulta naturale comprendere che tanto più una pagina sarà associabile a una keyword o a un tema, tanto più facile sarà trovarla. Per questo sarà importante curare cose come l'organizzazione del testo, la definizione dei titoli, dei link dei grassetti.

- Tuttavia in HTML possiamo anche definire lo scheletro dell'interfaccia utente di una app, e in questo frangente i tag diventano utili come supporto all'organizzazione del layout o alla definizione di aree specifiche per l'esperienza utente.

In tutti e due i casi continuiamo a non parlare di "grafica", ma di struttura

# Come è fatto un tag

Un tag è una keyword del linguaggio racchiusa tra parentesi angolari (<>). Esempi di tag sono <html>, <body> e <h1>.
I tag HTML non sono "case sensitive" ciò significa che scrivere <head> o <HEAD> è esattamente la stessa cosa. In ogni caso la consuetudine è quella di scrivere i tag in minuscolo (era una raccomandazione in HTML4 e una richiesta in XHTML).

#Elementi contenitori e autonomi, il DOM

Molti elementi in HTML servono per descrivere porzioni di pagina, aree, o contenuti. Ad esempio <body> descrive il contenuto di tutta la pagina, <h1> racchiude un titolo e <p> denota un paragrafo nel testo.

Pertanto un elemento HTML è quasi sempre un contenitore e il suo contenuto è delimitato da:

- tag di apertura (es. <p>);
- tag di chiusura (es. </p>).

<p>Lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,
sed quia non numquam eius modi tempora incidunt, ut labore et dolore
magnam aliquam quaerat voluptatem.</p>

Le pagine HTML sono quindi formate per composizione di contenitori (annidati) l'uno dentro l'altro. Per capire meglio riprendiamo il nostro semplice esempio:

<!doctype html>
<html lang="it">
<head>
<title>Ciao Mondo!</title>
</head>
<body>
<h1>Ciao Mondo!</h1>
<p>Questa è la nostra prima pagina HTML!</p>
<img src="immagine.jpg">
</body>
</html>

La struttura che emerge è quella di un albero, in cui i rami sono tutti tag contenitori e le estremità sono composte da testi, immagini o altri elementi come le caselle di input. Tutti questi elementi finali non sono contenitori e non necessitano di un tag di chiusura.

html
|
+---head
| |
| +---title
| |
| +---"Ciao Mondo!"
|
+---body
|
+---h1
|
+---"Ciao Mondo!"
|
p
|
+---"Questa è la nostra prima pagina HTML!"
|
img

L'albero che abbiamo tracciato ricorda il modo in cui viene rappresentato il documento nella memoria del browser, ovvero il DOM (Document Object Model), il modello del documento HTML di cui l'elemento <html> è il nodo radice.

# Indentare il codice

Spesso per sottolineare l'annidamento di un elemento in un altro si usa "indentare il codice", ovvero discostare il contenuto dall'inizio della riga lasciando spazi (o tab). In pratica apertura e chiusura del tag si trovano allo stesso livello, mentre il contenuto viene spostato verso destra di un tab.
