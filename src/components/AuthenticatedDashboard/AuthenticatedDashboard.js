import React, {Component} from 'react';
import ProtectedNav from '../Protectednav/ProtectedNav';
import SearchBar from '../SearchBar/SearchBar';
import Dashboardcards from '../Dashboardcards/Dashboardcards'

class AuthenticatedDashboard extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedOut: false
        }
    }



    render() {
        return(
            <div>
                <div className = "dashboard-container">
                    <ProtectedNav />
                    <SearchBar />
                </div>    
                <Dashboardcards/>
            </div>
        )
    }
}

export default AuthenticatedDashboard;