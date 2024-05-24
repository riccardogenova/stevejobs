<!-- @format -->

# Flusso Git

Un **Task** corrisponde a un branch.

Ogni Sviluppatore crea un nuovo ramo partendo dal ramo principale _main_, che sarà di tipo _feat_, _bugfix_, _docs_, _refactor_ o _chore_. Ad esempio, `feat/update-navbar-main` o `bugfix/fix-footer-visibility-main`.

Un ramo può includere uno o più commit. I commit dovranno essere descritti brevemente, mantenendo una descrizione chiara e concisa del lavoro svolto.

Ogni commit quindi deve rispettare il formato seguente:

```
type(student): short description
```

### Etichette _type_

- `feat` Nuovi sviluppi/funzionalità/esercitazioni
- `fix` Correzione di un bug
- `docs` Modifica della documentazione/Creazione di file .MD
- `refactor` Riscrittura del codice.
- `chore` Modifica delle configurazioni o del gestore di pacchetti. Non modifica il codice in produzione.

### Esempio di Commit

```
feat(federico_costanzo): aggiunta esercitazione sulle classi in HTML
```

Scopri di più sui [Git Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Al termine dello sviluppo, si apre una **Pull Request** rispetto al ramo _main_ per la revisione, prima di procedere con il _merge_ del branch mediante un processo di _rebase commit_.

**In caso di conflitti durante la Pull Request** è responsabilità dello Sviluppatore risolvere i conflitti facendo un _rebase_ del proprio ramo ed eseguendo un _push_ forzato sullo stesso ramo. In questo modo la _Pull Request_ (già aperta) sarà automaticamente aggiornata e resa disponibile per il merge.

**Il mancato rispetto di questi standard comporta automaticamente un fallimento durante il processo di commit**

**In caso di richieste di modifiche durante la Pull Request**, deve essere effettuato un commit di fixup indicando l'hash del commit di riferimento.

Esempio di fixup commit:

```
git commit --fixup 03cfcd8e1bad1f3ea50076d200fe0d13308a1ab8
```

**Esempio di creazione di un branch:**

```
git checkout -b feat/update-navbar-main main
```

Questo crea un branch per aggiornare la navbar partendo dal branch principale `main`.

**Esempio di creazione di un commit:**

```
git commit -m "feat(emanuele_fava): aggiornata navbar per miglior accessibilità"
```

Questo commit descrive brevemente l'aggiornamento fatto alla navbar, seguendo il formato convenzionale.
