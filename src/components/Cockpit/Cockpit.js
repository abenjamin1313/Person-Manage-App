import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.scss';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    // combine componentDidMount & componentDidUpdate in one hook
    // can use ore than once
    useEffect(() => {
      console.log('[Cockoit.js] - useEffect');
      // HTTP requests....
      // const timer = setTimeout(() => {
      //     alert('Saved data to cloud');
      // }, 1000);
      toggleBtnRef.current.click();
      return () => {
       // clearTimeout(timer); // clean up work in useEffect
        console.log('[Cockpit.js] - cleanup work in useEffect');
      };
    }, []); // empty array it will only run once
    // props.persons will only run when first started and when perosns com is changed

    useEffect(() => {
      console.log('[Cockoit.js] - 2end useEffect');
      return () => {
        console.log('[Cockpit.js] - cleanup work in 2end useEffect');
      };
    });

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

  return (
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <hr/>
          <br/>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
          Toggle Persons
          </button>
          <br/>
          
            <button className={btnClass} onClick={authContext.login}>Log In</button>
      </div>
  );
}

export default React.memo(Cockpit); // react.meo optimizes fucntional com, only updates it when needed