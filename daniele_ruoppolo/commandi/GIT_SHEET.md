Inizializzazione:

    git init: Crea un nuovo repository Git nella cartella corrente.
    


Aggiunta di file:

    git add <nome_file>: Aggiunge un file al prossimo commit.

    git add .: Aggiunge tutti i file modificati al prossimo commit.



Commit di modifiche:

    git commit -m "<messaggio_commit>": Registra le modifiche aggiunte come un nuovo commit con un messaggio descrittivo.



Visualizzazione dello stato:

    git status: Mostra i file modificati, non aggiunti e non in linea con il repository remoto.



Ottenimento di modifiche dal repository remoto:

    git fetch: Scarica le ultime modifiche dal repository remoto senza incorporarle nel tuo repository locale.

    git pull: Scarica le ultime modifiche dal repository remoto e le integra nel tuo repository locale.



Creazione di un branch:

    git branch <nome_branch>: Crea un nuovo branch chiamato <nome_branch>.

    git checkout <nome_branch>: Passa al branch <nome_branch>.



Cambio di branch:

    git checkout <nome_branch>: Passa al branch <nome_branch>.



Unione di branch:

    git merge <nome_branch>: Integra le modifiche del branch <nome_branch> nel branch corrente.



Visualizzazione della cronologia dei commit:

    git log: Mostra la cronologia dei commit con messaggi e dettagli.



Eliminazione di un branch locale:

    git branch -D <nome_branch>: Elimina il branch locale <nome_branch>.



Invio di modifiche al repository remoto:

    git push origin <nome_branch>: Invia le modifiche del branch corrente al repository remoto <origin> con il nome <nome_branch>.



Risoluzione di conflitti di merge:

    git mergetool: Apre uno strumento per risolvere i conflitti di merge tra i branch.



Ottenimento di informazioni su un commit:

    git show <hash_commit>: Mostra le informazioni dettagliate su un commit specifico, incluso il messaggio, l'autore e le modifiche apportate.



Creazione di un tag:

    git tag <nome_tag> <hash_commit>: Crea un tag chiamato <nome_tag> che punta al commit con l'hash <hash_commit>.



Elencazione dei tag:

    git tag: Elenca tutti i tag disponibili nel repository locale.



Eliminazione di un tag:

    git tag -d <nome_tag>: Elimina il tag <nome_tag> dal repository locale.



Richiesta di aiuto:

    git help <comando>: Fornisce la guida in linea per un comando Git specifico.



Link per altra documentazione:

    https://www.w3schools.com/git/default.asp
    
ciao