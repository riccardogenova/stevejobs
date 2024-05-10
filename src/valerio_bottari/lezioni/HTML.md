<!-- @format -->

# HTML

**HTML**, acronimo di _HyperText Markup Leanguage_, è un linguaggio di markup utilizzato per creare e strutturare pagine web.

HTML può essere immaginato come un linguaggio di mattoni: ogni elemento di una pagina web viene descritto da specifici **tag**, come se fossero dei mattoni predefiniti, che vengono combinati per costruire l'intera struttura.

## Caratteristiche

HTML si basa su tre principali features:

- **HyperTex / Collegamenti Ipertestuali**, HTML è progettato per supportare l'_ipertesto_, che è un tipo di testo che contiene collegamenti ipertestuali, comunemente noti come _link_ a altri documenti, risorse o posizioni all'interno dello stesso documento;

- **Markup Leanguage**, HTML utilizza tag e attributi per definire la struttura e il significato del contenuto della pagina web.

  - I _tag_ sono elementi delimitati da parentesi angolari < > che indicano al browser come visualizzare il contenuto.
  - Gli _attributi_ forniscono informazioni aggiuntive sui tag e possono essere utilizzati per modificare il comportamento o l'aspetto del contenuto;

- **Struttura Gerarchica**, Una pagina HTML è strutturata in modo gerarchico utilizzando diversi elementi. Il documento HTML inizia con un elemento < html > che contiene l'intero contenuto della pagina. All'interno di < html >, ci sono due sezioni principali: < head > e < body >.
  - Head: contiene metadati, come il titolo della pagina, collegamenti a fogli di stile CSS e script JavaScript.
  - Body: contiene il contenuto effettivo della pagina, come testo, immagini, video, forme e altro ancora.

### Tag e Attributi

All'interno dell'html, quindi sia nell'head che nel body, gli elementi sono costituiti da **tag** che definiscono il tipo e/o la formattazione dell'elemento, come _< p >...< /p >_ per paragrafo o _< h1 >...< /h1 >_ per intestazione. Gli **attributi** invece aggiungono informazioni ai tag, come _scr_ per il percorso di un'immagine (con tag < img >).

Esistono anche elementi semantici come _< header >, < footer >, < nav >, < article >_ che descrivono il significato del contenuto, oltre alla sua presentazione.

#### Alcuni esempi di Tag

- Tag di struttura: definiscono la gerarchia e le sezioni principali di una pagina web, come < header >, < main >, < footer >, < article >, < section > ecc.
- Tag di testo: formattano il testo all'interno di una pagina, ad esempio < p > per i paragrafi, < h1 > per i titoli, < b > per il grassetto e < i > per il corsivo.
- Tag di contenuti multimediali: inseriscono immagini, video e altri contenuti multimediali all'interno della pagina, utilizzando tag come < img >, < video >, < audio >.
- Tag di collegamenti: creano collegamenti ipertestuali ad altre pagine web o risorse online, utilizzando il tag < a >.
- Tag di form: permettono di creare moduli per la raccolta di dati dagli utenti, utilizzando tag come < form >, < input >, < select >, < textarea > ecc.

## Esempio di pagina HTML

Ecco un esempio di codice HTML semplice per creare un titolo e un paragrafo:

< html >

< head >

< title > Titolo della pagina < /title >

< /head >

< body >

< h1 > Titolo principale < /h1 >

< p > Questo è un paragrafo di testo. < /p >

< /body >

< /html >
