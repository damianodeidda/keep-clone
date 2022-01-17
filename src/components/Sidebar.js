import './Sidebar.css'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';

function Sidebar() {


return (

<div className='sidebar'>
    
    <Link to="/">
        <div className='sidebar__item'>
            <LightbulbOutlinedIcon />
            <p>Note</p>
        </div>
    </Link>

    
    
    <Link to="/promemoria">
        <div className='sidebar__item'>
            <NotificationsNoneOutlinedIcon />
            <p> Promemoria</p>
        </div>
    </Link>



    <Link to="/archivio">
        <div className='sidebar__item'>
            <ArchiveOutlinedIcon />
            <p>Archivio</p>
        </div>
    </Link>
  

    <Link to="/cestino">
        <div className='sidebar__item'>
            <DeleteOutlineOutlinedIcon />
            <p>Cestino</p>
        </div>
    </Link>
            
</div>

    )
}

export default Sidebar
