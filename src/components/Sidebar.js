import './Sidebar.css'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Sidebar() {


    return (
        <div className='sidebar'>
<div className='sidebar__item'>
    <LightbulbOutlinedIcon />
    <p>Note</p>
    </div>
    <div className='sidebar__item'>
    <NotificationsNoneOutlinedIcon />
    <p>Promemoria</p>
    </div>


    <div className='sidebar__item'>
    <CreateOutlinedIcon />
    <p>Etichette</p>
    </div>


    <div className='sidebar__item'>
    <ArchiveOutlinedIcon />
    <p>Archivio</p>
    </div>


    <div className='sidebar__item'>
    <DeleteOutlineOutlinedIcon />
    <p>Cestino</p>
    </div>
            
        </div>
    )
}

export default Sidebar
