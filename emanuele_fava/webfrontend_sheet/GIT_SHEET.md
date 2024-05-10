# GIT_SHEET

- `git init`: Inizializza un nuovo repository Git nella directory corrente.
- `git clone <url>`: Clona un repository esistente dalla URL specificata.
- `git add <file>`: Aggiunge un file al "staging area" per il commit.
- `git commit -m "Messaggio di commit"`: Committa le modifiche presenti nello "staging area" al repository.
- `git push`: Carica i commit locali sul repository remoto.
- `git pull`: Scarica e unisce i cambiamenti dal repository remoto al repository locale.
- `git branch`: Visualizza i rami locali.
- `git checkout <branch>`: Cambia al ramo specificato.
- `git merge <branch>`: Unisce il ramo specificato al ramo corrente.
- `git rebase <branch>`: Riapplica i commit del ramo specificato sul ramo corrente.
- `git status`: Mostra lo stato dei file nel repository.
- `git log`: Visualizza la cronologia dei commit.
- `git diff`: Mostra le modifiche tra i commit o tra il repository e lo "staging area".
- `git reset`: Annulla le modifiche ai file o ripristina il repository a uno stato precedente.
- `git remote`: Visualizza o gestisce i repository remoti.
- `git fetch`: Scarica i cambiamenti dal repository remoto senza unire i cambiamenti al repository locale.
- `git tag`: Gestisce i tag annotati o leggeri per segnare commit specifici.
  Ecco altri comandi Git:

- `git checkout -b <branch>`: Crea un nuovo ramo e passa ad esso.
- `git branch -d <branch>`: Cancella il ramo specificato.
- `git merge --abort`: Annulla un merge in corso e ripristina lo stato precedente.
- `git rebase --abort`: Annulla un rebase in corso e ripristina lo stato precedente.
- `git fetch --prune`: Scarica i cambiamenti dal repository remoto e rimuove i riferimenti ai rami eliminati.
- `git remote -v`: Visualizza i repository remoti e le relative URL.
- `git tag -a <tag> -m "Messaggio del tag"`: Crea un nuovo tag annotato.
- `git push --tags`: Carica tutti i tag locali sul repository remoto.
- `git clean -n`: Mostra i file non tracciati che verranno rimossi con `git clean -f`.
- `git stash list`: Visualizza l'elenco degli stash.
- `git stash apply`: Applica l'ultimo stash.
- `git cherry-pick <commit>`: Applica un singolo commit da un altro ramo.
- `git reflog`: Visualizza la cronologia delle operazioni di riferimento, inclusi commit, merge e reset.
- `git config --global user.name "Il Tuo Nome"`: Imposta il nome utente globale per i commit.
- `git config --global user.email "tua@email.com"`: Imposta l'email globale per i commit.
