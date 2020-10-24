import React, { Component } from 'react';
import axios from 'axios';
import ProtectedNav from '../Protectednav/ProtectedNav';
import SearchBar from '../SearchBar/SearchBar';
import Button from 'react-bootstrap/Button';
import { Modal }  from "react-responsive-modal";
import EditProfile from '../EditProfile/EditProfile';
import './ViewProfile.css';

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
            },
            open: false
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

    onCloseModal = () => {
        this.setState({ open: false })
    }

    onOpenModal = () => {
        this.setState({
            open: true
        })
    }

    render() {
        const { open } = this.state;
        const { name, gender, phoneNumber, email, address } = this.state.user;
        return ( 
            <div>
                <div className = "dashboard-container">
                    <ProtectedNav name = {this.state.user.name} />
                    <SearchBar /> 
                </div>
                {/* Here the profile pic and background-image component will be loaded and users name and image will be 
                        passed as props to the component  */}
                <h3>Personal Details</h3>
                <div>
                    <label>Full Name</label>
                    <input placeholder = {`${this.state.user.name}`} disabled/>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input placeholder = {`${this.state.user.phoneNumber}`} disabled/>
                </div>
                <div>
                    <label>Gender</label>
                    <input placeholder = {`${this.state.user.gender}`} disabled/>
                </div>
                <div>
                    <label>Address</label>
                    <input placeholder = {`${this.state.user.address}`} disabled/>
                </div>
                <Button onClick={this.onOpenModal} variant="danger" >
                    Edit
                </Button>
                <Modal open = {open} onClose = {this.onCloseModal} center
                        styles={{
                        modal: {
                            animation: `${ open ? 'customEnterAnimation' : 'customLeaveAnimation'
                            } 500ms`,
                        }}}
                        classNames={{
                            modal: 'customModalSignup'
                        }}
                    >
                        <EditProfile name = {name} email = {email} phoneNo = {phoneNumber} gender = {gender} address = {address} />
                </Modal>
            </div>
         );
    }     
}
 
export default Viewprofile;