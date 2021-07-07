import React, { useState } from 'react';

const CreateArea = (props)=>{

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setNote((prev)=>{
            return {
                ...prev, 
                [name]:value
            }
        });
    }

    const createNote = (e) =>{
        props.onAdd(note);
        e.preventDefault();
        setNote({title:"", content:""});
    }


    return(
        <div>
            <form>
                <input type="text" onChange={handleChange} name="title" placeholder="Title" value = {note.title}></input>

                <input type="text" onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value = {note.content}></input>

                <button onClick={createNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;