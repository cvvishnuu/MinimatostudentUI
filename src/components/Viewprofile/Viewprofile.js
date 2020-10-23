import React, { Component } from 'react';
import axios from 'axios';
import ProtectedNav from '../Protectednav/ProtectedNav';
import SearchBar from '../SearchBar/SearchBar';


class Viewprofile extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                id: '',
                name: '',
                email: '',
                phoneNumber: '',
                address: '',
                gender: ''
            }
        }
    }

    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('Authorization'))
        axios.get('http://localhost:5000/student/viewprofile', {
            headers : {
                Authorization: token
            }, 
        })
        .then(res => {
            console.log(res);
            if(res.data.success) {
                this.setState({
                    user: {
                        id: res.data.payload.id,
                        name: res.data.payload.name,
                        email: res.data.payload.email,
                        phoneNumber: res.data.payload.phone_no,
                        address: res.data.payload.address,
                        gender: res.data.payload.gender
                    }
                })
            } else {
                alert("There has been an error. Kindly try again later");
            }
        })
        .catch(err => {
            alert("The server down. Kindly try again later")
        })
    }

    render() {
        return ( 
            <div>
                <div className = "dashboard-container">
                    <ProtectedNav name = {this.state.user.name} />
                    <SearchBar />        
                </div>
            </div>
         );
    }     
}
 
export default Viewprofile;