import React from 'react'
import './Note.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Tooltip } from '@mui/material';

function Note(props) {

const handleClick = () => {

    props.onDelete(props.id);
}





    return (
        <div className='note note__flexed'>
            <h2>{props.titolo}</h2>
            <div className='note__bottom'>
            <p>{props.testo}</p>
            <Tooltip title='Elimina nota'>
            <button onClick={handleClick}><DeleteOutlineIcon/></button>
            </Tooltip>
            </div>
        </div>
    )
}

export default Note

