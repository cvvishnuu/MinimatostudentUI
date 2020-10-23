import React, { Component } from 'react';
import ProtectedNav from '../Protectednav/ProtectedNav';
import SearchBar from '../SearchBar/SearchBar';
import Dashboardcards from '../Dashboardcards/Dashboardcards';
import axios from 'axios';


class AuthenticatedDashboard extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            name: ''
        }
    }

    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('Authorization'))
        axios.get('http://localhost:5000/student/dashboard', {
            headers : {
                Authorization: token
            },
        })
        .then(res => {
            if(res.data.success) {
                this.setState({
                    id: res.data.payload.id,
                    name: res.data.payload.name
                })
            } else {
                alert("An error occured Please try again later 11111111");       
            }
        })
        .catch(err => {
            alert("An error occured Please try again later");
        })
    }
    render(){
        return(
            <div>
                <div className = "dashboard-container">
                    <ProtectedNav name ={this.state.name} />
                    <SearchBar />
                </div>    
                <Dashboardcards/>
            </div>
        )
    }
}

export default AuthenticatedDashboard;