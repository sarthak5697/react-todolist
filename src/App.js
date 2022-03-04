import React ,{useState,useEffect} from 'react';
import NotesList from './components/NotesList';
import {nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';


const App = () => {

  const [notes, setNotes] = useState([
  {
    id: nanoid(),
    text:"this is my first note",
    date:"27/02/2022",
  },
  {
    id: nanoid(),
    text:"this is my second note",
    date:"25/02/2022",
  },
  {
    id: nanoid(),
    text:"this is my third note",
    date:"22/02/2022",
  },
  {
    id: nanoid(),
    text:"this is my fourth note",
    date:"28/02/2022",
  },
  {
    id: nanoid(),
    text:"this is my fifth note",
    date:"29/02/2022",
  },
]);

const [searchText ,setSearchText ] = useState('');
const [darkMode, setDarkMode] = useState(false);


useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('reactjs-notes-app-data'));
  if(savedNotes)
  {
    setNotes(savedNotes);
  }

},[])
useEffect(() => {
  
  localStorage.setItem('reactjs-notes-app-data',JSON.stringify(notes));
}, [notes]);

const addNote =(text)=>{

  const date= new Date();
  const newNote= {
    id: nanoid(),
    text: text ,
    date: date.toLocaleDateString()
                  }

  const newNotes = [ ...notes,newNote];
  setNotes(newNotes);

}


const deleteNote = (id)=>{

 const newNotes = notes.filter((note)=>note.id !== id );
 setNotes(newNotes);

}


  return(
  
    <div className='container'>
    <Header handleToggleDarkMode={setDarkMode} />
    <Search handleSearchNote={setSearchText}/>
    <NotesList 
        notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote} 
    />
  </div> 
)};

export default App;