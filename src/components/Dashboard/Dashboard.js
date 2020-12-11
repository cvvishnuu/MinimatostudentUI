import React, { Component } from 'react';
import Navigation from "../Navigation/Navigation";
import SearchBar from '../SearchBar/SearchBar';
import "./Dashboard.css"
import { Redirect } from 'react-router';
import Dashboardcards from '../Dashboardcards/Dashboardcards';
import CanteenCards from '../CanteenCards/CanteenCards'
import FooterPagePro from '../Footer/Footer';
import axios from 'axios';
import CanteenResults from '../CanteenResults/CanteenResults'



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isAuthenticated: false,
            canteenDetails:[],
            searchResults: null,          
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:5000/student/getCanteenDetails')
        .then(res=>{            
            this.setState({ 
                canteenDetails:res.data.payload.canteenDetails
            })
        })
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

    loadSearchResuts = (results) => {
        this.setState({
            searchResults: results
        })
    }

    render(){
        if(this.state.isAuthenticated) {
            return <Redirect to = "/protected/dashboard" />
        }
        return (                            
            <div className = "dashboard-container-main">  
            {
                (this.state.searchResults)?
                <>
                    <div className = "dashboard-container">
                        <Navigation />
                        <SearchBar details = {this.state.canteenDetails} loadSearchResuts = {this.loadSearchResuts}/>
                    </div> 
                    <CanteenResults canteenDetails = {this.state.searchResults}/>   
                    <FooterPagePro />
                </>
                :  
                <>      
                    <div className = "dashboard-container">
                        <Navigation />
                        <SearchBar details = {this.state.canteenDetails} loadSearchResuts = {this.loadSearchResuts}/>
                    </div> 
                    <Dashboardcards/>               
                    <CanteenCards canteenDetails = {this.state.canteenDetails}/>
                    <FooterPagePro />   
                </>     
            }                
            </div>           
        )
    }
}

export default Dashboard;