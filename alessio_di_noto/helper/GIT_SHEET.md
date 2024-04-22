1.  **clone** : Clona un repository in una nuova directory.
    quando salvo un lavoro da github di un'altro utnte posso clonare il suo repository
    sul mio pc, in una cartella di lavoro usando questo comando

    - Esempio: `git clone https://github.com/utente/repository.git`

2.  **init** : Crea un repository Git vuoto o reinizializza uno esistente in locale e con un nome specifico. In pratica quando creo una cartella di lavoro la devo inizializzare, questo è il `primo` comando da usare.

    - Esempio: `git init`

3.  **status** : Mostra lo stato dell'albero di lavoro, ovvero elenca tutti i file nuovi o modificati. Dopo aver fatto init posso controllare cosa c'è dentro alla mia repository in modo da capire

    - Esempio: `git status`

4.  **add** : Aggiunge i contenuti dei file all'indice. Crea uno snapshot del file in preparazione al versioning. Dopo aver fatto init e status, devo aggiungere i file all'interno della cartella all'indice di lavoro

    - Esempio: `git add nomefile.txt`

5.  **commit** : Registra le modifiche nel repository. Salva gli snapshot dei file in maniera permanente nello storico. Ogni volta che faccio una modifica al file su cui sto lavorando,(dopo averlo salvato e aggiunto) devo registrare questa modifica usando il comando commit.
    Con il carattere -m indico una "modifica di gruppo" che
    aggrega una serie di commit all’interno di un branch

        - Esempio: `git commit -m "Messaggio di commit"`

6.  **log**: Mostra i log dei commit. Elenca lo storico di versione per il branch corrente. Questo mi da una lista di committ fatti e con la descrizione e l'orario. Nel caso ci siano i due puntini per uscire dal log basta scrivere "q" (senza virgolette)

    - Esempio: `git log`

7.  **branch**: Elenca, crea o elimina branch. In questo caso elenca tutti i branch nel repository corrente

    - Elenca: `git branch`
    - Crea: `git branch [branch-name]`
    - Sposta: `git switch -c [branch-name]`
    - Rimuovi: `git branch -d [branch-name]`

8.  **merge**: Unisce due o più storie di sviluppo.

    - Esempio: `git merge [branch-name]`

9.  **push**: Carica tutti i cambiamenti dal branch locale su GitHub. Dopo aver fatto add e committ, per aggiornare il GitHub, dopo aver creato il collegamento con la repository nel web, uso questo comando per aggiornare la repository online

    - Esempio: `git push origin master`

10. **checkout** consente di spostarsi tra rami, commit e file nell'albero di lavoro. La sua funzionalità principale è quella di cambiare contesto nel repository Git. Ecco alcuni dei suoi usi principali:

    - **_Spostarsi tra rami_**: Quando si lavora con rami diversi all'interno di un repository Git, git checkout consente di passare da un ramo all'altro. Ad esempio, `git checkout nome-ramo` ti sposterà sul ramo specificato.

    - **_Spostarsi tra commit_**: Puoi utilizzare git checkout per esplorare lo storico dei commit nel repository. Se conosci l'hash di un commit specifico, puoi scrivere `git checkout <hash-commit>` per "viaggiare indietro nel tempo" e vedere lo stato del repository a quel determinato commit.

    - **_Spostarsi tra branch e commit contemporaneamente_**: In Git, puoi anche navigare tra rami e commit usando git checkout in combinazione con opzioni specifiche. Ad esempio, `git checkout HEAD~2` ti sposterà indietro di due commit rispetto al commit corrente, mentre `git checkout master~3` ti sposterà indietro di tre commit dal ramo master.

    - **_Ripristinare file modificati_**: Se hai apportato delle modifiche a un file e desideri scartarle e tornare allo stato del file nel commit più recente, puoi utilizzare `git checkout -- nome-file`.

    - **_Creare nuovi branch_**: Puoi anche creare un nuovo ramo e spostarti su di esso contemporaneamente utilizzando `git checkout -b nuovo-ramo`. Questo comando crea un nuovo ramo e commuta su di esso in una sola operazione.

    - **_Cancellare un branch_**: Per eliminare un branch su Git usando il comando `checkout`, puoi seguire questa procedura:

      1. Assicurati di essere nel branch giusto. Se stai cercando di eliminare un branch, è meglio essere in un altro branch per evitare conflitti.

         - git checkout altro-branch

      2. Una volta che sei nel branch giusto, puoi eliminare il branch desiderato utilizzando `-d` o `-D` con il comando `checkout`. La differenza tra i due è che `-d` elimina solo i branch che sono stati completamente uniti nel branch attuale, mentre `-D` elimina il branch indipendentemente dal suo stato.

         - Utilizzando `-d`:

           git checkout -d nome-branch

         - Utilizzando `-D`:

           git checkout -D nome-branch

      Assicurati di sostituire `nome-branch` con il nome effettivo del branch che desideri eliminare.
      Ad esempio, se vuoi eliminare un branch chiamato "feature-xyz", puoi eseguire:

      - git checkout master

      **Assicurati di essere in un altro branch prima di eliminare "feature-xyz"**

      - git checkout -d feature-xyz

      oppure

      - git checkout -D feature-xyz

      Tieni presente che eliminare un branch è una modifica permanente, quindi assicurati di essere sicuro prima di eseguire questo comando.

- mv: Sposta o rinomina un file, una directory o un symlink.
  Esempio: `git mv vecchio_nome nuovo_nome`

- restore: Ripristina i file nell'albero di lavoro.
  Esempio: `git restore nomefile.txt`

- rm: Rimuove i file dall'albero di lavoro e dall'indice. Esempio: `git rm file_da_rimuovere.txt`

- bisect: Utilizza la ricerca binaria per trovare il commit che ha introdotto un bug.
  Esempio: `git bisect start`

- diff: Mostra le modifiche tra i commit, il commit e l'albero di lavoro, ecc.
  Esempio: `git diff HEAD~1`

- grep: Stampa le righe corrispondenti a un pattern.
  Esempio: `git grep "pattern"`

- show: Mostra vari tipi di oggetti.
  Esempio: `git show HEAD`

- rebase: Riapplica i commit su un'altra punta base.
  Esempio: `git rebase master`

- reset: Resetta HEAD corrente allo stato specificato.
  Esempio: `git reset --hard HEAD~2`

- tag: Crea, elenca, elimina o verifica un tag firmato con GPG.
  Esempio: `git tag -a v1.0 -m "Versione 1.0"`

- fetch: Scarica oggetti e riferimenti da un altro repository.
  Esempio: `git fetch origin`

- pull: Esegue il fetch e l'integrazione con un altro repository o un branch locale.
  Esempio: `git pull origin master`
