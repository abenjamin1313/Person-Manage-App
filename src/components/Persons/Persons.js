import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Person from '../Person/Person';


class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] - Inside Constructor', props);
        this.lastPersonRef = React.createRef();
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] - getDerivedStateFromProps');
    //     return state;
    // }

    // USe PureComponent - does all the props check like below

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] - shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons 
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.clicked !== this.props.clicked) { // no need to rerender if there isn't any persons props
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    componentDidMount() {
        console.log('[Persons.js] - componentDidMount');
        //this.lastPersonRef.current.focus();
    }

    getSnapshotBeforeUpdate(prevProps, preState) {
        console.log('[Persons.js] - getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] - componentDidUpdate');
        console.log('[Persons.js]', snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] - componentWillUnMount');

    }

    render() {
        console.log('[Persons.js] - rendering....');
        return this.props.persons.map( (person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                ref={this.lastPersonRef}
                changed={event => this.props.changed(event, person.id)} 
                isAuth={this.props.isAuthenticated} 
                />
          } );
    };  
}
    
Persons.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    id: PropTypes.number,
    changed: PropTypes.func
}

export default Persons;
