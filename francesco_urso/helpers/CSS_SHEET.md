# CSS

## Selettori CSS

<!-- arricchire con vari selettori, anche concatenati, linguaggio sas,  -->

### Selettori di Tipo

**Elemento**: Seleziona tutti gli elementi di un determinato tipo.

>p { color: blue; }

### Selettori di Classe

**.classe**: Seleziona tutti gli elementi che hanno un certo valore di classe.

>.test { font-size: 16px; }

### Selettori di ID

**#id**: Seleziona un elemento con un determinato ID.

>#header { background-color: #333; }

### Selettori di Figlio

**elemento figlio**: Seleziona tutti gli elementi figlio di un determinato elemento.

>ul li { list-style-type: square; }

## Proprietà CSS

**Proprietà di Testo**

- color: Specifica il colore del testo.
- font-family: Specifica il tipo di carattere.
- font-size: Specifica la dimensione del testo.
- font-weight: Specifica il peso del carattere (normale, grassetto, ecc.).

## Proprietà di Background

- background-color: Specifica il colore dello sfondo.
- background-image: Specifica un'immagine di sfondo.
- background-position: Specifica la posizione dell'immagine di sfondo.

## Proprietà di Margine e Padding

- margin: Specifica il margine esterno di un elemento.
- padding: Specifica lo spazio interno di un elemento.

## Proprietà di Bordo

- border: Specifica lo stile, il colore e lo spessore del bordo.
- border-radius: Specifica il raggio degli angoli del bordo.

## Unità di Misura

### Unità di Lunghezza

- px: Pixel.
- em: Relativo alla dimensione del carattere.
- %: Percentuale rispetto al contenitore genitore.

### Unità di Colore

- Hexadecimal: #RRGGBB.
- RGB: rgb(r, g, b).
- RGBA: rgba(r, g, b, a) (con trasparenza).

## Eredità e Sovrascrittura

**Inheritance**
Alcune proprietà vengono ereditate dagli elementi figlio.

**Sovrascrittura**
Le regole CSS con maggiore specificità sovrascrivono quelle meno specifiche.
Le dichiarazioni più recenti sovrascrivono quelle precedenti.
