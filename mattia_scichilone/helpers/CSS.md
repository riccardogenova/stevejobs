CSS, è l'acronimo di "Cascading Style Sheet", è un linguaggio di stile utilizzato per definire l'aspetto e la formattazione di documenti HTML.

Con CSS è possibile controllare gli attributi visivi come il colore del testo, la dimensione dei caratteri, il layout delle pagine, la distanza degli elementi.

L'utilizzo di CSS consente di separare il contenuto HTML dalla presentazione CSS, permettendo una maggiore flessiiblità, facilità di manutenzione e migliorando l'accesibilità del sito web.

Quando un browser visualizza un documento, deve combinare il contenuto del documento con le informazioni dello stile, elaborando il documento con le informazioni dello stile.

il browseer carica l'HTML in un DOM (Document Object Model) che rappresenta il documento nella memoria del computer.

Il browser quindi recupera la maggior parte delle risorse collegate del documento HTML, come immagini incorporate, video e persino JavaScript viene gestito un po' nel processo.

Il browser analizza il CSS recuperando e ordinando le diverse regole di base ai tipi di selettore in diversi "Bucket", ad esempio elemento, classe, ID etc...
in base ai selettori che trova, stabilisce quali regole dovrebbero essere applicate a quali nodi nel DOM e associa loro lo stile come richiesto (questo passaggio intermedio è chiamato albero di rendering).

l'albero di rendering è disposto nella struttura in cui dovrebbero apparire dopo che le regole gli sono state applicate.

La visualizzazione della pagina viene mostrata sullo schermo (questa fase si chiama pittura).