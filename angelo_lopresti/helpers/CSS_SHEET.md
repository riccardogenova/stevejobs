# CSS SHEET

*ecco alcuni dei comandi usati su CSS:*

1. **color**: Definisce il colore del testo.
   ```css
   p {
       color: blue;
   }
   ```

2. **background-color**: Definisce il colore di sfondo di un elemento.
   ```css
   .container {
       background-color: #f0f0f0;
   }
   ```

3. **font-family**: Specifica il tipo di carattere da utilizzare per il testo.
   ```css
   body {
       font-family: Arial, sans-serif;
   }
   ```

4. **font-size**: Imposta la dimensione del carattere.
   ```css
   h1 {
       font-size: 24px;
   }
   ```

5. **font-weight**: Specifica il peso del carattere (normale, bold, più leggero, ecc.).
   ```css
   strong {
       font-weight: bold;
   }
   ```

6. **text-align**: Allinea il testo (a sinistra, a destra, al centro, giustificato).
   ```css
   .center {
       text-align: center;
   }
   ```

7. **line-height**: Imposta l'altezza della riga.
   ```css
   p {
       line-height: 1.5;
   }
   ```

8. **text-decoration**: Aggiunge decorazioni al testo (sottolineato, barrato, sovrascritto).
   ```css
   a {
       text-decoration: none;
   }

   .strike {
       text-decoration: line-through;
   }
   ```

9. **padding**: Aggiunge spazio interno agli elementi.
   ```css
   .box {
       padding: 20px;
   }
   ```

10. **margin**: Aggiunge spazio esterno agli elementi.
    ```css
    .box {
        margin: 10px;
    }
    ```

11. **border**: Aggiunge un bordo ad un elemento.
   
   ```css
   .border-example {
       border: 2px solid #000;
   }
   ```

12. **border-radius**: Arrotonda gli angoli del bordo di un elemento.
   
   ```css
   .rounded-example {
       border-radius: 10px;
   }
   ```

13. **box-shadow**: Aggiunge un'ombra al contenuto di un elemento.
   
   ```css
   .shadow-example {
       box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
   }
   ```

14. **text-shadow**: Aggiunge un'ombra al testo di un elemento.
   
   ```css
   .text-shadow-example {
       text-shadow: 1px 1px 2px #888888;
   }
   ```

15. **opacity**: Imposta il livello di opacità di un elemento.
   
   ```css
   .opacity-example {
       opacity: 0.5;
   }
   ```

16. **background-image**: Imposta un'immagine di sfondo per un elemento.
   
   ```css
   .bg-image-example {
       background-image: url('path/to/image.jpg');
   }
   ```

17. **text-transform**: Trasforma il testo in maiuscolo o minuscolo.
   
   ```css
   .uppercase-example {
       text-transform: uppercase;
   }

   .lowercase-example {
       text-transform: lowercase;
   }
   ```

18. **transition**: Specifica la transizione di uno o più attributi di un elemento.
   
   ```css
   .transition-example {
       transition: color 0.3s ease-in-out;
   }
   ```

19. **flex**: Imposta il layout flessibile di un elemento tramite Flexbox.
   
   ```css
   .flex-container {
       display: flex;
   }

   .flex-item {
       flex: 1;
   }
   ```

20. **grid**: Imposta il layout di un elemento tramite CSS Grid.
   
    ```css
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
    }

    .grid-item {
        grid-column: 2 / span 2;
    }
    ```

21. **position**: Imposta il tipo di posizionamento di un elemento.
    
    ```css
    .position-example {
        position: relative; /* oppure absolute, fixed, sticky */
        top: 20px;
        left: 30px;
    }
    ```

22. **overflow**: Specifica il comportamento dello sforzo di un elemento.
    
    ```css
    .overflow-example {
        overflow: auto; /* oppure hidden, scroll, visible */
    }
    ```

23. **text-align**: Imposta l'allineamento del testo all'interno di un elemento.
    
    ```css
    .text-align-example {
        text-align: center; /* oppure left, right, justify */
    }
    ```

