## Formattazione del testo

- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`: Intestazioni di diversi livelli.
  ```html
  <h1>Titolo principale</h1>
  <h2>Sottotitolo</h2>
  ```
- `<p>`: Paragrafi di testo.
  ```html
  <p>Questo è un paragrafo.</p>
  ```
- `<strong>`: Testo in grassetto.
  ```html
  <strong>Testo in grassetto</strong>
  ```
- `<em>`: Testo in corsivo.
  ```html
  <em>Testo in corsivo</em>
  ```
- `<u>`: Testo sottolineato.
  ```html
  <u>Testo sottolineato</u>
  ```
- `<br/>`: Introduzione di un'interruzione di riga.
  ```html
  Prima riga.<br />Seconda riga.
  ```
- `<hr>`: Creazione di una riga orizzontale.
  ```html
  <hr />
  ```

## Link e navigazione

- `<a>`: Definizione di un link ipertestuale.
  ```html
  <a href="https://www.example.com">Link</a>
  ```
- `<nav>`: Definizione di una sezione di navigazione.
  ```html
  <nav>
    <a href="#">Home</a> | <a href="#">About</a> |
    <a href="#">Contatti</a>
  </nav>
  ```
- `<ul>`, `<ol>`, `<li>`: Creazione di elenchi non ordinati e ordinati.

  ```html
  <ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
  </ul>

  <ol>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
  </ol>
  ```

## Multimedia

- `<img>`: Inserimento di immagini.
  ```html
  <img src="immagine.jpg" alt="Descrizione dell'immagine" />
  ```
- `<video>`: Inserimento di video.
  ```html
  <video controls>
    <source src="video.mp4" type="video/mp4" />
    Il tuo browser non supporta il tag video.
  </video>
  ```
- `<audio>`: Inserimento di file audio.
  ```html
  <audio controls>
    <source src="audio.mp3" type="audio/mpeg" />
    Il tuo browser non supporta il tag audio.
  </audio>
  ```

## Tabelle

- `<table>`: Creazione di una tabella.
  ```html
  <table>
    <tr>
      <th>Intestazione 1</th>
      <th>Intestazione 2</th>
    </tr>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
    </tr>
  </table>
  ```
- `<tr>`: Definizione di una riga nella tabella.
- `<th>`: Definizione di una cella dell'intestazione della tabella.
- `<td>`: Definizione di una cella nella tabella.

## Formulari

- `<form>`: Definizione di un modulo.
  ```html
  <form action="/submit" method="post">
    <label for="username">Nome utente:</label>
    <input type="text" id="username" name="username" />
    <button type="submit">Invia</button>
  </form>
  ```
- `<input>`: Creazione di campi di input.
  ```html
  <input type="text" placeholder="Inserisci il testo" />
  ```
- `<textarea>`: Creazione di un campo di testo multilinea.
  ```html
  <textarea rows="4" cols="50" placeholder="Inserisci il testo"></textarea>
  ```
- `<button>`: Creazione di pulsanti.
  ```html
  <button type="button">Clicca qui</button>
  ```

## Struttura della pagina

- `<html>`: Elemento radice di un documento HTML.
- `<head>`: Contenitore per metadati e collegamenti allo stile.
- `<title>`: Definizione del titolo della pagina.
- `<body>`: Contenuto principale della pagina.

## Semantica

- `<header>`: Intestazione di una sezione.
- `<footer>`: Piè di pagina di una sezione.
- `<section>`: Sezione generica di una pagina.
- `<article>`: Contenuto autonomo che può essere distribuito e riciclato.
- `<aside>`: Contenuto correlato all'articolo principale ma che può essere considerato separato da esso.
