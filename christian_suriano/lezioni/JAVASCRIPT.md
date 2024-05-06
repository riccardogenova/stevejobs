# <span style="color: yellow"> JavaScript

## cos'e'?

JavaScript è un linguaggio di scripting: nel suo utilizzo più frequente, quello della
programmazione per il web, consiste in un linguaggio formale che fornisce al browser determinate
istruzioni da compiere. Una pagina creata in HTML è infatti statica, in quanto una volta che la
pagina è stata interpretata dal browser la disposizione degli elementi rimane immutata, così come il
loro contenuto.
Tramite il JavaScript, invece, è possibile conferire dinamicità alle pagine web permettendo, ad
esempio, di creare rollover sulle immagini, modificare i contenuti in base a input dell'utente o creare
semplici applicazioni per il Web.

## Breve storia di JavaScript

Il linguaggio JavaScript fu sviluppato inizialmente nel 1995 dalla Netscape Communications con il
nome di LiveScript e incluso nel browser Netscape Navigator; il nome fu poi cambiato in
JavaScript anche per l'assonanza con il linguaggio Java, che rappresentava una delle tecnologie più
avanzate per l'epoca, con cui JavaScript non ha niente in comune, se non la sintassi simile.
Dopo il suo decollo e dato il successo di JavaScript, Microsoft decise di aggiungere al proprio
browser Internet Explorer un proprio linguaggio di scriptng, JScript, che aveva però notevoli
differenze con la versione sviluppata dalla Netscape. Nacque così la necessità di standardizzare il
JavaScript e venne sviluppato lo standard ECMAScript.

## javascript e' un linguaggio orientato agli oggetti

JavaScript è considerato un linguaggio orientato agli oggetti per diversi motivi:

- **Prototipi**: In JavaScript, gli oggetti sono creati tramite prototipi anziché classi. Ogni oggetto ha un prototipo da cui eredita proprietà e metodi. Questo modello è conosciuto come "prototipale".
- **Funzioni come oggetti di prima classe**: In JavaScript, le funzioni sono trattate come oggetti di prima classe, il che significa che possono essere assegnate a variabili, passate come argomenti a funzioni e restituite da altre funzioni. Questo offre una grande flessibilità nell'utilizzo delle funzioni per creare oggetti e definire comportamenti.
- **Costruttori di oggetti**: JavaScript consente la creazione di nuovi oggetti utilizzando funzioni costruttrici, che possono essere pensate come classi. Quando una funzione costruttrice viene invocata con l'operatore new, viene creato un nuovo oggetto e il contesto di this all'interno della funzione viene legato a questo nuovo oggetto.
- **Proprietà e metodi** : Gli oggetti JavaScript possono contenere proprietà e metodi. Le proprietà sono semplici variabili associate all'oggetto, mentre i metodi sono funzioni associate all'oggetto che possono essere invocate per eseguire azioni sull'oggetto stesso.
  In sintesi, sebbene JavaScript non abbia un'implementazione tradizionale di classi come altri linguaggi orientati agli oggetti come Java o C++, è orientato agli oggetti grazie alla sua capacità di creare e manipolare oggetti attraverso prototipi, funzioni e costruttori di oggetti.

## le variabili

In JavaScript, le variabili sono contenitori per memorizzare dati. Possono essere utilizzate per immagazzinare valori di diversi tipi, come numeri, stringhe, booleani, oggetti e così via. Le variabili in JavaScript possono essere dichiarate utilizzando tre parole chiave:

1. **var**: Le variabili dichiarate con var possono essere ri-assegnate e ri-declare.
2. **let**: Le variabili dichiarate con let possono essere ri-assegnate ma non ri-declare all'interno dello stesso blocco.
3. **const**: const dichiara una costante il cui valore non può essere riassegnato. Tuttavia, gli oggetti e gli array dichiarati con const possono essere modificati.

## cos'e' lo scope di una variabile?

Lo scope di una variabile in JavaScript definisce la visibilità e l'accessibilità di quella variabile all'interno del codice. In altre parole, indica dove e quando una variabile può essere utilizzata. Ci sono due tipi principali di scope in JavaScript:

1. Global Scope: Le variabili dichiarate al di fuori di qualsiasi blocco di codice, come le funzioni, sono considerate globali e sono accessibili da qualsiasi parte del codice
2. Local Scope: Le variabili dichiarate all'interno di una funzione sono considerate variabili locali e sono accessibili solo all'interno della funzione stessa, non al di fuori di essa.

## gli oggetti

- **cosa sono?**: In JavaScript, gli oggetti sono strutture dati fondamentali che consentono di rappresentare e organizzare dati complessi. Gli oggetti possono contenere dati e funzionalità tramite proprietà e metodi.

  1. **proprieta'**: Le proprietà degli oggetti sono coppie chiave-valore che rappresentano le caratteristiche o gli attributi dell'oggetto. Le proprietà possono essere di qualsiasi tipo di dato JavaScript, inclusi altri oggetti, array, stringhe, numeri, booleani e funzioni.

  2. **metodi**: I metodi degli oggetti sono funzioni associate a un oggetto. Queste funzioni possono essere richiamate per eseguire operazioni specifiche sull'oggetto stesso o sui suoi dati.

In JavaScript, gli oggetti sono estremamente flessibili e possono essere modificati dinamicamente aggiungendo o rimuovendo proprietà e metodi in qualsiasi momento.

## le funzioni

In JavaScript, le funzioni sono blocchi di codice riutilizzabili che eseguono un'azione specifica quando vengono chiamati.
uando eseguiamo unaa funzione passiamo un parametro all'argomento(sempre tra parentesi tonde):

- **parametro**: Parametro: Un parametro è un'etichetta che viene definita nella dichiarazione di una funzione per ricevere dati di input quando la funzione viene chiamata.

- **argomento**: Un argomento è un valore effettivo passato a una funzione quando viene chiamata. Gli argomenti corrispondono ai parametri della funzione in base alla posizione. Quando chiami una funzione, fornisci i valori degli argomenti che corrispondono ai parametri definiti nella dichiarazione della funzione.

## gli Array

In JavaScript, gli array sono strutture dati che consentono di memorizzare una sequenza ordinata di elementi. Gli elementi in un array possono essere di qualsiasi tipo di dati JavaScript, inclusi numeri, stringhe, booleani, oggetti e altri array. Gli array in JavaScript sono oggetti speciali che forniscono metodi e proprietà per manipolare i loro elementi.

gli array possono essere di tipo **const** e **let**:

1. **const**: Quando dichiari un array con const, il riferimento all'array rimane costante, il che significa che non puoi riassegnare l'intero array a un nuovo array. Tuttavia, puoi ancora modificare gli elementi dell'array esistente.

2. **let**: Dichiarare un array con let consente sia la riassegnazione dell'intero array a un nuovo array sia la modifica degli elementi dell'array esistente.

## spread operator

lo spread operator consente di espandere un'espressione, come un array o un oggetto:

- Espansione degli array
- Copia degli oggetti

alcuni link utili:

- [JavaScript PDF](https://pages.di.unipi.it/milazzo/teaching/AA1011-ALG/JavaScript.pdf)
- [Spread Operator](https://kinsta.com/knowledgebase/spread-operator-javascript/)
- [funzioni JavaScript](https://www.html.it/pag/47091/funzioni-in-javascript-i-fondamentali/)
