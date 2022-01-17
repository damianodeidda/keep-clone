# Keep Clone

Questo progetto è stato creato utilizzando la libreria React App [Create React App](https://github.com/facebook/create-react-app).

È possibile vedere il progetto cliccando al link: https://keep-clone-portfolio.herokuapp.com/

Poiché si trata di un progetto esclusivamente Frontend, è possibile fare dei test inserendo le note ed eliminandole.

## Il progetto

Il progetto è un clone dell'app Keeper di Google, ovvero lo strumento per prendere note e appunti in modo rapido.

Ho scelto questo progetto per il mio portfolio perché si tratta di un progetto relativamente semplice (ho inserito alcune funzionalità base), ma allo stesso tempo mi ha dato la pssibilità di studiare nel dettaglio la struttura di un prodotto creato da Google, sia per quel che riguarda le componenti (Header, Sidebar, Icone e microinterazioni), sia per quel che riguarda le funzionalità e la relazione tra le varie parti dell'App, riflettendo sull'interfaccia utente.

Gli obiettivi del progetto sono stati:

- Riprodurre l'app focalizzandomi principalmente sulle intefacce sia dal lato Desktop sia Mobile;
- Inserire la funzionalità aggiungi Nota / Elimina nota;
- Scrivere un codice semplice ed essenziale attrerso l'utilizzo di variabili, components ed evitando le ripetizioni. Inoltre ho voluto focalizzarmi su un codice facilmente gestibile e scalabile attraverso l'utilizzo dei commenti;
- Studiare la UI e le microinterazioni di un prodotto Google e cercare di riprodurle;

## Gli strumenti

Ho sviluppato l'interfaccia utilizzando **React**, **React Router-Dom**, **CSS** e la **libreria Material UI**. Ho caricato il codile del progetto sul mio account GitHub e l'app su Heroku.

## Il codice

Il codice di questo progetto si suddivide nel file **App.js**, dove all'interno sono presenti i children e i relativi file css:

- Header
- Input
- Note
- Sidebar

Inoltre sono presenti le directories legate alle voci della sidebar (Promemoria, 

Ho deciso di non creare un albero delle componenti troppo complicato, in modo da rendere il codice il più essenziale possibile e da far passare le varie funzioni tra i componenti in modo semplice.

Ho inoltre utilizzato il pacchetto **React-Router-DOM**, che permette di creare delle directories in modo rapido e dinamico. Il pacchetto è stato utilizzato principalmente per cambiare le pagine dalla sidebar, nonostante queste siano statiche poiché si tratta di un progetto esclusivamente Frontend.



