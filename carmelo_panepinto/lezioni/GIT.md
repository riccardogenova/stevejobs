<!-- @format -->

# GIT

## Cos'è

**Git** è un sistema di _controllo di versione distribuito_, progettato per gestire progetti di qualsiasi dimensione con rapidità ed efficienza. La sua caratteristica principale è che permette di tenere traccia delle modifiche apportate ai file nel corso del tempo, consentendo in primo luogo al singolo programmatore di gestire al meglio lo sviluppo del proprio software, in secondo agli altri sviluppatori di collaborare facilmente su progetti software.

Git è ampiamente utilizzato nell'ambito dello sviluppo software per coordinare il lavoro di più persone su un singolo progetto, facilitando la gestione delle modifiche, il tracciamento dei problemi e il rilascio delle versioni.

## Come funziona

Git è un software utilizzabile mediante il suo terminale, nel quale inserire gli appositi comandi.

Il suo funzionamento gira attorno alla tre funzioni **Repository, Commit e Branch**:

- **Repository**, un archivio digitale in cui vengono conservati e gestiti i file di del progetto. Il comando per creare una repository è _git init_, per aggiungere i file alla repository _git add nome_del_file_ o _git add ._ (per aggiungere tutti i file nella cartella);

- **Commit**, un'istantanea delle modifiche apportate ai file nel repository in un determinato momento, accompagnato da un messaggio che descrive le modifiche. Una volta aggiunti i file al repository, è necessario creare un commit per confermare le modifiche con il comando _git commit_;

- **Branch**, git permette di creare branch (rami) per sviluppare nuove funzionalità o lavorare su modifiche senza influire sul ramo principale del progetto (solitamente chiamato "master" o "main"). Questo viene fatto con il comando git branch per creare un nuovo branch e git checkout per passare da un branch all'altro.

In base a queste tre principali funzionalità gli sviluppatori posso lavorare simultaneamente ad un progetto, concentrandosi sulle proprie modifiche nei propri branch. Dopo aver lavorato su un branch separato, è possibile unire le modifiche al ramo principale del progetto (operazione chimata **Marging**) utilizzando il comando _git merge_.

## Alcune funzioni di Git

- Clonare un repository: git clone <URL del repository>

- Aggiungere file modificati: git add <nome del file> o git add . per aggiungere tutti i file modificati.

- Effettuare un commit delle modifiche: git commit -m "Messaggio del commit"

- Caricare le modifiche su GitHub: git push origin <nome del branch>

- Aggiornare il repository locale: git pull origin <nome del branch>

### Altri Comandi Utili:

- git status: Mostra lo stato corrente del repository Git.

- git branch: Mostra i branch attualmente presenti nel repository.

- git checkout <nome del branch>: Cambia branch nel repository.

- git merge <nome del branch>: Unisce un branch con il branch corrente.