24. **display**: Imposta il tipo di display di un elemento.
    
    ```css
    .display-example {
        display: inline-block; /* oppure block, inline, none */
    }
    ```

25. **cursor**: Imposta l'aspetto del cursore quando passa sopra un elemento.
    
    ```css
    .cursor-example {
        cursor: pointer; /* oppure help, progress, wait, text, etc. */
    }
    ```

26. **visibility**: Imposta se un elemento è visibile o nascosto.
    
    ```css
    .visibility-example {
        visibility: hidden; /* oppure visible, collapse */
    }
    ```

27. **z-index**: Imposta la profondità dell'elemento rispetto agli altri elementi.
    
    ```css
    .z-index-example {
        z-index: 1; /* Il valore può essere positivo o negativo */
    }
    ```

28. **transition**: Applica una transizione animata a una o più proprietà di un elemento.
    
    ```css
    .transition-example {
        transition: width 0.5s ease-in-out; /* oppure height, background-color, etc. */
    }
    ```

29. **transform**: Applica una trasformazione (traslazione, rotazione, scala) a un elemento.
    
    ```css
    .transform-example {
        transform: rotate(45deg) scale(1.2);
    }
    ```

30. **box-sizing**: Specifica come calcolare la dimensione totale di un elemento (content-box, border-box).
    
    ```css
    .box-sizing-example {
        box-sizing: border-box; /* oppure content-box */
    }
    ```

31. **opacity**: Imposta il livello di opacità di un elemento.
    
    ```css
    .opacity-example {
        opacity: 0.5; /* Valore compreso tra 0 e 1 */
    }
    ```

32. **text-transform**: Trasforma il testo in maiuscolo, minuscolo o iniziali maiuscole.
    
    ```css
    .uppercase-example {
        text-transform: uppercase;
    }

    .lowercase-example {
        text-transform: lowercase;
    }

    .capitalize-example {
        text-transform: capitalize;
    }
    ```

33. **word-wrap**: Specifica come gestire il testo che supera i limiti del contenitore.
    
    ```css
    .word-wrap-example {
        word-wrap: break-word; /* Permette al testo di andare a capo se supera il contenitore */
    }
    ```

34. **white-space**: Specifica come gestire gli spazi vuoti all'interno di un elemento.
    
    ```css
    .white-space-example {
        white-space: nowrap; /* Impedisce al testo di andare a capo */
    }
    ```

35. **list-style-type**: Imposta il tipo di elenco puntato o numerato.
    
    ```css
    ul {
        list-style-type: circle; /* Può essere disc, circle, square, decimal, etc. */
    }

    ol {
        list-style-type: decimal;
    }
    ```

36. **text-overflow**: Specifica come gestire il testo che supera i limiti del contenitore in orizzontale.
    
    ```css
    .text-overflow-example {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; /* Visualizza "..." se il testo supera il contenitore */
    }
    ```

37. **outline**: Aggiunge un contorno intorno agli elementi, simile a un bordo ma non influisce sul layout.
    
    ```css
    .outline-example {
        outline: 2px solid red; /* Specifica spessore, stile e colore */
    }
    ```

38. **object-fit**: Specifica come adattare il contenuto di un elemento `<img>` o `<video>` all'interno del suo contenitore.
    
    ```css
    .object-fit-example {
        object-fit: cover; /* Può essere cover, contain, fill, etc. */
    }
    ```

39. **font-style**: Specifica lo stile del carattere (normale, corsivo o obliquo).
    
    ```css
    .italic-example {
        font-style: italic;
    }
    ```

40. **font-weight**: Imposta lo spessore del carattere (normale, bold, più leggero o numerico).
    
    ```css
    .bold-example {
        font-weight: bold;
    }
    ```

41. **text-decoration**: Aggiunge decorazioni al testo (sottolineato, barrato, ecc.).
    
    ```css
    .underline-example {
        text-decoration: underline;
    }

    .line-through-example {
        text-decoration: line-through;
    }
    ```

42. **text-align**: Imposta l'allineamento del testo all'interno di un elemento.
    
    ```css
    .centered-text {
        text-align: center;
    }
    ```

