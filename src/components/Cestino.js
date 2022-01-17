import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './Cestino.css'

function Cestino() {
    return (
        <div className='cestino'>
        
        
        <DeleteOutlineOutlinedIcon />
        <h2>Nessuna nota nel Cestino</h2>
        <h3>Le note nel Cestino vengono eliminate dopo 7 giorni.</h3>

            
        </div>
    )
}

export default Cestino
