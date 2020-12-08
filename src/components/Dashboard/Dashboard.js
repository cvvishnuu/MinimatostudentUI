import React, { Component } from 'react';
import Navigation from "../Navigation/Navigation";
import SearchBar from '../SearchBar/SearchBar';
import "./Dashboard.css"
import { Redirect } from 'react-router';
import Dashboardcards from '../Dashboardcards/Dashboardcards';
import CanteenCards from '../CanteenCards/CanteenCards'
import FooterPagePro from '../Footer/Footer';
import axios from 'axios';



class Dashboard extends Component {
    constructor() {
        super();
        this.state = {  
            isAuthenticated: false,
            canteenDetails:[],
        }
    }
    
    componentDidMount(){

      axios.get('http://localhost:5000/student/getCanteenDetails')
      .then(res=>{
          console.log(res.data.payload)
          this.setState({ canteenDetails:res.data.payload})
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
                {/* dashboard cards */}
                <Dashboardcards/>
                {/* canteen cards */}                
                <CanteenCards details = {this.state.canteenDetails}/>
                <FooterPagePro />
            </div>
        )
    }
}

export default Dashboard;