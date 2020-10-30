import React, { Component } from 'react';
import Navigation from "../Navigation/Navigation";
import SearchBar from '../SearchBar/SearchBar';
import "./Dashboard.css"
import { Redirect } from 'react-router';
import Dashboardcards from '../Dashboardcards/Dashboardcards'
import FooterPagePro from '../Footer/Footer';


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
            <div className = "dashboard-container-main">     
                <div className = "dashboard-container">
                    <Navigation />
                    <SearchBar />
                </div> 
                <Dashboardcards/>
                <FooterPagePro />
            </div>
        )
    }
}

export default Dashboard;