import React, { Component } from 'react';
import RegistrationForm from './component/RegistrationForm';
import SignInForm from './component/SignInForm';
import {Route, Link} from 'react-router-dom';
import { Button, Navbar } from 'reactstrap';
import './App.css';
import './component/forms.css';
import SubmitIssuesForm from './component/SubmitIssuesForm';
import IssueCards from './component/IssueCards';


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
          <Link to={'/submitIssues'}>
            <Button>
             Submit Issues
            </Button>
          </Link>
          <Link to={'/IssuesPage'}>
            <Button>
             Vote for Issues
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
      <Route path='/submitIssues'>
        <SubmitIssuesForm/>
      </Route>
      <Route path='/IssuesPage'>
        <SignInForm/>
      </Route>
      
      
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
