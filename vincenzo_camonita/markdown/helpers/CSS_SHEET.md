### Selettori:
**Selettore di tipo**:

    elemento {}

**Selettore di classe**:

    .classe {}

**Selettore di ID**:

    #id {}

**Selettore discendente**:

    elemento1 elemento2 {}

**Selettore figlio**:
    
    elemento1 > elemento2 {}

**Selettore attributo**: 
    
    elemento[attributo="valore"] {}

**Pseudo-classi**: 

    :hover, :active, :focus, ecc.

**Pseudo-elementi**: 

    ::before, ::after, ecc.

### Proprietà di stile:
**Folore del testo**:

    color 

**Famiglia di caratteri**:

    font-family 

**Dimensione del carattere:**:

    font-size

**Spessore del carattere (grassetto)**:

    font-weight

**Stile del carattere (corsivo)**:

    font-style

**Allineamento del testo**:  

    text-align

**Colore dello sfondo**:

    background-color

**Immagine di sfondo**:  

background-image: 

**Bordo**:

    border: 

**Margine esterno**:

    margin 

**Spaziatura interna:**

    padding

**Determina come vengono calcolate le dimensioni di un elemento, inclusi margini e padding (content-box, border-box)**

    box-sizing:

**Larghezza, altezza**:

    width, height

**Tipo di visualizzazione (blocco, linea, flessibile, ecc.)**:

    display

**Posizionamento (statico, relativo, assoluto, fisso)**:

    position

**Floating (sinistra, destra)**:

    float

**Comportamento di pulizia del floating**:

    clear

**Indice Z per lo stacking degli elementi**:

    z-index

**Opacità**:

    opacity

**Transizioni**:

    transition

**Animazioni**:

    animation

### Unità di misura:
**Pixel**:

    px
**Percentuale**:

    % 

**Relative alle dimensioni del carattere**:

    em, rem: 
**Percentuale della larghezza o altezza della finestra visualizzata**:

    vw, vh: 

**Unità di misura fisiche**:

    pt, cm, mm, in

### Media Queries:

**Specifica le regole di stile basate su determinate condizioni, come la larghezza dello schermo**:

    @media

### Vendor Prefixes:

**Prefissi del fornitore per proprietà CSS che non sono ancora pienamente supportate da tutti i browser, ad esempio**

    -webkit-, -moz-, -ms-, -o-

### CSS Grid:

**Nuovo modulo CSS per la creazione di layout a griglia flessibili**

### CSS Flexbox:

**Modulo CSS per il posizionamento flessibile degli elementi all'interno di un contenitore**

### Testo:
**Decorazione del testo (sottolineato, barrato, ecc.)**:

    text-decoration 
**Trasformazione del testo (maiuscolo, minuscolo, maiuscolo iniziale)**;

    text-transform 

text-shadow: ombra del testo
word-wrap, white-space, overflow-wrap: gestione del wrapping del testo
line-height: altezza della riga
Background:
background-repeat: ripetizione dell'immagine di sfondo
background-size: dimensioni dell'immagine di sfondo
background-position: posizione dell'immagine di sfondo
background-attachment: comportamento dello scrolling dell'immagine di sfondo
Ombre:
box-shadow: ombra dell'elemento
Flexbox:
display: flex: imposta un contenitore come un flex container
flex-direction: specifica la direzione dei flex items all'interno del flex container
justify-content: allineamento orizzontale dei flex items
align-items: allineamento verticale dei flex items
flex: definisce la crescita, la compressione e la dimensione iniziale di un flex item
Griglia CSS (CSS Grid):
display: grid: imposta un contenitore come un grid container
grid-template-columns, grid-template-rows: definisce le colonne e le righe del grid
grid-column, grid-row: posiziona gli elementi nel grid
Transizioni e Animazioni:
transition-property, transition-duration, transition-timing-function, transition-delay: controlla le transizioni tra gli stati
animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state: controlla le animazioni
Variabili CSS:
--nome-variabile: definisce una variabile CSS
var(--nome-variabile): utilizza una variabile CSS
Trasformazioni:
transform: applica trasformazioni (traslazione, rotazione, scala, inclinazione) agli elementi
transform-origin: specifica il punto da cui avviene la trasformazione
Filtri:
filter: applica effetti visivi come sfocatura, saturazione, contrasto, ecc. agli elementi
Immagini:
object-fit: specifica come un'immagine deve essere ridimensionata per adattarsi al contenitore
object-position: specifica la posizione di un'immagine all'interno del suo contenitore
Rounded Corners:
border-radius: arrotonda gli angoli degli elementi
Overflow:
overflow: specifica come gestire il contenuto che supera i limiti dell'elemento
overflow-x, overflow-y: specifica l'overflow orizzontale o verticale separatamente
Contenuto Generato:
content: aggiunge contenuto generato tramite CSS agli elementi
counter-reset, counter-increment: gestisce i contatori CSS per numerare gli elementi
Colonne:
column-count, column-width, column-gap: crea una disposizione a colonne del contenuto
Filigrana (Watermark):
::before, ::after: pseudo-elementi utilizzati per aggiungere contenuto prima o dopo un elemento esistente, ad esempio per creare filigrane
SVG (Scalable Vector Graphics):
fill: colore di riempimento per elementi SVG
stroke: colore del contorno per elementi SVG
stroke-width: larghezza del contorno per elementi SVG
Variabili per Media Queries:
@media: utilizzato per applicare regole di stile in base a condizioni specifiche, come dimensioni dello schermo
@supports: verifica se il browser supporta una determinata regola CSS