import React, { Component }from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Adam', age: 41 },
      { id: 2, name: 'Stacy', age: 42 },
      { id: 3, name: 'Skyla', age: 20 }
    ],
    otherState: 'see new value'
  };

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice(); <= old way
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  nameChangedHandler = (event, id ) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState( {persons: persons})
  }


  render () {
    let persons = null;

    if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                  click={() => this.deletePersonHandler(index)}
                  key={person.id} 
                  name={person.name} 
                  age={person.age} 
                  changed={(event) => this.nameChangedHandler(event, person.id )} />
            })}
          </div>
        );
        // set dynmaiclly
        //btnStyle.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <=2 ) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      
        <div className="App">
          <h1>First React app</h1>
          <button className="btn" onClick={this.togglePersonsHandler}>Toggle Persons</button>
          <hr/>
          <p className={classes.join(' ')}>Learning from REACT - The complete guide</p>
          <br/>
          {persons}
        </div>
    );
  }
}

export default App;
