/*eslint-disable*/
import React, { useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from './CreateArea';

const App = ()=> {

    const [notes, setNotes] = useState([])

    const addNote = (newNote) =>{
        setNotes((prevNotes)=>{
            return [...prevNotes, newNote];
        });
    };

    const deleteNote = (id)=>{
        setNotes((prevNotes)=>{
            return prevNotes.filter((item,index)=>{
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd = {addNote}/>
            {notes.map((note, index)=>{
                return (
                    <Note 
                        key={index}
                        id={index}  
                        title={note.title}
                        content={note.content}
                        onDelete = {deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
  );
}

export default App;
