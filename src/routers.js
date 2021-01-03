import React, { useState } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import AuthenticatedDashboard from './components/AuthenticatedDashboard/AuthenticatedDashboard'
import { Redirect } from 'react-router';
import Viewprofile from './components/Viewprofile/Viewprofile';
import SecondComponent from './components/TestingComponent/SecondComponent';
import CanteenMenu from './components/CanteenMenu/CanteenMenu';
// import CanteenRoute from './components/CanteenRoute/CanteenRoute'
import Viewcart from './components/ViewCart/ViewCart'


const Rout = () => {    
    return ( 
        <Router>
            <div>
                <Switch>
                    <Route exact path = "/">
                        <Dashboard />
                    </Route>
                    <Route exact path = '/protected/dashboard' render={() => localStorage.getItem('Authorization')? <AuthenticatedDashboard /> : <Redirect to = '/'/>}/>
                    <Route exact path = '/protected/viewprofile' render={() => localStorage.getItem('Authorization')? <Viewprofile />: <Redirect to = '/'/>}/>
                    <Route path={`/canteenroute/:item`} render={(props)=> <CanteenMenu {...props}/>  }/>                              
                    <Route path={`/protected/viewcart/:id`} render={(props)=> localStorage.getItem('Authorization')? <Viewcart {...props}/> : <Redirect to = '/'/>}/>        
                </Switch>
            </div>
        </Router>
    );
}
 
export default Rout ;