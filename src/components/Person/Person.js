import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxiliary';
import withClass from '../../hoc/WithClass';
import classes from './Person.module.scss';


class Person extends Component {
    render() {
        console.log('[Person.js] - rendering....');

        return (
            <Aux className={classes.Person}>
                <p onClick={this.props.click}>My name is {this.props.name} and my age is {this.props.age}.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}



export default withClass(Person, classes.Person);
