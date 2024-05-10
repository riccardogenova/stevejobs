<!-- @format -->

# Markdown SHEET

Comandi divisi per categoria:

- Commenti
- Sintesi di base
- Tabelle
- Testo
- Tabulazione

## Commenti

Per inserire un commento che verrà ignorato durante la visualizzazione:

- `<!-- Inserire qui un commento -->`

## Sintassi di base

### Intestazione

Le **intestazioni** sono utilizzate per creare titoli o sottotitoli all'interno di un documento. Puoi creare intestazioni utilizzando il carattere #, seguito da uno spazio e il testo dell'intestazione. Più # si aggiungono, più grande sarà l'intestazione.

- `# Titolo principale (H1)`
- `## Sottotitolo (H2)`
- `### Sottotitolo più piccolo (H3)`

### Grassetto e Corsivo

Per scrivere testo in **grassetto**, o due trattini bassi \_\_.

- `**Questo è testo in grassetto**`

Per scrivere testo in **corsivo**, o un singolo trattino basso \_.

- `*Questo è testo in corsivo*`

### Elenco puntato

Per creare un **elenco puntato** puoi utilizzare uno degli asterischi \*, dei trattini -, o dei segni più +, seguito da uno spazio e il testo dell'elemento dell'elenco.

- `* Elemento 1`
- `* Elemento 2`
- `* Elemento 3`

### Elenco numerato

Per creare un **elenco numerato** puoi utilizzare semplicemente un numero seguito da un punto e uno spazio, seguito dal testo dell'elemento dell'elenco.

- `1. Elemento`
- `2. Elemento`
- `3. Elemento`

### Link

Puoi creare **link ipertestuali** utilizzando la sintassi `[testo del link](URL)`. Questo consente di rendere cliccabile un certo testo, collegandolo a una specifica pagina web.

- `[Visita il mio sito](https://www.ilmiowebsite.com)`

### Immagini

Puoi inserire immagini nei tuoi documenti utilizzando la sintassi `![testo alternativo](URL dell'immagine)`.

- `![Logo della mia azienda](https://www.example.com/images/logo.png)`

### Citazioni

Puoi creare citazioni utilizzando il simbolo `>` seguito dal testo della citazione.

- `> Questo è un esempio di citazione.`

## Tabelle

Per creare una tabella, utilizza la seguente sintassi:

> | Header 1 | Header 2 | Header 3 | \
> |----------|----------|----------| \
> | Riga 1 | Dato A | Dato X | \
> | Riga 2 | Dato B | Dato Y | \
> | Riga 3 | Dato C | Dato Z |

Per specificare l'allineamento delle colonne aggiungendo dei due punti `:` nella riga di formato.

> | Nome | Cognome | Età | \
> |:--------|:-------:|----:| \
> | Marco | Rossi | 25 | \
> | Laura | Bianchi | 30 | \
> | Giovanni| Verdi | 40 |

## Tabulazione

### Elenchi annidati

Per creare un elenco annidato, basta indentare gli elementi dell'elenco interni rispetto a quelli esterni utilizzando spazi.

> - Elemento principale
>   - Sotto elemento 1
>   - Sotto elemento 2
>     - Sotto-sotto elemento A
>     - Sotto-sotto elemento B
>   - Sotto elemento 3
> - Altro elemento principale

### Linea separatrice

Per creare una linea separatrice, puoi utilizzare tre o più dei seguenti caratteri consecutivi.

- `***`
- `---`
- `___`

### Citazione con indentazione

Per creare un blocco di citazione con indentazione:

> `> ```css`\
> `> p {`\
> `>    color: blue;`\
> `>    font-size: 14px;`\
> `> }`\
> `> ``` `

### Escape citazione

Nelle citazioni, il carattere `\` può essere utilizzato per "escape".

- `> Questo è un esempio di citazione con un carattere speciale: \
Questo è un esempio di citazione con un carattere speciale`

### Evidenziare

l testo racchiuso tra due accenti grave (``), i backtick, è utile quando si vuole evidenziare brevi frammenti di codice o comandi all'interno del testo del documento.

- `` `Testo Evidenziato` ``
