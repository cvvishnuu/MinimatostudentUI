import React, { Component } from 'react';
import Navigation from "../Navigation/Navigation";
import SearchBar from '../SearchBar/SearchBar';
import "./Dashboard.css"
import { Redirect } from 'react-router';
import Dashboardcards from '../Dashboardcards/Dashboardcards'


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {  
            isAuthenticated: false,
        }
    }
    
    componentDidMount(){
        this.checkStore();
    }
    
    checkStore () {
        const store =JSON.parse(localStorage.getItem('Authorization'));
        if(store){
            this.setState({
                isAuthenticated:true
            })
        }
    }

    render(){
        if(this.state.isAuthenticated) {
            return <Redirect to = "/protected/dashboard" />
        }
        return (
            <div>     
                <div className = "dashboard-container">
                    <Navigation />
                    <SearchBar />
                </div> 
                <Dashboardcards/>
            </div>
        )
    }
}

export default Dashboard;