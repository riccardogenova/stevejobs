# Procedura generica:

1. git checkout main (si passa al main)
2. git pull (dopo accettato il pull per scaricare gli aggiornamenti)
3. git branch -D nomebranch (si cancella il branch su cui si sono apportate le modifiche)
4. git checkout -b nomebranch (si passa al branch dove applicare le modifiche)
5. si fanno le modifiche (PIANO PIANO) nella cartella desiderata
6. git add .
7. git commit -m 'nome_cognome:descrizionecommit'
8. git push origin nomebranch
9. si va nel sito per la pull request

---

## Creare un Nuovo Branch e Eseguire il Comando npm

Per creare un nuovo branch chiamato `bugfix/prettier-files` e eseguire il comando `npm run test::lint`, segui questi passaggi:

1. **Crea un nuovo branch e passa ad esso**:
   Utilizza il comando `git checkout -b` per creare e passare a un nuovo branch contemporaneamente:

   ```bash
   git checkout -b bugfix/prettier-files

   npm run test::lint

   git add .  # Aggiunge tutte le modifiche
   git commit -m "Fix prettier formatting"  # Committa le modifiche con un messaggio descrittivo
   git push origin bugfix/prettier-files  # Pusha le modifiche sul repository remoto
   ```

---

---

---

Configuriamo il nostro git con le nostre credenziali di GitHub:

      git config --global user.name 'Tuo Nome GitHub'
      git config --global user.email email@github.com

### Ci sono due modi per instanzire un progetto

1.  Inizializziamo un progetto non esistente:

    git init

2.  Inizializziamo un progetto esistente su un server git:
    git clone serverURL.git
    Esempio: git clone https://github.com/tesseslol/irixos-websites.git
    Git clone permette di copiare il .git file del server e anche il repository.

## Configurazione del server remoto

Con questo comando visualizziamo la lista di server remoti salvati con relativo url:

      git remote -v

P.S. di solito il server principale si chiama origin <br>

Ora aggiungiamo un server remoto:

      git remote add identificatoreServerRemoto UrlServerRemoto
      Esempio: git remote add origin https://github.com/tesseslol/irixos-websites.git

## Lavoriamo nel progetto:

Aggiungiamo i file dalla directory del progetto all'index:

      git add nome_file

Si può utilizzare l'asterisco per aggiungere tutti i file. Se si vuole escludere un file dalla selezione totale (con l'asterisco) basta creare un file denominato .gitignore e metterci all'interno i file che non si vogliono aggiungere al INDEX.<br>

Ora aggiungiamo i file dell'index all'head:

      git commit -m "Messaggio del commit"

Per non tracciare il file usiamo l'argomento -a:

      git commit -a -m "Messaggio del commit"

Annullamento dei commit:

      git commit --amend

Cancellare un file da git:

      git rm nomeFile

Il file ritorna allo stato precedente dell’ultimo commit:

      git checkout -- nomeFile

## Lavorare con il server remoto

Aggiornare il tuo repository locale alla commit più recente:

      git pull

Se vogliamo fare l'upload dei commit nel progetto usiamo:

      git push identificatoreServerRemoto nomeBranch
      Esempio: git push origin master

Se vogliamo rinominare un file in remoto:

      git remote rename identificatoreServerRemoto nomeFileVecchio nomeFileNuovo

Se vogliamo eliminare un file in remoto:

      git remote rm nomeFile

## Stato del progetto

Per vedere le modifiche del progetto digitiamo:

      git status

Per vedere i cambiamenti dei singoli files digitiamo:

      git diff

Vedere tutti i commit:

      git log

## Gestire i tag

Per visualizzare tutte le versioni eseguimo il comando:

      git tag

Per visualizzare tutte le versioni con un determinato numero:

      git tag -l 1*

Creazione di un tag:

      git tag -a versioneSoftware -m "nota sul tag"
      Esempio: git tag -a 1.2.3rc1 -m "aggiornato la navbar"

Vedere tutte le modifiche di un tag:

      git show 1.2.3rc1

Condividere i tag:

      git push identificatoreServerRemoto tagDaPubblicare
      Esempio: git push origin 1.2.3rc1

Condividere tutti i tag:

      git push identificatoreServerRemoto --tag
      Esempio: git push origin --tag

## Gestire i Branch

Lista dei Rami:

      git branch

Creiamo un branch con:

      git branch nomeBranch
      Esempio: git branch feature

Cambia i rami:

      git checkout nomeBranch
      Esempio: git checkout feature

Per ritornare al branch originale digitiamo:

      git checkout master

Eliminare il ramo:

      git branch -d nomeBranch
      Esempio: git branch -d feature

Crea il ramo e passa a quel branch:

      git checkout -b nomeBranch
      Esempio: git checkout -b feature

Per unire il branch al repository originale usiamo (ricordatevi di fare un commit nel branch):

      git checkout master
      git merge feature

## Git Parameters:

**_ Inizializza l'area di lavoro _**

     clone      Clona un repository in una cartella
     init       Crea un git repository o ne inizializza uno

**_ Lavorare nel progetto corrente _**

      add        Aggiungere i file nel INDEX
      mv         Muove o rinomina un file, una directory
      reset      Resetta il corrente HEAD nello stato specificato
      rm         Rimuove i file dalla directory corrente e nel INDEX

**_ Mostra la cronologia e lo stato _**

      bisect     Use binary search to find the commit that introduced a bug
      grep       Print lines matching a pattern
      log        Mostra i commit log
      status     stato del contenuto di un progetto
      show       Show various types of objects

**_ Grow, mark and tweak your common history _**

      branch     Visualizza, crea e elimina ramo (branches)
      checkout   Cambia ramo (branches) o ripristina la strotura dell'area di lavoro
      commit     Registra le modifiche del repository
      diff       Confronta i commit (esp: commit e area di lovoro)
      merge      Unisce una o più cronologie di sviluppo
      rebase     Reapply commits on top of another base tip
      tag        Crea, visualizza la lista, elimina o verifica il tag della versione del progetto

**_ Collabora _**

      fetch      Download objects and refs from another repository
      pull       Fetch from and integrate with another repository or a local branch
      push       Update remote refs along with associated objects
