### Selettori

Selettore per elemento HTML:

```
body {
    background-color: lightblue;
}

h1 {
    color: white;
    text-align: center
}

p {
    font-family: verdana;
    font-size: 20px;
}
```

Selettore multiplo:

`body, h1, p {...}`


Selettore per ID:

```
#id1 {
    text-align: center;
    color: red;
}
```

(Gli ID non possono iniziare per numero!)


Selettore per classe:

`.center {...}`
`p.center {...}`


Selettore universale (sceglie tutti gli elementi nell'HTML)

`* {...}`

Per quando un elemento HTML:
- ha il mouse sopra di esso: `element:hover`
- quando ha lo focus: `element:focus`
-  è attivo (ad esempio, quando viene cliccato): `element:active`
-  ***

---

## UNITA DI MISURA

px = pixel
vh = viewport helper (100% viewport (finestra))

---

## Testo:

text_align: center/left/right/etc.

font_size: 10(unità di misura);
font_style: nome_font;
font_color: colore;
---

## Margini/padding/posizionamento DIV

display: 
- flex (permette di mettere gli elementi uno a fianco dell'altro);
- grid (posiziona gli elementi su una griglia)

padding - Spazio tra l'interno dell'oggetto e il bordo
margin - Spazio tra il bordo e gli elementi esterni ad esso

position:
- static (posiziona in base a come viene caricata la pagina)
- absolute (posiziona l'elemento in base alla pagina)
- fixed (...in base alla dimensione del viewport browser)
- relative (...in base alla posizione dell'elemento stesso (left: 10px in questo caso aggiunge 10px alla posizione di sinistra dell'oggetto))
- sticky (...in base alla posizione di scrolling dell'utente)
- initial (default senza css)
- inherit (copia dal parent)

---

## Background

background-color:        - Colore fisso del background
    opacity; - Opacità del colore (alpha)

background-image:        - Background come immagine
    url="" - URL immagine

background-repeat:       - Indica come deve essere ripetuta l'immagine
    repeat-x - ripeti solo in orizzontale
    repeat-y - ripeti solo in verticale
    no-repeat - non ripetere

background-position:     - Indica la posizione dell'imagine (quale parte dell'immagine viene vista)
    top, bottom, left, right;
    50% (x) 50%;
    10px 50px; - esempi

background-attachment:   - Indica se l'immagine si deve muovere o rimanere fissa
    fixed; - non si muove
    scroll; - si muove

*Shorthand:*
```
background: 
    #ffffff
    url("img.png")
    no-repeat
    fixed
    right top
```
In ordine: color, image, repeat, attachment, e position

---