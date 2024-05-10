<!-- @format -->

# Cos’è Git?

Si tratta di un software gratuito e open source per il controllo di versione, utilizzabile da linea di comando o tramite client GUI Git.

In parole semplici, con Git è possibile tenere traccia di tutti i cambiamenti apportati al progetto, ad esempio un software o un sito web.

# I comandi di Git

Come abbiamo detto, Git si utilizza principalmente da linea di comando, attraverso un terminale.

Per semplificare l’utilizzo di Git sono stati sviluppati nel tempo dei software di interfaccia grafica, come ad esempio Sourcetree e GitHub Desktop. Esistono inoltre delle estensioni per gli editor di codice sorgente più utilizzati, come ad esempio Visual Studio Code, che consentono di lanciare i comandi Git e visualizzare le versioni dei singoli file.

# Come si utilizza Git

Questo software include moltissime funzionalità anche piuttosto complesse, per questo viene utilizzato principalmente da sviluppatori e professionisti del settore informatico.

Le funzioni principali, utilizzate anche nei progetti più semplici, includono la gestione di branch (detti anche “rami”), la creazione di commit, l’upload e il download delle modifiche al codice.

# Il repository

Per prima cosa, è necessario creare un repository, ovvero il “contenitore” che ospiterà il codice del nostro progetto.

Una volta creato il repository, si impostano i vari utenti che vi avranno accesso, con ruoli e permessi specifici.

A questo punto, si definiscono i branch principali, cioè le versioni principali del progetto, che potranno essere modificati anche successivamente.

# Staging area

La staging area in Git, nota anche come index, è una fase intermedia tra il tuo lavoro locale e il repository Git. Quando lavori su dei file nel tuo progetto, Git li vede come modificati rispetto all’ultima versione nel repository. Prima di poter eseguire il commit di queste modifiche, devi aggiungerle alla staging area.

**Ecco come funziona**:

- **Modifiche Locali**: Queste sono le modifiche che hai fatto ai file ma che non hai ancora messo in staging.

- **Staging Area**: Quando esegui il comando git add, stai dicendo a Git di includere le modifiche correnti dei file specificati nella prossima “fotografia” del progetto, o commit.

- **Commit**: Dopo aver aggiunto i file alla staging area, puoi eseguire git commit per effettivamente registrare quella fotografia nel tuo storico dei commit.

La bellezza della staging area è che ti dà controllo su esattamente quali modifiche vuoi includere nel tuo prossimo commit. Questo significa che se hai modificato tre file ma vuoi solo includerne due nel commit, puoi aggiungere solo quei due alla staging area e lasciare il terzo fuori per il momento.

In breve, la staging area è come una bozza del tuo prossimo commit che ti permette di rivedere e finalizzare le modifiche prima di confermarle ufficialmente nel repository con un commit. È uno strumento potente per una gestione fine dei tuoi commit e del tuo flusso di lavoro in Git.

# La gestione dei branch

Un branch, letteralmente “ramo”, rappresenta una versione del progetto. Solitamente si tende ad avere almeno due branch principali:

il “main” o “master”, ovvero la versione pubblica e visibile a tutti;

il “dev”, “development” o “test”, utilizzato durante lo sviluppo e privato.

È possibile creare anche dei sotto-branch, molto utili soprattutto in fase di sviluppo quando più utenti modificano varie parti del codice.

# L’allineamento

Quando un utente vuole collaborare a modificare un determinato progetto su Git, deve prima creare sulla propria macchina una copia locale del repository.

Questo significa che il repository centrale è solo uno, cioè quello remoto, online, mentre gli sviluppatori lavorano su delle copie locali.

È molto importante che la copia locale e la copia remota del repository siano sempre allineate, cioè identiche, per evitare conflitti.

Se il repository locale non è allineato a quello remoto, lo sviluppatore sta di fatto lavorando su una versione obsoleta del progetto, e le sue modifiche potrebbero non funzionare correttamente.

Il modo migliore di lavorare con Git, dunque, è assicurarsi di essere sempre allenati alla versione remota del progetto.

# La creazione di commit

Quando un utente sviluppatore ha terminato una specifica attività, ha bisogno di raggruppare tutte le sue modifiche e applicarle al progetto.

Esegue quindi il comando di commit, ovvero l’archiviazione di tutte le modifiche effettuate ai file dal commit precedente. Un commit deve contenere obbligatoriamente un messaggio, da utilizzare come descrizione delle modifiche.

# Il merging

Eseguire il merging significa unire due versioni, o branch, del progetto.

L’esempio più tipico è il merging del branch di sviluppo nel branch di produzione.

Con questa operazione possono verificarsi dei conflitti da risolvere. Ciò avviene quando nella stessa linea di codice di un file ci sono due o più cambiamenti provenienti dai due branch, oppure se il file che contiene delle modifiche in un branch è stato eliminato nell’altro branch.

# I vantaggi di usare Git

Utilizzare un sistema di versionamento come Git porta enormi benefici al processo di sviluppo software, come ad esempio:

- Apportare modifiche alla produzione rapidamente dopo averle testate;

- Maggiore facilità nell’individuare bug;
  possibilità di ripristinare il codice a una versione precedente;

- Storico dettagliato di tutte le modifiche al codice;
  collaborazione semplificata fra gli sviluppatori, anche in remoto.

Questi sono solo alcuni dei motivi per cui qualsiasi sviluppatore o software house usa Git per i propri progetti.
