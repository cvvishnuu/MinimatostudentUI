import React from 'react';
import "./SearchBar.css";

const SearchBar = () => {
    return(
        <div className = "container-search">
            <h1 className = "title">MINIMATO</h1>
            <h2 className = "slogan">Discover the best foods and drinks in your college</h2>
            <div className = "searchbar-container">
                <input className = "searchbar" type = "text" placeholder = "Search..." />
            </div>
        </div>
    )
}

export default SearchBar;