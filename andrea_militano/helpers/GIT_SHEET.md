1. **git init**: Inizializza un nuovo repository Git nella directory corrente.
2. **git clone [URL]**: Clona un repository Git esistente dalla URL specificata.
3. **git add [file]**: Aggiunge un file specifico o una serie di file alla staging area.
4. **git add .**: Aggiunge tutti i file modificati alla staging area.
5. **git commit -m "[messaggio]"**: Esegue il commit delle modifiche nella staging area con un messaggio di commit associato.
6. **git status**: Visualizza lo stato attuale del repository, inclusi file modificati, file non tracciati, ecc.
7. **git log**: Visualizza la cronologia dei commit.
8. **git branch**: Visualizza l'elenco dei rami presenti nel repository.
9. **git branch [nome-branch]**: Crea un nuovo ramo con il nome specificato
10. **git branch -D <nome_branch>**: Elimina il branch locale <nome_branch>.
11. **git checkout [nome-branch]**: Passa al ramo specificato.
12. **git merge [nome-branch]**: Unisce il ramo specificato con il ramo corrente.
13. **git pull**: Estrae e fonde le modifiche dal repository remoto al repository locale.
14. **git push**: Invia i commit locali al repository remoto.
15. **git push origin <nome_branch>**: Invia le modifiche del branch corrente al repository remoto <origin> con il nome <nome_branch>.
16. **git remote add [nome] [URL]**: Aggiunge un nuovo repository remoto con il nome specificato e la URL specificata.
17. **git remote -v**: Visualizza l'elenco dei repository remoti configurati.
18. **git fetch**: Scarica le ultime modifiche dal repository remoto senza incorporarle nel tuo repository locale.
19. **git mergetool**: Apre uno strumento per risolvere i conflitti di merge tra i branch.
20. **git show <hash_commit>**: Mostra le informazioni dettagliate su un commit specifico, incluso il messaggio, l'autore e le modifiche apportate.
21. **git diff**: Mostra le differenze tra le modifiche non ancora inserite nella staging area e il repository locale.
22. **git stash**: Salva le modifiche non commesse in una "stash" temporanea, permettendo di lavorare su un'altra parte del codice senza fare commit delle modifiche correnti.
23. **git cherry-pick <hash_commit>**: Applica le modifiche di un commit specifico su un altro branch.
24. **git rebase**: Rinomina i commit su un branch base, spesso utilizzato per integrare le modifiche di un branch su un altro mantenendo una cronologia lineare.
25. **git tag**: Crea, visualizza e gestisce i tag annotati e leggeri per segnare versioni specifiche del codice.
26. **git bisect**: Utilizzato per individuare il commit che ha introdotto un bug, automatizzando la ricerca binaria tra i commit.
27. **git submodule**: Gestisce i repository all'interno di altri repository, consentendo di includere dipendenze esterne all'interno del proprio progetto.
28. **git log --graph**: Visualizza la cronologia dei commit come un grafico ASCII, utile per comprendere la struttura del repository e le relazioni tra i branch.
29. **git reflog**: Visualizza un registro di riferimento di tutte le azioni eseguite nel repository, utile per ripristinare modifiche perse o cancellate accidentalmente.
30. **git cherry-pick**: è utilizzato per applicare le modifiche introdotte da uno o più commit su un altro branch. Questo comando può essere utile quando si desidera incorporare specifiche modifiche da un branch a un altro senza fondere l'intero branch.
