import React from 'react';
import classes from './NavBar.css';
const navbar = (props) => (
    <header className={classes.Toolbar}>
        <nav className={classes.nav}>
           <p>Rick and Morty </p> 
        </nav>
    </header>
)

export default navbar;