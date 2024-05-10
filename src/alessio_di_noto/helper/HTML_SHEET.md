<!-- @format -->

1. **`<!DOCTYPE html>`**: si tratta del primo tag che dev’essere inserito in un file di codice, utile a specificare che il file in questione contiene una pagina HTML. Se necessario, la versione di HTML utilizzata viene indicata tra i suoi parametri.

- `<!DOCTYPE>`: Definisce la versione HTML in uso nel documento.
- `<!DOCTYPE html>`: La dichiarazione DOCTYPE per HTML5.
- `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`: La dichiarazione DOCTYPE per HTML 4.01 Strict.
- `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`: La dichiarazione DOCTYPE per XHTML 1.0 Transitional.

2. **`<html>`** : si tratta del marcatore che racchiude l’intera pagina. Accetta come parametri diversi aspetti della pagina stessa, come la lingua e lo schema usato dal markup.

3. **`<head>`**: questo tag racchiude le informazioni attraverso le quali la pagina viene gestita dagli interpreti (il browser, il crawler dei motori di ricerca e via dicendo): per esempio, è possibile indicare in questo tag il titolo della pagina, la sua icona caratteristica, il set di caratteri e altre informazioni specifiche.

4. **`<body>`** – questo marcatore contiene tutte le informazioni relative al corpo della pagina, cioè agli elementi che verranno mostrati a schermo. Per esempio, in questo tag si specificano i titoli e sottotitoli (`<h1>`, `<h2>`, `<h3>` ecc.), i paragrafi e il relativo contenuto (`<p>`), le immagini (`<img>`), i collegamenti ipertestuali o ancore (`<a>`), le tabelle (`<table>`), i moduli (`<form>`) e così via.

### Struttura del Documento:

1. `<!DOCTYPE html>`: Definisce il tipo di documento HTML5.
2. `<html>`: Rappresenta il radice di un documento HTML.
3. `<head>`: Contiene metadati (come il titolo, collegamenti a fogli di stile e script) relativi al documento HTML.
   - `<title>`: Definisce il titolo del documento HTML.
   - `<meta>`: Fornisce metadati sul documento HTML.
   - `<link>`: Collega il documento HTML a un foglio di stile esterno o a altre risorse.
   - `<style>`: Definisce gli stili CSS all'interno del documento HTML.
   - `<script>`: Incorpora script o collegamenti a script esterni nel documento HTML.
   - `<base>`: Specifica l'URL base per risorse relative in un documento HTML.
4. `<body>`: Rappresenta il contenuto principale del documento HTML.

### Intestazioni e Paragrafi:

5. `<header>`: Rappresenta l'intestazione di una sezione o di un documento.
6. `<footer>`: Rappresenta il piè di pagina di una sezione o di un documento.
7. `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`: Definiscono i livelli di intestazione del testo.
8. `<p>`: Rappresenta un paragrafo di testo.
9. `<hr>`: Crea una riga orizzontale per separare il contenuto.

### Testo e Formattazione:

10. `<strong>`: Rende il testo in grassetto.
11. `<em>`: Rende il testo in corsivo.
12. `<mark>`: Evidenzia il testo.
13. `<del>`: Indica il testo eliminato.
14. `<ins>`: Indica il testo aggiunto.
15. `<sub>`: Rende il testo come pedice.
16. `<sup>`: Rende il testo come apice.
17. `<abbr>`: Definisce un'abbreviazione.
18. `<blockquote>`: Rappresenta una citazione lunga.
19. `<q>`: Rappresenta una citazione breve.
20. `<cite>`: Definisce il titolo di una citazione o di un lavoro.

### Liste:

21. `<ul>`: Rappresenta un elenco non ordinato.
22. `<ol>`: Rappresenta un elenco ordinato.
23. `<li>`: Rappresenta un elemento di lista all'interno di un elenco.
24. `<dl>`: Rappresenta una lista di definizioni.
25. `<dt>`: Definisce il termine nella lista di definizioni.
26. `<dd>`: Fornisce la definizione nel `<dl>`.

