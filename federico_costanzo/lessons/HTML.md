# HTML

L'HTML, acronimo per HyperText Markup Language, è la lingua principale usata nel World Wide Web.
Scritta nel 1989 da Tim Berners-Lee, essa serve a definire il contenuto e la struttura base del sito web, utilizzando dei marker testuali per spiegare al sito web come disporre le informazioni.

In HTML, un sito web è formato da ==elementi.==
Un elemento HTML è un'unità di informazione che dice al web browser come disporre l'informazione.
Essi sono formati da:

---

`<p>` - Tag di inizio
This is a paragraph. - Contenuto
`</p>` - Tag di fine

---

`<p>This is a paragraph.</p>`

I ==tag== servono a contenere il contenuto dell'elemento e "spiegare" cosa fa al compilatore.
In molti casi, ci sono sia il tag di inizio che di fine, ma alcuni elementi detti vuoti hanno solo quello di apertura, come per esempio, il line break `<br/>`.

In alcuni casi, gli elementi hanno degli ==attributi==, per esempio: `name = "value"`
Alcuni elementi che richiedono attributi sono l'elemento immagine `<img>` (esempio: `<img src="https://assets.codepen.io/6093409/sprocket.svg" alt="the Hubspot sprocket logo/>`).

In una pagina HTML, quasi sempre vengono utilizzati gli elementi `<head></head>` e `<body></body>`.
`<head>` include tutto il codice che non si deve mostrare nella pagina, e viene interpretato prima del body.
`<body>` include tutti gli elementi che verranno effettivamente mostrati nella pagina.
