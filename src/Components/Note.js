/*eslint-disable*/
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

const Note = (props)=>{

    const handleClick = ()=>{
        return props.onDelete(props.id);
    }
    

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Fab onClick={handleClick}>
                <DeleteIcon />
            </Fab>
        </div>
    );
}

export default Note;