### Tabelle:

27. `<table>`: Rappresenta una tabella.
28. `<caption>`: Fornisce una descrizione o un titolo per una tabella.
29. `<thead>`, `<tbody>`, `<tfoot>`: Definiscono l'intestazione, il corpo e il piè di pagina di una tabella, rispettivamente.
30. `<tr>`: Rappresenta una riga in una tabella.
31. `<th>`: Rappresenta una cella di intestazione di una tabella.
32. `<td>`: Rappresenta una cella di dati in una tabella.

### Form:

33. `<form>`: Rappresenta un modulo HTML.
34. `<input>`: Definisce un campo di input per il modulo.
35. `<button>`: Rappresenta un pulsante cliccabile.
36. `<select>`: Rappresenta un menu a discesa.
37. `<option>`: Definisce un'opzione in un menu a discesa.
38. `<textarea>`: Definisce un campo di testo multiriga.
39. `<label>`: Definisce l'etichetta di un campo di input.
40. `<fieldset>`: Rappresenta un gruppo di controlli del modulo associati.
41. `<legend>`: Fornisce una legenda per il `<fieldset>`.

### Multimedia:

42. `<img>`: Incorpora un'immagine nel documento HTML.
43. `<audio>`: Incorpora un file audio nel documento HTML.
44. `<video>`: Incorpora un video nel documento HTML.
45. `<source>`: Specifica una risorsa multimediale per `<audio>` e `<video>`.
46. `<track>`: Definisce una traccia di testo per `<video>` e `<audio>`.

### Link e Ancore:

47. `<a>`: Definisce un collegamento ipertestuale.
48. `<nav>`: Definisce una sezione di navigazione.
49. `<menu>`: Definisce un menu di navigazione.

### Sezioni:

50. `<section>`: Rappresenta una sezione del documento.
51. `<article>`: Rappresenta un contenuto autonomo e potenzialmente riciclabile.
52. `<aside>`: Rappresenta il contenuto correlato, spesso laterale, come le barre laterali in un layout.
53. `<main>`: Rappresenta il contenuto principale o centrale del documento.

### Contenuto Incorporato:

54. `<iframe>`: Incorpora un'altra pagina HTML in una pagina HTML.
55. `<embed>`: Incorpora contenuti esterni come plugin multimediale.
56. `<object>`: Incorpora oggetti esterni, come file multimediale o applet Java.

### Progresso e Controllo:

57. `<progress>`: Rappresenta lo stato di avanzamento di un'attività.
58. `<meter>`: Rappresenta uno specifico valore in un intervallo.

### Struttura Logica:

59. `<header>`: Fornisce un'intestazione per una sezione o per l'intero documento.
60. `<footer>`: Fornisce un piè di pagina per una sezione o per l'intero documento.
61. `<nav>`: Rappresenta un insieme di link di navigazione.
62. `<div>`: Rappresenta una divisione logica o un contenitore generico.
63. `<span>`: Rappresenta un testo o un contenuto in linea.
64. `<br/>`: Crea un'interruzione di linea.

### Testo e Caratteri:

65. `<ruby>`, `<rt>`, `<rp>`: Rappresenta una notazione ruby per l'annotazione del testo.
66. `<bdo>`: Sovrascrive la direzione del testo.

### Altri:

67. `<canvas>`: Fornisce uno spazio riservato per il

disegno dinamico di grafica. 68. `<details>`: Rappresenta un controllo che permette di visualizzare o nascondere ulteriori dettagli. 69. `<summary>`: Fornisce un'etichetta o una legenda per l'elemento `<details>`. 70. `<dialog>`: Rappresenta una finestra di dialogo o una finestra popup. 71. `<slot>`: Fornisce una destinazione per un'istanza di un template.
