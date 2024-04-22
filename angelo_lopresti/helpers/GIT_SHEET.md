# git sheet 

## comandi con esempi

### Configurazione di Git
- **git config**: Imposta le opzioni di configurazione di Git come nome utente ed email.
  - `git config --global user.name "Tuo Nome"`
  - `git config --global user.email "tua_email@example.com"`

### Creazione di Repository
- **git init**: Inizializza un nuovo repository Git nella directory corrente.
  - `git init`
- **git clone**: Clona un repository in una nuova directory.
  - `git clone <repository_url>`

### Apportare Modifiche
- **git add**: Aggiunge i contenuti di un file all'indice (area di stage) per il prossimo commit.
  - `git add <file>`
- **git commit**: Registra le modifiche nel repository.
  - `git commit -m "Messaggio del commit"`
- **git status**: Mostra lo stato dell'albero di lavoro.
  - `git status`

### Branching
- **git branch**: Elenca, crea o elimina rami.
  - `git branch`
  - `git branch <nome_branch>`
  - `git branch -d <nome_branch>` (elimina)
- **git checkout**: Cambia branch o ripristina i file dell'albero di lavoro.
  - `git checkout <nome_branch>`
- **git merge**: Unisce due o più storie di sviluppo.
  - `git merge <nome_branch>`

### Repository Remoti
- **git remote**: Gestisce l'insieme di repository tracciati.
  - `git remote add <nome> <url>`
  - `git remote -v` (visualizza)
- **git push**: Aggiorna i riferimenti remoti insieme agli oggetti associati.
  - `git push <remoto> <branch>`
- **git pull**: Fetch da e integra con un altro repository o un branch locale.
  - `git pull <remoto> <branch>`
- **git fetch**: Scarica oggetti e riferimenti da un altro repository.
  - `git fetch <remoto>`

### Ispezionare
- **git log**: Mostra i log dei commit.
  - `git log`
- **git diff**: Mostra le differenze tra i commit, il commit e l'albero di lavoro, ecc.
  - `git diff`
- **git show**: Mostra vari tipi di oggetti.
  - `git show <hash_commit>`

### Annullare Modifiche
- **git reset**: Reimposta l'HEAD corrente allo stato specificato.
  - `git reset <file>` (dismette)
  - `git reset --hard <commit>` (scarta modifiche)
- **git revert**: Annulla alcuni commit esistenti.
  - `git revert <commit>`

### Gestione dei Tag
- **git tag**: Crea, lista o verifica i tag annotati.
  - `git tag`
  - `git tag -a <nome_tag> -m "Messaggio del tag"`
- **git show-tag**: Mostra le informazioni su un tag specifico.
  - `git show-tag <nome_tag>`
- **git push --tags**: Carica i tag non ancora inviati al repository remoto.
  - `git push --tags`

### Gestione delle Confessioni
- **git commit --amend**: Modifica l'ultimo commit con nuove modifiche o un nuovo messaggio.
  - `git commit --amend`
- **git rebase**: Reapplica i commit su un'altra base di ramo.
  - `git rebase <branch>`
- **git cherry-pick**: Applica i cambiamenti di un commit su un altro ramo.
  - `git cherry-pick <hash_commit>`

### Pulizia
- **git clean**: Rimuove i file non tracciati dalla directory di lavoro.
  - `git clean -n` (mostra cosa verrà rimosso)
  - `git clean -f` (rimuove effettivamente i file)

### Altri Comandi Utili
- **git stash**: Salva le modifiche locali in uno stash temporaneo.
  - `git stash`
  - `git stash apply` (ripristina lo stash)
- **git bisect**: Aiuta a trovare il commit che ha introdotto un bug utilizzando la ricerca binaria.
  - `git bisect start`
  - `git bisect bad`
  - `git bisect good <commit>`
- **git grep**: Cerca attraverso i file nell'albero di lavoro i pattern specificati.
  - `git grep <pattern>`

- *git remote add origin https://github.com/Angelo26480/PROGETTO_GIT.git*