# HTML SHEET

Comandi divisi per tipologia:

- Struttura di Base
- Testo
- Liste
- Immagini e Media
- Tabelle
- Form

## Struttura di Base

- `<!DOCTYPE>`: Definisce il tipo di documento HTML e la sua versione.
- `<html>`: Il contenitore radice di un documento HTML.
- `<head>`: Contiene metadati (come il titolo della pagina, collegamenti a fogli di stile e script) che non vengono visualizzati direttamente nella pagina web.
- `<title>`: Definisce il titolo della pagina, che appare nella barra del titolo del browser.
- `<body>`: Contiene il contenuto visibile della pagina web.
- `<meta>`: Definisce metadati aggiuntivi che non vengono visualizzati direttamente nella pagina, come la codifica dei caratteri, la descrizione della pagina per i motori di ricerca, i tag delle parole chiave, ecc.
- `<link>`: Collega il documento HTML a un foglio di stile esterno (CSS) o a altre risorse esterne come icone del sito, font, file di script, ecc
- `<script>`: Utilizzato per inserire script JavaScript all'interno della pagina HTML o per collegare script esterni.
- `<style>`: Definisce stili CSS direttamente all'interno del documento HTML, per regolare l'aspetto e la formattazione del contenuto.
- `<base>`: Definisce l'URL di base per risorse relative all'interno della pagina, come collegamenti ipertestuali e immagini.

## Testo

- `<h1>, <h2>, ..., <h6>`: Definisce i titoli di diversi livelli di importanza.
- `<p>`: Definisce un paragrafo di testo.
- `<a>`: Crea un link ipertestuale.
- `<strong>`: Rende il testo in grassetto.
- `<em>`: Rende il testo in corsivo.
- `<u>`: Sottolinea il testo.
- `<span>`: Definisce un'area di testo in linea o un gruppo di elementi in linea. Viene spesso utilizzato per applicare stili o manipolare parti specifiche del testo.
- `<br/>`: Inserisce un'interruzione di riga, forzando il testo successivo a scendere alla riga successiva. È utile quando si desidera inserire una nuova linea senza creare un nuovo paragrafo.
- `<pre>`: Definisce il testo preformattato, mantenendo la formattazione originale, come spazi e ritorni a capo. Utile per la visualizzazione di codice o testo formattato.
- `<blockquote>`: Definisce un blocco di citazione, solitamente visualizzato con un margine sinistro più ampio. Spesso utilizzato per citazioni di testo da altre fonti.
- `<cite>`: Definisce il titolo di una fonte citata, come un libro, un articolo o un'altra risorsa. Di solito è visualizzato in corsivo.
- `<code>`: Definisce il testo come codice di programmazione, mostrandolo con una formattazione monospazio. Utile per mostrare esempi di codice all'interno di un paragrafo.
- `<sub>`: Definisce il testo come esponente, posizionandolo leggermente più in basso della linea di base. Spesso utilizzato per indicare pedici.
- `<sup>`: Definisce il testo come apice, posizionandolo leggermente più in alto della linea di base. Spesso utilizzato per indicare numeri ordinali o esponenti.
- Il testo è racchiuso all'interno di un paragrafo `<p>`. I caratteri `<` e `>` all'interno del testo sono sostituiti con `&lt;` e `&gt;` rispettivamente per evitare che vengano interpretati come tag HTML.
- `&amp;amp;` in HTML puoi utilizzare la sequenza di escape `&amp;amp;`. In questo modo, il browser interpreterà `&amp;amp;` come `&amp;` e non come un'entità HTML.

## Liste

- `<ul>`: Definisce un elenco non ordinato.
- `<ol>`: Definisce un elenco ordinato.
- `<li>`: Definisce un elemento di un elenco (usato all'interno di `<ul>` o `<ol>`).
- `<dl>`: Definisce una lista di definizioni, composta da coppie di termini (`<dt>`) e le loro definizioni (`<dd>`).
- `<dt>`: Definisce un termine o un elemento di una lista di definizioni (`<dl>`).
- `<dd>`: Definisce la definizione di un termine o di un elemento di una lista di definizioni (`<dl>`).
- `<menu>`: Definisce un elenco di comandi o opzioni di menu.
- `<dir>`: **Obsoleto** in HTML5, ma in passato veniva utilizzato per definire un elenco di directory.
- `<menuitem>`: Definisce un elemento di menu all'interno di un elemento `<menu>`.

## Immagini e Media

- `<img>`: Inserisce un'immagine nella pagina.
- `<audio>`: Inserisce un file audio nella pagina.
- `<video>`: Inserisce un file video nella pagina.
- `<iframe>`: Incorpora una finestra di navigazione secondaria all'interno di una pagina web, consentendo di visualizzare contenuti provenienti da un'altra fonte.
- `<embed>`: Incorpora contenuti multimediali, come file audio o video, direttamente all'interno di una pagina web.
- `<object>`: Definisce un oggetto incorporato all'interno di una pagina web, che può includere varie forme di contenuto multimediale, come file audio, video, Flash, ecc.
- `<source>`: Definisce risorse multimediali alternative per essere utilizzate da elementi come `<audio>` e `<video>`. È utile per fornire supporto a più formati di file multimediali.
- `<track>`: Definisce sottotitoli, tracce audio o tracce di testo per elementi multimediali come `<audio>` e `<video>`. È utilizzato per fornire supporto per la sottotitolazione e la trascrizione del testo.

## Tabelle

- `<table>`: Definisce una tabella.
- `<tr>`: Definisce una riga all'interno di una tabella.
- `<td>`: Definisce una cella dati all'interno di una riga di tabella.
- `<th>`: Definisce una cella intestazione all'interno di una riga di tabella.
- `<caption>`: Definisce il titolo o la descrizione di una tabella. Viene solitamente posizionato all'inizio della tabella, prima di qualsiasi riga o cella.
- `<colgroup>`: Definisce un gruppo di colonne all'interno di una tabella, consentendo di applicare stili o altre proprietà a un insieme di colonne.
- `<col>`: Definisce una singola colonna all'interno di un gruppo di colonne (`<colgroup>`). Viene utilizzato per specificare larghezza, stili e altre proprietà per una colonna specifica.
- `<thead>`: Definisce l'intestazione di una tabella, contenente righe (`<tr>`) di celle di intestazione (`<th>`). È utilizzato per identificare le righe di intestazione della tabella.
- `<tbody>`: Definisce il corpo principale di una tabella, contenente righe (`<tr>`) di celle di dati (`<td>`). È utilizzato per identificare le righe di dati della tabella, separate dall'intestazione.
- `<tfoot>`: Definisce il piè di pagina di una tabella, contenente righe (`<tr>`) di celle di riassunto o di totale (`<td>` o `<th>`). È utilizzato per identificare le righe di riepilogo o di totale della tabella.

## Form

- `<form>`: Definisce un modulo per la raccolta di input utente.
- `<input>`: Definisce un campo di input.
- `<textarea>`: Definisce un'area di testo multi-riga.
- `<button>`: Definisce un pulsante cliccabile.
- `<label>`: Definisce l'etichetta di un campo di input.
- `<select>`: Definisce un menu a discesa.
- `<option>`: Definisce un'opzione all'interno di un menu a discesa.
