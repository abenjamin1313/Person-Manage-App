import React, { Component } from 'react';

import classes from './Person.module.scss';


class Person extends Component {
    render() {
        console.log('[Person.js] - rendering....');

        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>My name is {this.props.name} and my age is {this.props.age}.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
};

export default Person;
