import React from 'react';
import classes from './Filter.css';
const filter = (props) => (
    <div className={classes.Container}>

        <div style={{ width: "100%" }}>
            <div className={classes.Filter}>
                <b>Filter by gender:</b>
                <p onClick={props.filter}>Male</p>
                <p onClick={props.filter}>Female</p>
            </div>
            <div className={classes.Filter}>
                <b>Filter by Species:</b>
                <p onClick={props.filter}>Human</p>
                <p onClick={props.filter}>Alien</p>

            </div>
            {
                props.selectedFilter ? <div className={classes.filterbutton} onClick={props.clearFilter}>{props.selectedFilter} x</div> : ''
            }

        </div>
        <div style={{ clear: "both" }}></div>
        <div className={classes.option}>
            <b>Sort by ID</b>
            <br />
            <select name={props.name} value={props.value} onChange={props.handleChange}>
                <option value="Ascending ">Ascending</option>
                <option value="Descending ">Descending</option>
            </select>
        </div>
    </div>
)

export default filter;