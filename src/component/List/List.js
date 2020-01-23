import React from 'react';
import classes from './List.css';
const list = (props) => (
    <div className={classes.Container}>
        {
            props.data.map(data => (
                <div key={data.id} className={classes.Card} >
                    <div className={classes.imgContainer}>
                        <img src={data.image} className={classes.imgWidth} alt="avtar" />
                        <div className={classes.imgText}>
                            <p className={classes.padLeft}>{data.name}</p>
                            <p className={classes.padLeft + ' ' + classes.smallText} >id: {data.id}  <span>created {new Date().getFullYear() - new Date(data.created).getFullYear()} years ago</span></p>
                        </div>
                    </div>
                    <div className={classes.userDetail}>
                        <div style={{ padding: "5px 0px" }}>
                            <div className={classes.flotLeft}>status</div>
                            <div className={classes.textRight}>{data.status}</div>
                        </div>
                        <hr />
                        <div style={{ padding: "5px 0px" }}>
                            <div className={classes.flotLeft}>Species</div>
                            <div className={classes.textRight}>{data.species}</div>
                        </div>
                        <hr />
                        <div style={{ padding: "5px 0px" }}>
                            <div className={classes.flotLeft}>Gender</div>
                            <div className={classes.textRight}>{data.gender}</div>
                        </div>
                        <hr />
                        <div style={{ padding: "5px 0px" }}>
                            <div className={classes.flotLeft}>Origin</div>
                            <div className={classes.textRight}>{data.origin.name}</div>
                        </div>
                        <hr />
                        <div style={{ padding: "5px 0px" }}>
                            <div className={classes.flotLeft}>Last Location</div>
                            <div className={classes.textRight}>{data.location.name}</div>
                        </div>

                    </div>
                </div>
            ))
        }

    </div>
)

export default list;