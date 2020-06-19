import React from 'react';
import RegistrationForm from './component/RegistrationForm';
import SignInForm from './component/SignInForm';
import {Route, Link} from 'react-router-dom';
import { Button, Navbar } from 'reactstrap';
import './App.css';

function App() {
  return (
    <>
    
    <div className="App">
      <Navbar>
        <h1> Co-Make </h1>
          <Link to={'/'}>
            <Button>
              Home
            </Button>
          </Link>
          <Link to={'/register'}>
            <Button>
              Register
            </Button>
          </Link>
          <Link to={'/signIn'}>
            <Button>
             Sign In
            </Button>
          </Link>
      </Navbar>
      <Route exact path='/'>Home</Route>
      <Route path='/register'>
        <RegistrationForm/>
      </Route>
      <Route path='/signIn'>
        <SignInForm/>
      </Route>
      
      
    </div>
    </>
  );
};

export default App;
