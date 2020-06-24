import React from 'react';
import {Route} from 'react-router-dom';

import  NavigationBar  from './component/Navbar';

import SubmitIssuesForm from './component/SubmitIssuesForm';
import RegistrationForm from './component/RegistrationForm';
import SignInForm from './component/SignInForm';

import './App.css';
import './component/forms.css';



function App() {
  return (
    <>
    
    <div className="App">
      <NavigationBar/>
     </div>
     <Route exact path='/'>Home</Route>
      <Route path='/register'>
        <RegistrationForm/>
      </Route>
      <Route path='/signIn'>
        <SignInForm/>
      </Route>
      <Route path='/submitIssues'>
        <SubmitIssuesForm/>
      </Route>
    </>
  );
};

export default App;
