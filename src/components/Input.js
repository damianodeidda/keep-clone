import React from 'react'
import './Input.css'
import { useState } from 'react'


function Input(props) {

const [note, setNote] = useState({

    titolo: "",
    testo: ""
})


const handleChange = (event) => {

  const {name, value} = event.target;

  setNote(prevNote => {
    return {
    ...prevNote,
    [name] : value

    };
  })

}

const submitNote = (event) => {

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
