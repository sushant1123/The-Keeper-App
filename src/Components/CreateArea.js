import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const CreateArea = (props)=>{

    const [isZoomed, setIsZoomed] = useState(false);

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

    const expand = ()=>{
        setIsZoomed(true)
    }

    return(
        <div>
            <form className="create-note">
                {isZoomed && 
                    <input autoFocus type="text" onChange={handleChange} name="title" placeholder="Title" value = {note.title}></input>
                }
                
                <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isZoomed ? "2": "1"} value = {note.content} />

                <Zoom in={isZoomed}>
                    <Fab onClick={createNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;