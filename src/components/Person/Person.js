import React from 'react'

import classes from './Person.module.scss';


const person = ( props ) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>My name is {props.name} and my age is {props.age}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;
