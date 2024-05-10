**CSS** (Cascading Style Sheets) è una lingua per style sheet usata per specificare la presentazione e styling di un documento HTML (o altra lingua markup).

E' progettata per permettere la separazione tra il contenuto e la presentazione, includendo il layout, i colori e i font di testo.
E' una delle lingue più importanti nella creazione di siti web assieme ad HTML e JavaScript.

Per dare styling a una pagina web, si usa uno ==style sheet==, che indica ad ogni oggetto come si deve renderizzare nella pagina.

![Processo per renderizzare una pagina web](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works/rendering.svg)

---

Lo style sheet è formato da regole formate da:
`<selettore> {<dichiarazione_1>; <dichiarazione_n;}`
Il selettore indica l'ID dell'oggetto da modificare, mentre il codice all'interno delle parentesi graffe contiene le proprietà che il testo avrà nella pagina.

Una cosa importante da specificare riguardo alle regole, è che appunto vanno in cascata, cioè che ci possono essere più regole che modificano lo stesso tipo di elemento.
In tal caso, la regola più specifica a quell'elemento sovrascrive tutte le altre.
Per esempio, se scriviamo codice che dice che tutti i paragrafi abbiano testo rosso, ma scriviamo dopo che il terzo paragrafo abbia testo verde, il terzo paragrafo sarà verde perchè è la regola che specifica di più su quel paragrafo.

---

Per inserire il CSS in un file HTML, ci sono tre metodi:

- External, inserendo un `<link rel="stylesheet" href="file.css">` all'interno dell'elemento head;
- Internal, inserendo uno `<style> </style>` element nell'head del file HTML con il codice CSS per gli elementi che si vogliono modificare;
- Inline, aggiungendo l'attributo `style = <codice CSS>` al tag d'inizio dell'elemento.
  Esempio: `<p style="color:red;"> paragrafo. </p>`

---
