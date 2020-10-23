import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import AuthenticatedDashboard from './components/AuthenticatedDashboard/AuthenticatedDashboard'
import { Redirect } from 'react-router';
import Viewprofile from './components/Viewprofile/Viewprofile';

const Rout = () => {
    return ( 
        <Router>
            <div>
                <Switch>
                    <Route exact path ="/">
                        <Dashboard/>
                    </Route>
                    <Route exact path = '/protected/dashboard' render={()=> localStorage.getItem('Authorization')? <AuthenticatedDashboard />: <Redirect to = '/'/>}/>
                    <Route exact path = '/protected/viewprofile' render={()=> localStorage.getItem('Authorization')? <Viewprofile />: <Redirect to = '/'/>}/>
                </Switch>

            </div>
        </Router>
    );
}
 
export default Rout ;