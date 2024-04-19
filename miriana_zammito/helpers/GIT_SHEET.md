### Comandi base

### Configurazione
- `git config --global user.name "Il Tuo Nome"`: Imposta il nome utente globale per i commit.
- `git config --global user.email "tua@email.com"`: Imposta l'email globale per i commit.
- `git config --global core.editor "nome_del_tuo_editor"`: Imposta l'editor di testo preferito.

### Inizializzazione di un repository
- `git init`: Inizializza un nuovo repository Git nella directory corrente.

### Clonare un repository esistente
- `git clone <url>`: Clona un repository esistente dalla URL specificata.

### Operazioni sui file
- `git add <file>`: Aggiunge un file al "staging area" per il commit.
- `git add .`: Aggiunge tutti i file modificati, eliminati o non tracciati al "staging area".
- `git rm nome_file`: Rimuove un file dalla repository e dall'area di staging.
- `git mv vecchio_nome nuovo_nome`: Rinomina un file e aggiunge la modifica all'area di staging.

### Commit
- `git commit -m "Messaggio di commit"`: Committa le modifiche presenti nello "staging area" al repository.
- `git commit -am "Messaggio di commit"`: Aggiunge e committa i file modificati con un solo comando.
- `git commit --amend`: Modifica l'ultimo commit.
- `git cherry-pick <commit>`: Applica un singolo commit da un altro ramo.


### Gestione Repository

#### Stato
- `git status`: Mostra lo stato del repository.
- `git log`: Mostra la cronologia dei commit.
- `git log --oneline`: Mostra la cronologia dei commit in formato breve.
- `git log --graph --oneline --all`: Mostra una visualizzazione grafica dei rami e dei commit.
- `git log`: Visualizza la cronologia dei commit.
- `git log --graph`: Visualizza la cronologia dei commit con una rappresentazione grafica del branching.
- `git log --author=<author>`: Visualizza la cronologia dei commit di un autore specificato.
- `git log --grep=<pattern>`: Visualizza la cronologia dei commit con messaggi di commit che corrispondono al pattern specificato.
- `git reflog`: Visualizza la cronologia delle operazioni di riferimento, inclusi commit, merge e reset.

### Lavorare con il Server Remoto
- `git push`: Carica i commit locali sul repository remoto.
- `git push -u origin <branch>`: Carica il ramo specificato sul repository remoto e imposta il tracking.
- `git pull`: Scarica e unisce i cambiamenti dal repository remoto al repository locale.
- `git pull --rebase`: Scarica i cambiamenti dal repository remoto e riapplica i commit locali sopra di essi.
- `git remote rename origin nuovo-nome`: Rinomina il repo da origin a nuovo-nome.
- `git remote`: Visualizza o gestisce i repository remoti.
- `git remote -v`: Visualizza i repository remoti e le relative URL.
- `git remote add <name> <url>`: Aggiunge un nuovo repository remoto.
- `git remote remove <name>`: Rimuove un repository remoto.

### Gestire i Branch (Ramificazioni)
- `git branch`: Visualizza i rami locali.
- `git branch -a`: Visualizza tutti i rami, inclusi quelli remoti.
- `git branch <branch>`: Crea un nuovo ramo.
- `git branch -d <branch>`: Cancella il ramo specificato.
- `git checkout <branch>`: Cambia al ramo specificato.
- `git checkout -b <branch>`: Crea un nuovo ramo e passa ad esso.

### Merge e rebase
- `git merge <branch>`: Unisce il ramo specificato al ramo corrente.
- `git merge --abort`: Annulla un merge in corso e ripristina lo stato precedente.
- `git rebase <branch>`: Riapplica i commit del ramo specificato sul ramo corrente.
- `git rebase --abort`: Annulla un rebase in corso e ripristina lo stato precedente.
- `git rebase --continue`: Continua un rebase in pausa dopo la risoluzione dei conflitti.
- `git rebase -i <commit>`: Esegue un rebase interattivo, consentendo di modificare la storia del commit.

### Cambiamenti dal repository
- `git fetch`: Scarica i cambiamenti dal repository remoto senza unire i cambiamenti al repository locale.
- `git fetch --prune`: Scarica i cambiamenti dal repository remoto e rimuove i riferimenti ai rami eliminati.

### Tag
- `git tag`: Gestisce i tag annotati o leggeri per segnare commit specifici.
- `git tag -a <tag> -m "Messaggio del tag"`: Crea un nuovo tag annotato.
- `git tag <tag>`: Crea un nuovo tag leggero.
- `git tag -d <tag>`: Cancella il tag specificato.
- `git push --tags`: Carica tutti i tag locali sul repository remoto.

### Modifiche
- `git diff`: Mostra le modifiche tra i commit o tra il repository e lo "staging area".
- `git diff --staged`: Mostra le modifiche nello "staging area" rispetto all'ultimo commit.
- `git diff <commit1> <commit2>`: Mostra le modifiche tra due commit specificati.
- `git reset`: Annulla le modifiche ai file o ripristina il repository a uno stato precedente.
- `git reset --hard`: Ripristina il repository allo stato del commit specificato, eliminando tutte le modifiche non commesse.
- `git reset --soft <commit>`: Annulla il commit specificato, mantenendo le modifiche nello "staging area".
- `git reset HEAD <file>`: Rimuove il file specificato dallo "staging area", mantenendo le modifiche nel working directory.

### Clean
- `git clean`: Rimuove i file non tracciati dal working directory.
- `git clean -n`: Mostra i file non tracciati che verranno rimossi con `git clean -f`.

### Stash
- `git stash`: Salva le modifiche non commesse in uno stash.
- `git stash list`: Visualizza l'elenco degli stash.
- `git stash apply`: Applica l'ultimo stash.
- `git stash apply <stash>`: Applica uno stash specificato.
- `git stash pop`: Applica e cancella l'ultimo stash.
- `git stash drop <stash>`: Cancella uno stash specificato.