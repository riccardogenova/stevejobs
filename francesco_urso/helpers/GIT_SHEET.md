# GIT SHEET

## Forma generale

Questa stringa di utilizzo è la forma generale del comando git con la sua sintassi e le opzioni supportate.

- `-v | --version`: Stampa la versione di Git installata.

- `-h | --help` : Stampa l'elenco delle opzioni del comando git.

- `-C < path>`: Specifica un percorso diverso da utilizzare come directory corrente per l'esecuzione del comando.

- `-c < name>=< value>`: Imposta una variabile di configurazione per l'ambito del comando.

- `--exec-path[=< path>]`: Specifica un percorso alternativo per cercare i file eseguibili di Git.

- `--html-path`: Mostra il percorso della documentazione HTML di Git.

- `--man-path`: Mostra il percorso della documentazione manuale di Git.

- `--info-path`: Mostra il percorso della documentazione di Git in formato info.

- `-p | --paginate | -P | --no-pager`: Controlla il paging dell'output del comando (-p e --paginate attivano il paging, -P e --no-pager lo disattivano).

- `--no-replace-objects`: Disabilita il rimpiazzo degli oggetti durante l'importazione di un repository.

- `--bare`: Crea un repository Git "bare" senza una directory di lavoro.

- `--git-dir=< path>`: Specifica un percorso diverso per il repository Git.

- `--work-tree=< path>`: Specifica un percorso diverso per la directory di lavoro del repository Git.

- `--namespace=< name>`: Specifica uno spazio dei nomi Git.

- `--super-prefix=< path>`: Specifica un prefisso per i repository sovrapposti.

- `--config-env=< name>=< envvar>`: Imposta una variabile di configurazione con il valore di un'variabile d'ambiente.

## Comandi base

**clone**: Clona un repository in una nuova directory. -`git clone https://github.com/utente/repository.git`

**init**: Crea un repository Git vuoto o reinizializza uno esistente. -`git init`

**add**: Aggiunge i contenuti dei file all'indice. -`git add nomefile.txt`

**mv**: Sposta o rinomina un file, una directory o un symlink. -`git mv vecchio_nome nuovo_nome`

**restore**: Ripristina i file nell'albero di lavoro. -`git restore nomefile.txt`

**rm**: Rimuove i file dall'albero di lavoro e dall'indice. -`git rm file_da_rimuovere.txt`

**bisect**: Utilizza la ricerca binaria per trovare il commit che ha introdotto un bug. -`git bisect start`

**diff**: Mostra le modifiche tra i commit, il commit e l'albero di lavoro, ecc. -`git diff HEAD~1`

**grep**: Stampa le righe corrispondenti a un pattern. -`git grep "pattern"`

**log**: Mostra i log dei commit. -`git log`

**show**: Mostra vari tipi di oggetti. -`git show HEAD`

**status**: Mostra lo stato dell'albero di lavoro. -`git status`

**branch**: Elenca, crea o elimina branch. -`git branch`

**commit**: Registra le modifiche nel repository. -`git commit -m "Messaggio di commit"`

**merge**: Unisce due o più storie di sviluppo. -`git merge branch_da_unire`

**rebase**: Riapplica i commit su un'altra punta base. -`git rebase master`

**reset**: Resetta HEAD corrente allo stato specificato. -`git reset --hard HEAD~2`

**switch**: Cambia branch. -`git switch nome_del_branch`

**tag**: Crea, elenca, elimina o verifica un tag firmato con GPG. -`git tag -a v1.0 -m "Versione 1.0"`

**fetch**: Scarica oggetti e riferimenti da un altro repository. -`git fetch origin`

**pull**: Esegue il fetch e l'integrazione con un altro repository o un branch locale. -`git pull origin master`

**push**: Aggiorna i riferimenti remoti insieme agli oggetti associati. -`git push origin master`

## Comandi composti

Clonare un Repository Git

> git clone <https://github.com/utente/repository.git> <directory_di_destinazione>

Aggiungere un File, Fare Commit e Push sul Repository Remoto

> git add nomefile.txt \
> git commit -m "Aggiunto nuovo file" \
> git push origin master

Creare un Nuovo Branch, Effettuare delle Modifiche e Fare Merge:

