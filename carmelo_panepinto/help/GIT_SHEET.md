git init -> inizializzare una repository
git status -> per vedere i file nella staging area (file non tracciati, modificati o pronti per il commit)
git remote add origin https://github.com/Carmoz00/stevejobs.git -> collegare la repository alla repository github
git clone https://github.com/riccardogenova/docs.git -> clonare un progetto github sul locale
git push origin master (o nome del branch) -> caricare i file su github
clear -> pulire lo storico del terminale
git add * nome_del_file * -> per aggiungere un file alla staging area della repository
git add * . * -> per aggiungere tutti i file della cartella alla staging area della repository 
git commit -m * nome etichetta * -> dare un commit (etichetta) ad un file (nuovo o aggiornato)
git log -> per vedere la lista dei commit nella repository
git reset * hash commit * -> resetta il repository al commit specificato
git checkout * nome file * -> scartare le modifiche del file e ripristina la versione più recente dal repository
git checkout * nome branch * -> switch in un branch
git checkout -m * nome branch * 
git branch -> lista branch
git branch * nome  * -> creare nuovo branch 
git merge -> unisce le modifiche del branch modificato al branch corrente (spesso il master)