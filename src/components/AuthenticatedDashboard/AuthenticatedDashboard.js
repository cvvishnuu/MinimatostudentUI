import React, { Component } from 'react';
import ProtectedNav from '../Protectednav/ProtectedNav';
import SearchBar from '../SearchBar/SearchBar';
import Dashboardcards from '../Dashboardcards/Dashboardcards';
import axios from 'axios';
import FooterPagePro from '../Footer/Footer';
import CanteenCards from '../CanteenCards/CanteenCards'



class AuthenticatedDashboard extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            name: '',
            email: '',
            phoneNumber: '',
            address: '',
            gender: '', 
            canteenDetails:[],
            searchResults: null, 
        }
    }

    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('Authorization'))
        const reqOne = axios.get('http://localhost:5000/student/dashboard', {headers: {Authorization: token}})
        const reqTwo = axios.get('http://localhost:5000/student/getCanteenDetails')
        axios.all([reqOne, reqTwo]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]
            if(responseOne.data.success) {
                this.setState({
                    id: responseOne.data.payload.id,
                    name: responseOne.data.payload.name,
                    email: responseOne.data.payload.email,
                    phoneNumber: responseOne.data.payload.phone_no,
                    address: responseOne.data.payload.address,
                    gender: responseOne.data.payload.gender,            
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
            if(responseTwo.data.payload.success) {
                this.setState({ 
                    canteenDetails:responseTwo.data.payload.canteenDetails
                })
                localStorage.setItem("canteenDetails", JSON.stringify({
                    canteenDetails: responseTwo.data.payload.canteenDetails
                }))
            }
        }))
        .catch(err => {
            alert("An error occured Please try again later");
        })
    }

    loadSearchResuts = (results) => {
        this.setState({
            searchResults: results
        })
    }

    render() {
        return(
            <div>
            {
                (this.state.searchResults)?
                <>
                    <div className = "dashboard-container">                
                        <ProtectedNav name ={this.state.name} onImageLoad = {this.onImageLoad}/>
                        <SearchBar details = {this.state.canteenDetails} loadSearchResuts = {this.loadSearchResuts}/>
                    </div>                        
                    <CanteenCards canteenDetails = {this.state.searchResults}/>
                    <div>
                        <FooterPagePro />
                    </div>
                </>
                :
                <>
                    <div className = "dashboard-container">                
                        <ProtectedNav name ={this.state.name} onImageLoad = {this.onImageLoad}/>
                        <SearchBar details = {this.state.canteenDetails} loadSearchResuts = {this.loadSearchResuts}/>
                    </div>    
                    <Dashboardcards/>
                    <CanteenCards canteenDetails = {this.state.canteenDetails}/>
                    <div>
                        <FooterPagePro />
                    </div>
                </>
            }
                
            </div>
        )
    }
}

export default AuthenticatedDashboard;