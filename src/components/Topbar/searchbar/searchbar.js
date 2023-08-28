import React from "react";
import './searchbar.css';
import { BiSearch, BiCommand } from "react-icons/bi";

export function Searchbar({placeholder}) {

    return (
        <div className="search">
            <div className="searchInput">
                <div className="searchIcon"><BiSearch /></div>
                <input type="text" placeholder={placeholder} />
                <div className="filterIcon"><BiCommand /></div>
            </div>
        </div>
    )
}