43. **text-justify**: Specifica come distribuire lo spazio aggiuntivo all'interno di un elemento quando è giustificato.
    
    ```css
    .justified-text {
        text-justify: inter-word; /* Può essere inter-word, inter-ideograph, ecc. */
    }
    ```

44. **letter-spacing**: Imposta lo spazio aggiuntivo tra i caratteri del testo.
    
    ```css
    .letter-spacing-example {
        letter-spacing: 2px; /* Valore in pixel o in em */
    }
    ```

45. **word-spacing**: Imposta lo spazio aggiuntivo tra le parole del testo.
    
    ```css
    .word-spacing-example {
        word-spacing: 4px; /* Valore in pixel o in em */
    }
    ```

46. **line-height**: Imposta l'altezza della riga all'interno di un elemento.
    
    ```css
    .line-height-example {
        line-height: 1.5; /* Valore numerico o percentuale */
    }
    ```

47. **text-transform**: Trasforma il testo in maiuscolo, minuscolo o iniziali maiuscole.
    
    ```css
    .uppercase-example {
        text-transform: uppercase;
    }

    .lowercase-example {
        text-transform: lowercase;
    }

    .capitalize-example {
        text-transform: capitalize;
    }
    ```

48. **font-size**: Imposta la dimensione del carattere.
    
    ```css
    .large-text {
        font-size: 20px; /* Valore in pixel, em, rem, ecc. */
    }
    ```

49. **font-family**: Specifica il tipo di carattere da utilizzare per il testo.
    
    ```css
    .custom-font {
        font-family: 'Arial', sans-serif;
    }
    ```

50. **overflow**: Specifica come gestire il contenuto che supera le dimensioni del contenitore.
    
    ```css
    .overflow-example {
        overflow: hidden; /* Può essere visible, hidden, scroll, auto */
    }
    ```

51. **position**: Imposta il tipo di posizionamento di un elemento all'interno del suo contenitore.
    
    ```css
    .positioned-example {
        position: relative; /* Può essere relative, absolute, fixed, sticky */
    }
    ```

52. **top**, **right**, **bottom**, **left**: Specifica la posizione di un elemento quando il posizionamento è diverso da "statico".
    
    ```css
    .positioned-example {
        position: absolute;
        top: 20px;
        left: 30px;
    }
    ```

53. **float**: Posiziona un elemento a sinistra o a destra rispetto al contenuto che lo circonda.
    
    ```css
    .floated-example {
        float: left; /* Può essere left, right, none */
    }
    ```

54. **clear**: Specifica da quale lato degli elementi flottanti non deve esserci nessun altro elemento flottante.
    
    ```css
    .cleared-example {
        clear: both; /* Può essere left, right, both, none */
    }
    ```

55. **z-index**: Imposta la profondità dell'elemento rispetto agli altri elementi.
    
    ```css
    .z-index-example {
        z-index: 1; /* Valore numerico */
    }
    ```

56. **cursor**: Imposta il tipo di cursore quando si passa sopra un elemento.
    
    ```css
    .cursor-example {
        cursor: pointer; /* Può essere default, pointer, grab, text, ecc. */
    }
    ```

57. **box-sizing**: Specifica come calcolare la dimensione totale di un elemento.
    
    ```css
    .sizing-example {
        box-sizing: border-box; /* Può essere content-box, border-box */
    }
    ```

58. **outline**: Aggiunge un contorno intorno agli elementi senza influire sul layout.
    
    ```css
    .outlined-example {
        outline: 2px solid blue; /* Specifica spessore, stile e colore */
    }
    ```

59. **user-select**: Specifica se l'utente può selezionare il contenuto di un elemento.
    
    ```css
    .selectable-example {
        user-select: none; /* Può essere none, auto, text */
    }
    ```

60. **pointer-events**: Specifica se e come un elemento risponde agli eventi del mouse.
    
    ```css
    .pointer-events-example {
        pointer-events: none; /* Può essere none, auto */
    }
    ```

