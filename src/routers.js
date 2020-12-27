import React, { useState } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import AuthenticatedDashboard from './components/AuthenticatedDashboard/AuthenticatedDashboard'
import { Redirect } from 'react-router';
import Viewprofile from './components/Viewprofile/Viewprofile';
// import CanteenRoute from './components/CanteenRoute/CanteenRoute'


const Rout = () => {
    const [canteenDetails, setCanteenDetails] = useState();
    const loadDetails = (details) => {        
        setCanteenDetails(details);
    }

    return ( 
        <Router>
            <div>
                <Switch>
                    <Route exact path = "/">
                        <Dashboard />
                    </Route>
                    <Route exact path = '/protected/dashboard' render={() => localStorage.getItem('Authorization')? <AuthenticatedDashboard loadDetails = {loadDetails}/>: <Redirect to = '/'/>}/>
                    <Route exact path = '/protected/viewprofile' render={() => localStorage.getItem('Authorization')? <Viewprofile details = {canteenDetails}/>: <Redirect to = '/'/>}/>
                    <Route path={`/canteenroute/:item`} render={()=> <h1>im the menu item</h1> }/>              
                </Switch>
            </div>
        </Router>
    );
}
 
export default Rout ;