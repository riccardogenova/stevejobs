git init: inizializza un nuovo repository Git nella directory corrente.

git clone [URL]: clona una repository Git esistehte dalla URL specificata.

git add [file]: aggiunge un file specifico o una serie di file alla staging area.

git add: aggiunge tutti i file modificati alla modificati alla staging area.

git commit -m "[messaggio]": esegue il commit delle modifiche nella staging area con un messaggio di commit associato.

git status: visualizza lo stato attuale dei repository, inclusi file modificati, file non tracciati, etc...

git log: visualizza la cronologia dei commit.

git branch: visualizza l'elenco dei rami presenti nel repository.

git branch [nome-branch]: crea un nuovo ramo con il nome specificato

git branch -D <nome_branch>: elimina il branch locale <nome_branch>

git checkout [nome-branch]: passa al ramo specificato

git merge [nome-branch]: unisce il ramo specificato con il ramo corrente

git pull: estrae e fonde le modifiche dal repository remoto al repository locale

git push: invia i commit locali al repository remoto.

git push origin <nome_branch> : invia le modifiche del branch corrente al repository.
remoto <origin> con il nome <nome_branch>.

git remote add [nome] [URL]: aggiunge un nuovo repository remoto con il nome specificato e la URL specificat.

git remote -V: visualizza l'elenco dei repository remoti configurati.

git fetch: scarica le ultime modifiche dal repository remoto senza incorporale nel tuo repository ,ocale.

git mergetool: apre uno stumento per risolvere i conflitti di merge tra i branchi.

git show <hash_commit> : mostra le informazioni dettagliate su un commit specifico, incluso il messaggio, l'autore e le modifiche apportate.