> git checkout -b nuovo-branch \
> #Effettua le modifiche ai file... \
> git add . \
> git commit -m "Modifiche sul nuovo branch" \
> git checkout master \
> git merge nuovo-branch

## Istruzioni base

Queste sono le istruzioni di base per utilizzare Git e gestire un repository.

1. `git init`:  
   Inizializza una repository sul mio progetto, creando una cartella nascosta `.git` che conterrà le informazioni di versionamento.

2. `git status`:  
   Visualizza lo stato attuale della repository, mostrando i file modificati, aggiunti o non tracciati.

3. `git add <cartella>`:  
   Aggiunge i file specificati alla zona di stage di Git, pronti per essere committati. Con `git add .` vengono aggiunti tutti i file modificati nella repository.

4. `git commit -m "descrizione del commit"`:  
   Registra le modifiche nella repository con una descrizione fornita dall'utente.

5. `git log`:  
   Visualizza lo storico dei commit, mostrando l'autore, la data e la descrizione di ciascun commit.

6. `git reset <hash del commit>`:  
   Annulla le modifiche fino al commit specificato, riportando il repository allo stato precedente.

7. `git checkout <percorso file>`:  
   Scarta le modifiche fatte a un file specifico, ripristinandolo allo stato precedente.

8. `git branch`:  
   Visualizza la lista dei branch presenti nella repository.

9. `git branch <nome branch>`:  
   Crea un nuovo branch con il nome specificato.

10. `git checkout <nome branch>`:  
Spostarsi nel branch che di interessa, consentendo di lavorare su di esso.
<!-- e si vedrà il nome del branch colorato in verde.  -->

## Upload su github

Queste sono le istruzioni per effettuare l'upload su github:

<!-- git remote add origin https://github.com/francesco-urso/web.git -->

1. `git remote add origin https://github.com/<tuonomeutente/tuorepository.git>`:  
   Collega la repository locale a quella su GitHub, utilizzando l'URL del repository remoto. Il nome "origin" è convenzionalmente utilizzato per riferirsi al repository remoto principale.

2. `git push origin main`:  
   Esegue l'upload delle modifiche presenti nel branch "main" della repository locale su GitHub. Il comando "push" sincronizza le modifiche locali con il repository remoto specificato. Assicurati di avere i permessi necessari per eseguire questa operazione sul repository remoto.

Per rimuovere il collegamento:

1. `git remote remove origin https://github.com/<tuonomeutente/tuorepository.git>`:  
Rimuove il collegamento al repository remoto denominato "origin". Questo comando è utile se si desidera collegare la repository locale a un altro repository remoto o rimuovere completamente il collegamento esistente.
<!-- git remote remove origin https://github.com/francesco-urso/web.git -->

## Clonare un repository

Questo comando clona un repository remoto dal sito GitHub sul tuo computer locale. Sostituisci `<URL>` con l'URL del repository che desideri clonare. Ciò creerà una copia del repository remoto sul tuo computer locale, consentendoti di lavorare sui file e contribuire al progetto.

> `git clone < url>

## Creare gli Alias

**Git alias** consente di creare alias personalizzati per i comandi Git, rendendo più rapido l'utilizzo di sequenze di comandi frequentemente utilizzate.
\
\
**Creazione Alias**

1. Puoi creare un alias per un comando Git utilizzando il comando `git config`. Ad esempio, se desideri creare un alias per il comando `git status`, puoi eseguire il seguente comando che creerà un alias st per il comando status.

   - > git config --global alias.st status

2. **Utilizzo dell'alias**: Dopo aver creato l'alias, puoi utilizzarlo come un normale comando Git. Ad esempio, invece di digitare `git status`, ora puoi digitare semplicemente `git st` per ottenere lo stesso risultato.
   - > git st

### Visualizzare gli Alias

Puoi visualizzare tutti gli alias configurati eseguendo il comando:

> git config --get-regexp alias

### Cancellare gli Alias

Per cancellare un alias in Git, puoi utilizzare il comando `git config --global --unset alias.<nome_alias>`, dove <nome_alias> è il nome dell'alias che desideri cancellare.\
Se desideri cancellare l'alias `st` che abbiamo definito nell'esempio precedente, puoi eseguire il seguente comando:

> git config --global --unset alias.st
