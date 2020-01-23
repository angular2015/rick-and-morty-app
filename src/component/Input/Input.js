import React from 'react';
import classes from './Input.css'

const input = (props) => {
   // console.log(props);
    
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>Search User by name:</label>
            <input
                className={classes.InputElement}
                value={props.value} onChange={props.changed} />
        </div>

    )
}

export default input