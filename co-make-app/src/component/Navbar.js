import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Navbar } from 'reactstrap';



const NavigationBar = () => {
    return (
    <div>
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
      </Navbar>
      
    </div>
    )
};
    
export default NavigationBar;