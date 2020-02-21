import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxiliary';
import withClass from '../../hoc/WithClass';
import classes from './Person.module.scss';
import AuthContext from '../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus(); OLDER version
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    focus() {
        this.inputElementRef.current.focus();
    }
    static contextType = AuthContext;

    render() {
        console.log('[Person.js] - rendering....');

        return (
            <Aux className={classes.Person}>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p key="i1" onClick={this.props.click}>My name is {this.props.name} and my age is {this.props.age}.</p>
                <p key="i2">{this.props.children}</p>
                <input
                key="i3"
                    //ref={(inputEl) => {this.inputElement = inputEl}} OLDER version
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />

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
