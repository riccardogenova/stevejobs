<!-- @format -->

# Cos'è GIT?

Git è un progetto open source sviluppato nel 2005 da Linus Torvalds, il famoso creatore del sistema operativo Linux.
Git è un esempio di DVCS, Distributed Version Control system, cioè un sistema che permette di controllare attivamente
le versioni di sviluppo di un software, rendendoli accessibili e modificabili ai sviluppatori.
Nasce inizialmente per facilitare lo sviluppo di Linux per ai giorni d'oggi divenire uno degli strumenti
di controllo versioni più diffuso.

# Versioning

Il controllo di versione (versioning) è sostanzialmente un meccanismo attraverso il quale tenere traccia con il passare del tempo delle modifiche apportate ad un progetto; quest'ultimo può essere costituito da un singolo file o da un insieme di file le cui diverse versioni vengono registrate e possono essere richiamate in un momento successivo, anche a grande distanza di tempo, ogni volta che se ne presenti la necessità.

# Snapshots

Nel caso di Git, i dati vengono rappresentati come delle istantanee, o snapshots, quando si memorizza lo stato di un progetto il sistema crea un'immagine di tutti i file al momento corrente; in sostanza Git non fa riferimento alle differenze tra le varie versioni, ma ne "fotografa" gli stati di avanzamento.
Il vantaggio a livello di efficienza risulta evidente, questo perché nel caso in cui un file non dovesse subire delle modifiche, il DVCS non provvederà a salvarlo nuovamente ma si limiterà a definire un collegamento con il salvataggio già effettuato

# Lavorare Offline

Con GIT quasi tutte le operazioni per la memorizzazione si svolgono in locale e a carico di risorse disponibili localmente.
La possibilità di lavorare localmente, e quindi offline, rappresenta un vantaggio non indifferente, in mancanza di una connessione si potrà operare su un progetto affrontando tutte le fasi del versioning fatta eccezione di quella dell'upload, che potrà essere completata non appena stabilito un nuovo collegamento.

# Gestione del flusso di lavoro in Git

Sostanzialmente i file di un progetto in Git possono assumere tra stati differenti:

| Stato      | Descrizione                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| Committati | I file sono stati memorizzati localmente nel database.                                               |
| Modificati | I file hanno subito dei cambiamenti ma non sono stati ancora committati.                             |
| In stage   | I file sono stati coinvolti da modifiche e verranno inclusi in un'istantanea con la prossima commit. |

Agli stati elencati corrispondono altrettante sezioni di un progetto gestito tramite Git:

- Directory di Git
  L'area per il salvataggio del database e dei metadati di un progetto, cioè le informazioni copiate in fase di clonazione di un repository.

- Directory di lavoro
  La copia di backup (checkout) di una determinata versione di un progetto, per ottenerla si estraggono i file dall'archivio della directory di Git in modo da poterli manipolare dal proprio disco.

- Area di stage
  Definita anche come "Indice", è un'area rappresentata da un file contenente le informazioni relative alla commit successiva.
