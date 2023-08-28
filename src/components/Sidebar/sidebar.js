import React, { useState } from 'react';
import './sidebar.css';
import { SidebarData } from './sidebarData';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import TuneIcon from '@mui/icons-material/Tune';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { PiSunDim } from "react-icons/pi";
import { BiMoon } from "react-icons/bi";

function Sidebar () {
    const [isOpen,setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <section className={isOpen ? 'sidebar open' : 'sidebar'}>
            <div className='sidebar-height'>
                <div className='relative-position'>
                    <button className='toggleIcon' onClick={toggle}><KeyboardArrowLeftIcon /></button>
                    <button className='filterButton'><TuneIcon />Filter</button>
                </div>
                {SidebarData.map((val,key)=>{
                    if(val.children){
                        return (
                            <div className='sidebar-header'>
                                <h4 className='sidebar-header-name' key={key}><MoreHorizIcon />{val.title}</h4>
                                <ul className='sidebar-list'>
                                    {
                                        val.children.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    onClick={() => { window.location.pathname = item.link }}
                                                    className='sidebar-list-item'>
                                                    <div id='icon'>{item.icon}</div>
                                                    <div id='title'>{item.title}</div>
                                                    <div className='relative-position'>
                                                        {item.tinyText ? <div id='tiny-text'>{item.tinyText}</div> : ''}
                                                    </div>                                                
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    }else{
                        return (
                                <div key={key} className='sidebar-top-header'>
                                    <span>{val.icon}</span>
                                        <div className = { val.title === 'Menu' ? 'menu-header' : 'productKart-header'}>
                                            <h2>{val.title}</h2>
                                            <span>{val.subtitle}</span>
                                        </div>
                                </div>
                        )
                    }   
                })
                }
            </div>
            <div className='relative-position'>
                <div className='theme'>
                    <button className='dark-theme'><BiMoon />Dark</button>
                    <button className='light-theme'><PiSunDim />Light</button>
                </div>
            </div>
        </section>
    )
}

export default Sidebar