import React from 'react';
import './topbar.css';
import { Searchbar } from './searchbar/searchbar';
import ProductData from '../Products/productData.json';
import { IconText } from './iconText/iconText';
import { BiChat, BiEditAlt, BiShareAlt } from 'react-icons/bi';
import { HiSquares2X2 } from "react-icons/hi2";

function Topbar() {
    return (
        <div className='topbar'>
            <Searchbar placeholder="Search menu... " data={ProductData}/>
            <div className='shortcut-icons-list'>
                <IconText iconName={<BiChat />} name='Chat' />
                <IconText iconName={<HiSquares2X2 />} name='More' />
                <IconText iconName={<BiShareAlt />} name='Share' type='with-border' />
                <IconText iconName={<BiEditAlt />} name='Your notes' type='with-background'/>
            </div>
        </div>
    )
}

export default Topbar