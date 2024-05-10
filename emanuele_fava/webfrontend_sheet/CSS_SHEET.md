# CSS Cheat Sheet

## Selettori

I selettori CSS consentono di identificare gli elementi HTML a cui applicare gli stili. Alcuni esempi comuni includono:

- **Selettore di tipo**: `p` per i paragrafi, `h1` per i titoli di primo livello, ecc.
- **Selettore di classe**: `.classe` per selezionare elementi con una specifica classe.
- **Selettore di ID**: `#id` per selezionare un elemento con un ID specifico.
- **Selettore universale**: `*` per selezionare tutti gli elementi.

Esempio:

```css
p {
  color: blue;
}

.classe {
  font-size: 16px;
}

#id {
  background-color: #f0f0f0;
}
```

Ecco la sezione "Proprietà" suddivisa in sotto-sezioni con esempi di proprietà specifiche che influenzano testi, box e altri elementi:

## Proprietà

Le proprietà CSS definiscono l'aspetto degli elementi selezionati. Alcune delle proprietà più utilizzate includono:

### Testo

- **color**: definisce il colore del testo.
- **font-family**: imposta il tipo di carattere.
- **font-size**: specifica la dimensione del carattere.
- **font-weight**: imposta lo spessore del carattere (bold, normal, etc.).
- **text-align**: allinea il testo (left, right, center, justify).

Esempio:

```css
p {
  color: blue;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
```

### Box

- **background-color**: imposta il colore dello sfondo.
- **padding**: definisce lo spazio interno dell'elemento.
- **margin**: imposta lo spazio esterno dell'elemento.
- **border**: definisce lo stile, lo spessore e il colore del bordo.
- **border-radius**: arrotonda gli angoli del bordo.

Esempio:

```css
.box {
  background-color: #f0f0f0;
  padding: 20px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5px;
}
```

### Sfondo

- **background-image**: imposta un'immagine di sfondo per l'elemento.
- **background-repeat**: specifica se e come l'immagine di sfondo deve essere ripetuta.
- **background-position**: definisce la posizione iniziale dell'immagine di sfondo.

Esempio:

```css
.header {
  background-image: url("header-background.jpg");
  background-repeat: no-repeat;
  background-position: center;
}
```

### Dimensioni e Posizionamento

- **width**: imposta la larghezza dell'elemento.
- **height**: imposta l'altezza dell'elemento.
- **max-width**: specifica la larghezza massima dell'elemento.
- **max-height**: specifica l'altezza massima dell'elemento.
- **position**: imposta il metodo di posizionamento dell'elemento (static, relative, absolute, fixed).
- **top, right, bottom, left**: definiscono la posizione dell'elemento rispetto al suo contenitore o al documento.

Esempio:

```css
.sidebar {
  width: 250px;
  max-width: 80%;
  position: fixed;
  top: 0;
  left: 0;
}
```

### Animazioni

- **animation-name**: specifica il nome dell'animazione.
- **animation-duration**: definisce la durata dell'animazione.
- **animation-delay**: specifica un ritardo prima dell'inizio dell'animazione.
- **animation-timing-function**: definisce la funzione di temporizzazione dell'animazione.
- **animation-iteration-count**: specifica quante volte l'animazione deve ripetersi.

Esempio:

```css
@keyframes slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.slide-in {
  animation-name: slide;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: 1;
}
```

## Box Model

Il modello box CSS è un concetto fondamentale che definisce lo spazio occupato da un elemento HTML. È composto da:

- **Content**: il contenuto dell'elemento.
- **Padding**: lo spazio tra il contenuto e il bordo.
- **Border**: il bordo dell'elemento.
- **Margin**: lo spazio esterno dell'elemento.

Esempio:

```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 1px solid #000;
  margin: 10px;
}
```

## Layout

Il layout in CSS può essere gestito utilizzando varie tecniche, tra cui:

- **Float**: posiziona gli elementi l'uno accanto all'altro.
- **Flexbox**: offre un modo flessibile per organizzare gli elementi in un contenitore.
- **Grid**: crea layout basati su righe e colonne.

Esempio di layout Flexbox:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Media Queries

Le media queries consentono di applicare stili basati sulle caratteristiche del dispositivo, come la larghezza dello schermo o l'orientamento. Alcuni esempi includono:

```css
@media screen and (min-width: 768px) {
  /* Stili per schermi con larghezza minima di 768px */
}

@media (orientation: landscape) {
  /* Stili per schermi in modalità landscape */
}
```

Esempio di media query:

```css
@media screen and (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```

## Pseudo-classi e Pseudo-elementi

Le pseudo-classi e i pseudo-elementi consentono di selezionare elementi in base allo stato o alla posizione all'interno del documento. Alcuni esempi sono:

- **:hover**: seleziona un elemento quando viene passato sopra con il mouse.
- **:nth-child()**: seleziona un elemento in base alla sua posizione all'interno del genitore.

Esempio:

```css
a:hover {
  color: red;
}

li:nth-child(even) {
  background-color: #f2f2f2;
}
```
