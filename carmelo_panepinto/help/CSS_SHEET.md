<!-- @format -->

# 1. Selettori:

- Selettore per tag (es: h1, p, img)
- Selettore per id (es: #header, #footer)
- Selettore per classe (es: .testo-centrato, .pulsante)
- Selettore per attributo (es: a[href], img[alt])
- Selettore di discendenti (es: nav ul li)
- Selettore di pseudo-elementi (es: :hover, :before)
- Selettore di pseudo-classi (es: :first-child, :last-of-type)

Un **selettore concatenato** è composto da due o più selettori separati da uno o più _operatori di combinazione_. Ogni selettore restringe ulteriormente il gruppo di elementi da selezionare:

- **> (Operatore figlio)**: Seleziona solo gli _elementi figlio diretti_ del primo selettore. Esempio: div > p seleziona solo i paragrafi (p) che sono figli diretti di un div.
- **+ (Operatore fratello adiacente)**: Seleziona solo gli _elementi fratelli adiacenti_ immediati del primo selettore. Esempio: h1 + p seleziona solo il paragrafo (p) che segue immediatamente un titolo h1.
- **~ (Operatore fratello generale)**: Seleziona tutti gli _elementi fratelli del primo selettore, indipendentemente dalla loro posizione_. Esempio: h1 ~ p seleziona tutti i paragrafi (p) che sono fratelli di un titolo h1, anche se non adiacenti.
- **, (Virgola)**: _Separa selettori semplici_, selezionando elementi che corrispondono a uno o più di essi. Esempio: h1, h2, h3 seleziona tutti i titoli h1, h2 e h3.
- **Spazio**: _Combina selettori per trovare elementi discendenti_. Esempio: ul li a seleziona tutti i link (a) all'interno di voci di lista non ordinate (li) annidate in elenchi non ordinati (ul).

# 2. Proprietà CSS:

Definiscono le caratteristiche visive degli elementi selezionati.
Esistono centinaia di proprietà CSS, raggruppate in diverse categorie:

- Tipografia: font-family, font-size, font-weight, line-height, text-align
- Colori: color, background-color, border-color
- Layout: width, height, margin, padding, display, position, float
- Sfondo: background-image, background-repeat, background-position
- Bordi e bordi: border-width, border-style, border-radius
- Effetti di testo: text-decoration, text-transform, letter-spacing
- Liste: list-style-type, list-style-image, list-item-padding
  I valori delle proprietà possono essere numerici, colori, parole chiave o funzioni CSS.

# 3. Valori delle proprietà:

Possono essere di tipo diverso a seconda della proprietà:

- Numerici: per definire dimensioni, margini, angoli, ecc. (es: 10px, 2em, 40%)
- Colori: nomi di colori HTML (red, blue), codici esadecimali (#FF0000), funzioni RGB o HSL.
- Parole chiave: per proprietà come display (block, inline), text-decoration (none, underline).
- Funzioni CSS: per calcoli, manipolazioni di stringhe o effetti avanzati (es: calc(), url(), rgb(), linear-gradient()).

# 4. Combinazione di regole:

Le regole CSS possono essere combinate per creare stili complessi.
L'ordine delle regole è importante: quelle definite più tardi hanno la precedenza su quelle precedenti.
Selettoni più specifici hanno la precedenza su quelli più generici.
La proprietà !important può essere utilizzata per forzare l'applicazione di una regola specifica, anche in caso di conflitti.

# 5. Commenti:

Per inserire note e spiegazioni all'interno del codice CSS.
I commenti non vengono interpretati dal browser e non influenzano lo stile del sito.

- Sintassi: /_ Commento qui _/
