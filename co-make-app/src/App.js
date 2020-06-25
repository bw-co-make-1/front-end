import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import  NavigationBar  from './component/Navbar';

import SubmitIssuesForm from './component/SubmitIssuesForm';
import RegistrationForm from './component/RegistrationForm';
import SignInForm from './component/SignInForm';

import PrivateRoute from "./component/PrivateRoute";
import Dashboard from './component/Dashboard';
import IssueCards from './component/IssueCards';

import './App.css';
import './component/forms.css';


function App() {
  return (
    <>
    
    <div className="App">
     

      <Router>
     
      <NavigationBar/>
     
     <Route exact path='/'>Home</Route>
      <Route path='/register' component={RegistrationForm} />
      <Route path='/signIn' component={SignInForm} />
      <Route path='/submitIssues' component={SubmitIssuesForm} />
      <Route path='/IssueCards'>
        <IssueCards/>
      </Route>
      <Switch>
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <Route path='/submitIssues' component={SubmitIssuesForm} /> 
      </Switch>
      </Router>
      
      </div>

    {/* <div className='Mission-statement'>
    <p>Ever get frustrated that a problem in your town or neighborhood goes ages without being resolved?<br></br> You might have road issues (potholes, dangerous areas), overgrown plants, or anything else that makes living where you live a little less pleasant.<br></br> With Co-make you can make your voice heard on the issues you would like to see resolved in your community.</p> 
<p>Three simple steps: <br></br>
1. Describe the problem. <br></br>
2. Other locals upvote the problem. <br></br>
3. Problems with the most upvotes get prioritized by local government or HOA’s to be resolved first.</p>

<p>As well as seeing real change in your community, you get rewards for being a positive community member in the form of points, freebies and local recognition.<br></br> 

The problem we are solving: the disintegration in the relationship between local government and the people they represent. </p>
    </div> */}


    </>
  );
};

export default App;