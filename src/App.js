import React, { useState }from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Adam', age: 41 },
      { name: 'Stacy', age: 42 },
      { name: 'Skyla', age: 20 }
    ]
  });

  const switchNameHandler = () => {
    //console.log('Was clicked');
    setPersonsState({persons: [
        { name: 'Adam', age: 42 },
        { name: 'Stacy', age: 43 },
        { name: 'Skyla', age: 21 }
      ]
    });
  }

    return (
      <div className="App">
         <h1>First React app</h1>
         <button onClick={switchNameHandler}>Switch Name</button>
         <hr/>
         <p>Learning from REACT - The complete guide</p>
         <br/>
         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
         <br/>
         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Healthy Living</Person>
         <br/>
         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
}

export default app;
