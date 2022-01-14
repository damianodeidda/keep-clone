import React, { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Input from './components/Input';
import Note from './components/Note';
import Sidebar from './components/Sidebar';


function App() {

const [notes, setNotes] = useState([]);
const [isFlex, setIsFlex] = useState(true);


const changeFlex = () => {

  console.log('Header click triggerato');
  setIsFlex(!isFlex);

  
}


const [isSidebarClosed, setIsSidebarClosed] = useState(true);

const openSidebar = () => {

console.log('hola tasto open sidebar triggerato')

setIsSidebarClosed(!isSidebarClosed);


}

const [isDarkMode, setIsDarkMode] = useState(false);

const activateDarkMode = () => {

  setIsDarkMode(!isDarkMode);


}



const addNote = (newNote) => {

setNotes(prevNotes => {

  return [...prevNotes, newNote];
})

}

const deleteNote = (id) => {

  setNotes(prevNotes => {

   return prevNotes.filter((noteItem, index) => {

      return index !== id;

    })
  })

}




  return (
    <div className={!isDarkMode ? "app" : "app__dark"}>
      <Header onFlex={changeFlex} onOpen={openSidebar} onDark={activateDarkMode} />

    <div className='app__body'>

      <div className={isSidebarClosed ? 'app__sidebar' : 'app__sidebar__open'}>

        <Sidebar />

      </div>

      <div className='app__content'>
        <div className='app__inputArea'>
      <Input onAdd={addNote} />

      </div>
      <div className={isFlex ? 'app__notesArea ' : 'app__notesArea__blocks' }>

      <div className={isFlex ? 'note__width__min' : 'note__width__max' }> <Note titolo='Nota di default' testo='Contenuto di esempio. Questa nota non può essere cancellata' onDelete={deleteNote} /> </div>


      {notes.map((noteItem, index) => {

        return <div className={isFlex ? 'note__width__min' : 'note__width__max' }> <Note key={index} id={index} titolo={noteItem.titolo} testo={noteItem.testo} onDelete={deleteNote} /> </div>


      })}
</div>
</div>
</div>

    </div>
  );
}

export default App;
