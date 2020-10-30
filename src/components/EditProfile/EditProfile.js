import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            gender:'',
            address:''
         }
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onPhoneNumberChange = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    onGenderChange = (value) => {
        this.setState({
            gender: value
        })
    }

    onAddressChange = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    onUpdate = (event) => {
        event.preventDefault();
        const { name, email, phoneNumber, gender, address } = this.state;
        const userInfo = JSON.parse(localStorage.getItem('User'));
        const { id } = userInfo;
        const token = JSON.parse(localStorage.getItem('Authorization'))
        try {
            if(name === '' || email === '' || phoneNumber === '' || gender === '' || address === '') {
                alert("Please fill in all the fields.");
            } else {
                Axios.put('http://localhost:5000/student/editprofile', {
                    id: id,
                    name: name,
                    email: email,
                    phoneNo: phoneNumber,
                    gender: gender,
                    address: address
                }, 
                {
                    headers : {
                        Authorization: token
                    }
                }).then(res => {
                    if(res.data.success) {
                        localStorage.setItem("User", JSON.stringify({
                            id: res.data.payload.id,
                            name: res.data.payload.name,
                            email: res.data.payload.email,
                            phoneNumber: res.data.payload.phone_no,
                            address: res.data.payload.address,
                            gender: res.data.payload.gender
                        })) 
                    } else {
                        alert("The server has crashed. Please try again later");
                    }
                    
                })
            }
        } catch (error) {
            alert("There has been an erro, please try again later");
        }
    }

    render() {
        const userInfo = JSON.parse(localStorage.getItem('User'));
        const { name, email, phoneNumber, address } = userInfo;
        return(
            <Form>
                <h3 style = {{textAlign: "center"}} >Edit Profile Information</h3>
                <Form.Group >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text"  onChange = {this.onNameChange} placeholder = {`${name}`} />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={this.onEmailChange} placeholder = {email} />
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={this.onPhoneNumberChange} type="tel" placeholder = {phoneNumber} />
                    <Form.Label>Gender</Form.Label>
                        <Form.Group>
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                onChange = {() => {this.onGenderChange("male")}}
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                onChange = {() => {this.onGenderChange("female")}}
                            />
                        </Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text"  onChange = {this.onAddressChange} placeholder = {address} />
                </Form.Group>
                <Button onClick={this.onUpdate} variant="danger">
                    Update
                </Button>
            </Form>
        )
    }
}

export default EditProfile;