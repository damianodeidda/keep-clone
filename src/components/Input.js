import React from 'react'
import './Input.css'
import { useState } from 'react'


function Input(props) {



//UseState per creare l'oggetto
const [note, setNote] = useState({

    titolo: "",
    testo: ""
})


//con questa funzione monitoriamo le modifiche in tempo attuale sui due input.
//La costante viene utilizzata per monitorare entrambi gli input senza dover creare due const separate
const handleChange = (event) => {

  const {name, value} = event.target;

  setNote(prevNote => {
    return {
    ...prevNote,
    [name] : value

    };
  })

}


//Funzione che viene triggerata quando si clicca sul tasto aggiungi
const submitNote = (event) => {
    
  //la funzione passa verso App.js
    props.onAdd(note);

    setNote({
        titolo: "",
        testo: ""
      });

    event.preventDefault();
    

}

    return (
        <div className='input'>
           <form>
            <input name='titolo' placeholder='Titolo' autocomplete="off" value={note.titolo} onChange={handleChange}></input>
            <textarea name='testo' placeholder='Scrivi una nota' rows='1' value={note.testo} onChange={handleChange}></textarea>
            <div className='buttons'><button onClick={submitNote}>Aggiungi</button></div> 
            </form>
        </div>
    )
}

export default Input
