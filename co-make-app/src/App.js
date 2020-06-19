import React from 'react';
import RegistrationForm from './component/RegistrationForm';
import SignInForm from './component/SignInForm';
import Dashboard from './component/Dashboard';
import {Route, Link} from 'react-router-dom';
import { Button, Navbar } from 'reactstrap';
import './App.css';

//Will change Dashboard to be set to a private route.
// Current Private route is set up, but not deployed... Yet.


function App() {
  return (
    <>
    
    <div className="App">
      {/* should eventually be built into it's own component */}
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
      <Route path='/dashboard' >
        <Dashboard />
      </Route>
      
    </div>
    </>
  );
};

export default App;