
Ecco alcuni comandi importanti del CSS che vengono comunemente utilizzati per definire lo stile e la presentazione degli elementi HTML:

1. **Selettori**: I selettori vengono utilizzati per selezionare gli elementi HTML ai quali applicare uno stile. Alcuni esempi comuni includono selettori di tipo (ad esempio, `p` per i paragrafi), selettori di classe (ad esempio, `.classe`), e selettori di ID (ad esempio, `#id`).

2. **Proprietà e Valori**: Le proprietà definiscono gli aspetti degli elementi HTML che si desidera stilizzare, mentre i valori specificano come questi aspetti dovrebbero essere visualizzati. Ad esempio, `color` è una proprietà che definisce il colore del testo, e `blue` è un valore per questa proprietà.

3. **Dimensioni e Posizionamento**: CSS permette di controllare le dimensioni degli elementi (come altezza e larghezza) e il loro posizionamento sullo schermo (come margine, padding e posizione).

4. **Fondo e Border**: È possibile definire il colore, l'immagine o altri attributi del background di un elemento, così come i bordi che lo circondano, utilizzando le proprietà `background` e `border`.

5. **Tipografia**: CSS consente di controllare il tipo di carattere, la dimensione del testo, lo stile (grassetto, corsivo), il ritiro e altri aspetti della tipografia.

6. **Effetti di Transizione e Animazione**: È possibile utilizzare CSS per creare transizioni fluide tra gli stati di un elemento (ad esempio, al passaggio del mouse) o animazioni più complesse.

7. **Pseudo-classi e Pseudo-elementi**: Le pseudo-classi e i pseudo-elementi consentono di applicare stili a elementi HTML in situazioni specifiche, come quando un elemento è in uno stato particolare o quando è il primo figlio di un altro elemento.

8. **Media Queries**: Le media queries permettono di applicare regole di stile basate sulle caratteristiche del dispositivo o del browser, come la larghezza dello schermo o l'orientamento.

Questi sono solo alcuni dei comandi fondamentali del CSS, ma ce ne sono molti altri che consentono di creare stili sofisticati e adattabili per le pagine web.


---
**CSS esterni e interni**

E' esterno un foglio di stile definito in un file separato dal documento. Si tratta di semplici
documenti di testo editabili anche con il Blocco Note o TextEdit ai quali si assegna l'estensione .css.

**esempio inserimento file css tramite link**
<html>
<head>
<title>Inserire i fogli di stile in un documento</title>
<link rel="stylesheet" type="text/css" href="stile.css">
</head>
<body>

**esempio inserimento file css tramite @import**
<style>
 @import url(stile.css);
</style>

**esempio fogli incorporati**
<html>
<head>
<title>Inserire i fogli di stile in un documento</title>
<style type="text/css">
body {
background: #00008B;
}
</style>
</head>
<body>

[per altre informazioni consulta questo utilissimo link](https://www.kadath.it/Risorse/CSS.pdf)