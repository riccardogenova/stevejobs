<!-- @format -->

`git --version` (controlla la versione di git)

`git config --global user.name "name"` (modifica il tuo nome globale (come appari nei progetti))
`git config --global user.email "email"` (modifica l'email che usi)

{
`mkdir "myproject"` (crea la directory)
`cd "myproject"` (entra nella directory)
`ls` (mostra i file nel folder)
}

---

## Inizializzazione repo e staging

`git init` (inizializza git nella directory in cui sei entrato, creando una ==repository==)

`git status` (mostra lo status della cartella e della repo)

- Untracked files: files che sono nella directory ma non nella repo
- Tracked files: files che sono nella repo

Staging environment: processo dove i file vengono messi nella repo tramite ==commit==

`git add "file.exe"` (aggiungi file allo staging environment)
`git add --all` (oppure `git add -A`) (aggiungi tutti i file nella directory allo staging environment)

---

## Commit

`git commit -m "Message 1: first release"` (commit: finalizza la modifica alla repo, ==-m== serve per aggiungere messaggi)

Per skippare lo stage (in caso di piccole modifiche):
`git commit -a -m "Updated file.exe: minor mistake in compiling`

`git log` (leggi tutti i commit)

---

## Help

`git command -help` (vedi tutte le opzioni per quel comando in particolare)
`git help --all` (vedi tutti i comandi possibili)

---

## Branch

La ==branch== è una versione nuova/separata della main repository.

Per vedere tutte le branch esistenti: `git branch`

Per crearne una:
`git branch hello-world-image`

Dopo aver creato la branch, per entrare in essa:
`git checkout hello-world-image`
`git checkout master`

In caso si deve creare velocemente una branch in caso di emergenza:
`git checkout -b emergency-fix`

---

## Merge

Per fare il ==merge== di due branches:
`git checkout master` (ritorna alla branch principale)
`git merge emergency-fix` (merge - fast forward, visto che emergency_fix deriva da master e master non è stata modificata)

Per eliminare emergency_fix (ora che master ha tutte le modifiche di emergency_fix):
`git branch -d emergency-fix`

---

## Annullamento staging files

`git rm --cached <nome_file>` (rimuove file dallo staging)

`git reset .` (annulla lo staging delle modifiche)
`git stash` (mette da parte le modifiche non messe in stage - NON ACCETTA FILE NUOVI, SOLO MODIFICATI)

---

`git reset <hash_del_commit>` (resetta la repo alla versione del commit inserito nel comando)

---

## Remote repos

`git remote add <nome (default = origin)> <url>` (aggiungi link tra GitHub e Git locale)
`git push <nome_remote> <nome_locale>` (aggiorna i GitHub commit con i commit locali)

`git pull <--opzioni> <repository>` (aggiorna i commit remoti (github) con i commit in locale (git))

`git clone <link>` (copia repo da remote in locale)

---
