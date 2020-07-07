import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import  NavigationBar  from './component/Navbar';

import SubmitIssuesForm from './component/SubmitIssuesForm';
import RegistrationForm from './component/RegistrationForm';
import SignInForm from './component/SignInForm';

import PrivateRoute from "./component/PrivateRoute";
import Dashboard from './component/Dashboard';
import IssueCards from './component/IssueCards';
import Issue from './component/Issue';

import './App.css';
import './component/forms.css';

import {IssueContext} from './component/IssueContext';



function App() {
  
  const [issueList, setIssueList] = useState([]);

  var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://co-make1.herokuapp.com/api/Issue',
  headers: { 
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImFkbWluIiwiZmlyc3RfbmFtZSI6IkFkbWluIiwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTU5Mzg0MjY2MywiZXhwIjoxNTk0NzA2NjYzfQ.XUoHq1AoHbOuHFeefnKqNvjbBMHrTQZEC4M0GgjJG3M'
  }
};
const getIssueList = () => {
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  setIssueList(response.data);
})
.catch(function (error) {
  console.log(error);
});
};

useEffect(() => {
  getIssueList();
}, []);


  return (

    
    <div className="App">
     

      <Router>
     
      <NavigationBar/>
     
     <Route exact path='/'>Home</Route>
      <Route path='/register' component={RegistrationForm} />
      <Route path='/signIn' component={SignInForm} />
      <Route path='/submitIssues' component={SubmitIssuesForm} /> 
      
      {/* //dashboard */}
      <PrivateRoute exact path='/dashboard' >
           
    {/* //dashboard is the list. */}
<Dashboard issues={issueList} setIssueList={setIssueList} />
</PrivateRoute>
      
        {/* //logic for cards */}
      <Route path='/issue/:id' >
      <Issue setIssueList={setIssueList} issues={issueList}   />
        {/* <IssueCards setIssueList = {setIssueList} /> */}
      </Route>

      {/* //update method */}
      {/* <Route path="/update-issue/:id" >
        <IssueUpdate setIssueList={setMovieList} issues={issueList} />
      </Route> */}

      </Router>
      
     

    {/* <div className='Mission-statement'>
    <p>Ever get frustrated that a problem in your town or neighborhood goes ages without being resolved?<br></br> You might have road issues (potholes, dangerous areas), overgrown plants, or anything else that makes living where you live a little less pleasant.<br></br> With Co-make you can make your voice heard on the issues you would like to see resolved in your community.</p> 
<p>Three simple steps: <br></br>
1. Describe the problem. <br></br>
2. Other locals upvote the problem. <br></br>
3. Problems with the most upvotes get prioritized by local government or HOA’s to be resolved first.</p>

<p>As well as seeing real change in your community, you get rewards for being a positive community member in the form of points, freebies and local recognition.<br></br> 

The problem we are solving: the disintegration in the relationship between local government and the people they represent. </p>
    </div> */}

</div>
    
  );
};

export default App;