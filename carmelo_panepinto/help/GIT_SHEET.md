git init -> inizializzare una repository
git status -> per vedere i file nella staging area (file non tracciati, modificati o pronti per il commit)
git remote add origin https://github.com/Carmoz00/stevejobs.git -> collegare la repository alla repository github
git clone https://github.com/riccardogenova/docs.git -> clonare un progetto github sul locale
git push origin master (o nome del branch) -> caricare i file su github
clear -> pulire lo storico del terminale
git add _ nome_del_file _ -> per aggiungere un file alla staging area della repository
git add _ . _ -> per aggiungere tutti i file della cartella alla staging area della repository
git commit -m _ nome etichetta _ -> dare un commit (etichetta) ad un file (nuovo o aggiornato)
git log -> per vedere la lista dei commit nella repository
git reset _ hash commit _ -> resetta il repository al commit specificato
git checkout _ nome file _ -> scartare le modifiche del file e ripristina la versione più recente dal repository
git checkout _ nome branch _ -> switch in un branch
git checkout -m _ nome branch _
git branch -> lista branch
git branch _ nome _ -> creare nuovo branch
git merge -> unisce le modifiche del branch modificato al branch corrente (spesso il master)
