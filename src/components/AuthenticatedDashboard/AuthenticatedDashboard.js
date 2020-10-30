import React, { Component } from 'react';
import ProtectedNav from '../Protectednav/ProtectedNav';
import SearchBar from '../SearchBar/SearchBar';
import Dashboardcards from '../Dashboardcards/Dashboardcards';
import axios from 'axios';
import FooterPagePro from '../Footer/Footer';


class AuthenticatedDashboard extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            name: '',
            email: '',
            phoneNumber: '',
            address: '',
            gender: ''
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
                    name: res.data.payload.name,
                    email: res.data.payload.email,
                    phoneNumber: res.data.payload.phone_no,
                    address: res.data.payload.address,
                    gender: res.data.payload.gender
                })
                
                localStorage.setItem("User", JSON.stringify({
                    id: this.state.id,
                    name: this.state.name,
                    email: this.state.email,
                    phoneNumber: this.state.phoneNumber,
                    address: this.state.address,
                    gender: this.state.gender
                }))
                
            } else {
                alert("An error occured Please try again later 11111111");       
            }
        })
        .catch(err => {
            alert("An error occured Please try again later");
        })
    }
    render() {
        return(
            <div>
                <div className = "dashboard-container">
                    <ProtectedNav name ={this.state.name} />
                    <SearchBar />
                </div>    
                <Dashboardcards/>
                <div>
                <FooterPagePro />
                </div>
            </div>
        )
    }
}

export default AuthenticatedDashboard;