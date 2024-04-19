## comandi di base per una pagina HTML

Definisce il tipo di documento come HTML5.

```html
<!DOCTYPE html>
```

Elemento radice che contiene tutto il documento HTML.

```html
<html></html>
```

Contiene metadati e informazioni di configurazione della pagina.

```html
<head></head>
```

Definisce il titolo della pagina visualizzato nella barra del browser.

```html
<title></title>
```

Contiene il contenuto visibile della pagina.

```html
<body></body>
```

scheletro della pagina

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Titolo X</title>
  </head>
  <body>
    .....
  </body>
</html>
```

## tag generali

- `<h1>`-`<h6>`: Titoli di varie dimensioni.
- `<p>`: Paragrafi di testo.
- `<a href="url">Testo del Link</a>`: Link ipertestuali.
- `<img src="url" alt="Testo Alternativo">`: Inserimento di immagini.
- `<ul>`: Lista non ordinata.
- `<ol>`: Lista ordinata.
- `<li>`: Elemento di una lista.
- `<div>`: Blocco di divisione per raggruppare contenuti.
- `<span>`: Elemento inline per formattare porzioni di testo.
- `<table>`: Tabella per visualizzare dati tabulari.
- `<th`-`</td>`: Ogni cella della tabella
- `<form>`: Form per raccogliere dati dagli utenti.
- `<pre>`: The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.
- `<code>`: The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize.

## Attributi

- `id`: Identifica un elemento HTML.
- `class`: Specifica una o più classi CSS per un elemento.
- `href`: Specifica l'URL di destinazione per i link ipertestuali.
- `src`: Specifica l'URL di origine per le immagini e altri elementi multimediali.
- `alt`: Fornisce un testo alternativo per le immagini nel caso in cui non possano essere visualizzate.
- `title`: Fornisce un titolo per un elemento, che può essere visualizzato come tooltip quando l'utente passa il mouse sopra l'elemento.
- `style`: Specifica gli stili CSS inline per un elemento.
- `target`: Specifica il comportamento del collegamento ipertestuale quando viene cliccato (ad esempio, `_blank` per aprire il link in una nuova finestra).
- `rel`: Specifica la relazione tra il documento corrente e il documento collegato (ad esempio, `stylesheet` per collegamenti a fogli di stile CSS esterni).
- `type`: Specifica il tipo di un input nel caso di elementi `<input>`.
- `name`: Specifica il nome di un elemento, utile per i form.
- `value`: Specifica il valore di un input, utile per i form.
- `placeholder`: Fornisce un suggerimento di testo per un input.
- `disabled`: Disabilita un elemento.
- `readonly`: Specifica che un input è di sola lettura.
- `required`: Specifica che un input è obbligatorio in un form.
- `checked`: Specifica che una casella di controllo o un pulsante radio è selezionato.
- `maxlength`: Specifica il numero massimo di caratteri consentiti per un input.
- `min` e `max`: Specifica il valore minimo e massimo per un input di tipo numerico.
- `step`: Specifica l'incremento o il decremento del valore per un input di tipo numerico.
- `rows` e `cols`: Specifica il numero di righe e colonne per un elemento `<textarea>`.
- `aria-*`: Gli attributi ARIA (Accessible Rich Internet Applications) forniscono informazioni aggiuntive sull'accessibilità per gli elementi HTML.
- `placeholder`: Fornisce un suggerimento di testo per un campo di input.
- `size`: Specifica la dimensione visibile di un campo di input (ad esempio, per `<input type="text">`).
