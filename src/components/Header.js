import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import logo from '../img/logo-keep.png'
import { useState } from 'react';
import { Tooltip } from '@mui/material';


function Header(props) {


const [isShowRowActive, setisShowRowActive] = useState(true);


const changeFlex = () => {

    props.onFlex();


}

const openSidebar = () => {

    props.onOpen();
}

const [isDarkMode, setIsDarkMode] = useState(false);

const activateDarkMode = () => {

    setIsDarkMode(!isDarkMode);
    props.onDark();
}

    return (
        <div className='header'>
            <div className='header__left'>
                 <Tooltip title='Menu principale'>
                 <MenuIcon onClick={openSidebar} />
                 </Tooltip>
            <div className='keep-logo'>
                <img src={logo} alt='logo'></img>
            </div>
        <h2>Keep</h2>
            </div>
            <div className='header__center'>
                <SearchIcon />
                <input type='text' placeholder='Cerca'></input>
            </div>
            <div className='header__right'>
              <div className='header__right__actions'>
               <Tooltip title='Refresh'>
               <RefreshIcon className='refresh_icon' onClick={() => {window.location.reload();} }/>
               </Tooltip>
                
               <Tooltip title='Visualizza elenco'>
               <ViewAgendaOutlinedIcon className={isShowRowActive ? '' : 'show_rows_off'} onClick={() => {changeFlex(); setisShowRowActive(!isShowRowActive);}} />
               </Tooltip>

               <Tooltip title='Visualizza griglia'>
               <GridViewIcon className={isShowRowActive ? 'show_rows_off' : ''} onClick={() => {changeFlex(); setisShowRowActive(!isShowRowActive);}} />
               </Tooltip>

               <Tooltip title='Dark mode'>
                    <div className='dark_toggle_icon' onClick={activateDarkMode}>
                    <Brightness4Icon className={!isDarkMode ? 'dark_toggle_icon_circle' : 'dark_toggle_icon_circle active'} />
    
               </div>
               </Tooltip>
               </div>
               
               <div className='header__right__account'>
               <InfoOutlinedIcon />
               <AccountCircleIcon />
               </div>

            </div>
        </div>
    )
}

export default Header
