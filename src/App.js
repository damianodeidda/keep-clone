import React, { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Input from './components/Input';
import Note from './components/Note';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Promemoria from './components/Promemoria';
import Archivio from './components/Archivio';
import Cestino from './components/Cestino';


function App() {

//sezione dedicata alla creazione della nota con l'utilizzo dell'hook useState

const [notes, setNotes] = useState([]);


// La funzione addNote è  triggerata dal tasto "Aggiungi" che si trova nel component "Input.js"
const addNote = (newNote) => {

  setNotes(prevNotes => {

    // prevNotes è l'array del virtualDom dove vengono aggiunte le nuove note.
    return [...prevNotes, newNote];
  })
  
  }
  

 // La funzione deleteNote è  triggerata dal tasto elimina di Note.js
  const deleteNote = (id) => {
  
    setNotes(prevNotes => {

     return prevNotes.filter((noteItem, index) => {
  
        return index !== id;
  
      })
    })
  
  }


//Questa funzione è triggerata dal tasto "Visualizza lista" dall'Header per modificare
//la disposizione delle note
const [isFlex, setIsFlex] = useState(true);

const changeFlex = () => {

  console.log('Tasto Visualizza Griglia click triggerato');
  setIsFlex(!isFlex);

  
}

//Questa funzione è triggerata dal tasto "Visualizza menu" dall'Header per estendere
//la sidebar in modo statico (e non con l'hover)

const [isSidebarClosed, setIsSidebarClosed] = useState(true);

const openSidebar = () => {

console.log('tasto open sidebar triggerato')

setIsSidebarClosed(!isSidebarClosed);


}


//Questa funzione è triggerata dal toggle "Dark mode" dall'Header per attivare
//la dark mode

const [isDarkMode, setIsDarkMode] = useState(false);

const activateDarkMode = () => {

  setIsDarkMode(!isDarkMode);


}



return (
    
   
<div className={!isDarkMode ? "app" : "app__dark"}>
  
  <BrowserRouter>
     
    <Header onFlex={changeFlex} onOpen={openSidebar} onDark={activateDarkMode} />

    <div className='app__body'>
   
      <div className={isSidebarClosed ? 'app__sidebar' : 'app__sidebar__open'}>

        <Sidebar />

      </div>

      
      <div className='app__content'>
      
      <Routes>
      

      <Route path='/' element={ 
      <><div className='app__inputArea'>
          
          <Input onAdd={addNote} />

        </div>
          
      <div className={isFlex ? 'app__notesArea ' : 'app__notesArea__blocks'}>

      <div className={isFlex ? 'note__width__min' : 'note__width__max'}> 
      
      
      <Note titolo='Nota di default' testo='Contenuto di esempio. Questa nota non può essere cancellata' onDelete={deleteNote} /></div>


      {notes.map((noteItem, index) => {

          return <div className={isFlex ? 'note__width__min' : 'note__width__max'}> <Note key={index} id={index} titolo={noteItem.titolo} testo={noteItem.testo} onDelete={deleteNote} />

      </div>;


        })}
        
      </div></> } />


      <Route path="/promemoria" element={<Promemoria />} />   
      <Route path="/archivio" element={<Archivio />} />     
      <Route path="/cestino" element={<Cestino />} />     
      
      </Routes>
      
      </div>
      
     
    </div>
    
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;
